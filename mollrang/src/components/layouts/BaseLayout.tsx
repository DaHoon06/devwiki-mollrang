import {PropsWithChildren, ReactElement} from "react";
import {Header} from "./header/Header";
import {BottomNavigation} from "@components/navigation/bottom/BottomNavigation";
import {ModalContainer} from "@containers/modal";
import * as S from "./style";

type Props = PropsWithChildren;

export const BaseLayout = (props: Props): ReactElement => {
  const {children} = props;

  return (
    <>
      <Header/>
      <S.Layout>
        <S.Main>{children}</S.Main>
      </S.Layout>
      <ModalContainer/>
      <BottomNavigation/>
    </>
  );
};
