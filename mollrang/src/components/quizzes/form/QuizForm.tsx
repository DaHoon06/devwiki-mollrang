import React, {ReactElement, useRef, useState} from "react";
import { Typography } from "@components/common/Typography";
import { QuizIcon } from "@components/common/icons/QuizIcon";
import * as S from "./style";
import { EmptyBlock } from "@components/ui/block/EmptyBlock";
import { SkeletonUi } from "@components/ui/skeleton/SkeletonUi";
import { useTodayQuizzesQuery } from "@services/queries/quizzesQuery";
import { Button } from "@components/common/Button";
import toast from "@components/common/toast/ToastHandler";
import { quizSolutionSubmit } from "@services/apis/quizzes";
import {Input} from "@components/common/input/Input";
import {CheckCircleIcon} from "@components/common/icons/CheckCicleIcon";
import {HintBlock} from "@components/ui/block/HintBlock";
import styled from "styled-components";
import {HamburgerIcon} from "@components/common/icons/HamburgerIcon";
import {useAppDispatch} from "@hooks/useRedux";
import {setModalOpen, State} from "@store/slice/modalSlice";
import {useRouter} from "next/router";


interface Block {
  [key: string]: string;
}

interface Chance {
  step: number;
  answer: boolean;
  hint: Block[];
}

const FlexBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  
  & > div {
    margin: 0 4px;
  }
`;

const HintButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const HintButton = styled.button`
  width: 46px;
  height: 46px;
  border-radius: 50%;
  background-color: var(--bg_floating_button);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.6)
`;

const initialStepState: Chance[] = [
  { step: 1, answer: false, hint: [] },
  { step: 2, answer: false, hint: [] },
  { step: 3, answer: false, hint: [] },
  { step: 4, answer: false, hint: [] },
  { step: 5, answer: false, hint: [] },
];

export const QuizForm = (): ReactElement => {
  const [checkBox, setCheckBox] = useState<Chance[]>(initialStepState);
  const [answer, setAnswer] = useState<string>('');
  const [currentStep, setCurrentStep] = useState<number>(1);
  const inputRef = useRef<HTMLInputElement>(null);
  const dispatch = useAppDispatch();
  const router = useRouter();

  const { quiz, isLoading } = useTodayQuizzesQuery();

  const emptyBlockElementGenerator = (): ReactElement[] => {
    const block = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        block.push(<EmptyBlock key={`empty-box-${i}`} />);
      }
    }
    return block;
  };

  const todayQuizAnswerSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
  ): Promise<void> => {
    e.preventDefault();

    if (!inputValidation()) return;

    const sendData: {count: number, answer: string} = {
      count: currentStep,
      answer
    };
    // 정답 제출
    const { data } = await quizSolutionSubmit(sendData);
    // check box update
    checkBoxUpdate(data);

    setAnswer('');
    setCurrentStep(currentStep + 1);
  };

  const checkBoxUpdate = (hintData: Block[]): void => {
    const findIndex = checkBox.findIndex((v) => v.step === currentStep);
    const newCheckBox = [...checkBox];
    newCheckBox[findIndex].answer = true;
    newCheckBox[findIndex].hint = hintData;
    setCheckBox(newCheckBox);
  }

  const inputValidation = (): boolean => {
    if (answer.length <= 0) {
      toast.message('정답을 입력해 주세요.', 'error');
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    } else if (answer.length < quiz.answerLength) {
      toast.message('글자 수를 확인해 주세요.', 'error');
      if (inputRef.current !== null) inputRef.current.focus();
      return false;
    }
    if (currentStep > 5) {
      toast.message('더 이상 정답을 제출할 수 없습니다.', 'error');
      return false;
    }
    return true;
  }

  const hintBlockGenerator = (v: Block, key: string) => {
    const hintBlock = [];
    if (quiz) {
      for (let i = 0; i < quiz.answerLength; i++) {
        const styling = v[`answer${i+1}`] === 'O' ? 'success' : v[`answer${i+1}`] === 'y' ? 'hint' : v[`answer${i+1}`] === 'X' && 'wrong';
        hintBlock.push(<HintBlock
          className={styling}
          key={`hint-box-${i}-${key}`}
        />);
      }
    }
    return hintBlock;
  }

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (quiz) {
      const {answerLength} = quiz;

      if (e.target.value.length > answerLength) {
        e.target.value = e.target.value.slice(0, answerLength);
      }
      setAnswer(e.target.value);
    }
  }

  const onClickMessageBoxButton = (): void => {
    const modalState: State = {
      type: 'quiz-message',
      modalType: 'bottom-slide',
      isOpen: true,
    };
    dispatch(setModalOpen(modalState));
  }

  const goToHome = async (): Promise<void> => {
    await router.push("/");
  };

  return (
    <S.QuizFormLayout onSubmit={todayQuizAnswerSubmit}>
      <S.CheckBoxContainer>
        {checkBox.map((v, index) => {
          return (
            <li key={index}>
              <CheckCircleIcon className={v.answer && 'active'} />
              {v.hint.length > 0 && v.hint.map((block, blockIndex) => {
                return (
                  <FlexBox key={`key-${blockIndex}`}>
                    {hintBlockGenerator(block, `key-${blockIndex}`)}
                  </FlexBox>
                )
              })}
            </li>
          )
        })}
      </S.CheckBoxContainer>

      <S.QuizSolutionBox>
        <S.QuizFormTitle>
          <QuizIcon />
          {isLoading ? (
            <SkeletonUi theme={{ width: 300, height: 20, borderRadius: 4 }} />
          ) : (
            <>
              <Typography
                $variant={"body1"}
                $weight={"bold"}
                $color={"textDefault"}
              >
                {quiz.question}
              </Typography>
            </>
          )}
        </S.QuizFormTitle>
        <S.FlexBox>
          {emptyBlockElementGenerator()}
          {quiz.prefixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {quiz.prefixWord}
            </Typography>
          )}
          {quiz.suffixWord && (
            <Typography
              $variant={"body2"}
              $color={"textPrimary"}
              $weight={"bold"}
            >
              {quiz.suffixWord}
            </Typography>
          )}
        </S.FlexBox>
      </S.QuizSolutionBox>

      <S.InputContainer>
        <Input
          ref={inputRef}
          placeholder={`${quiz.answerLength} 자`}
          name={'quizAnswer'}
          disabled={currentStep > 5}
          value={answer}
          onChange={(e) => onChangeHandler(e)}
        />
      </S.InputContainer>
      <HintButtonWrapper>
        <HintButton type={'button'} onClick={onClickMessageBoxButton}>
          <HamburgerIcon />
        </HintButton>
      </HintButtonWrapper>
      <S.ButtonFlexBox>
        <Button variant={"secondary"} type={'button'} onClick={goToHome}>
          <Typography as={"span"} $weight={'bold'}>그만하기</Typography>
        </Button>
        <Button variant={"primary"} type={"submit"}>
          <Typography as={"span"} $weight={'bold'}>제출하기</Typography>
        </Button>
      </S.ButtonFlexBox>
    </S.QuizFormLayout>
  );
};
