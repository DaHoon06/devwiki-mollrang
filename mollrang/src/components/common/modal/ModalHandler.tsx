import { useAppSelector } from "@hooks/useRedux";
import React, { ReactElement, ReactNode, useEffect, useRef } from "react";
import { BottomSlideModal } from "@components/common/modal/slide/BottomSlide";
import { FadeModal } from "@components/common/modal/fade/FadeModal";
import ReactDOM from "react-dom";
import { Element } from "@hooks/useModalHook";
import { SideNav } from "@components/navigation/side/SideNav";

interface Modal {
  children: ReactNode;
}

export interface ModalProps extends Modal {
  isOpen: boolean;
  ele: Element;
}

export const ModalHandler: React.FunctionComponent<Modal> = (
  props,
): ReactElement => {
  const { children } = props;
  const { modal } = useAppSelector((state) => state.modalStore);
  const { isOpen, modalType } = modal;

  const ele = useRef<HTMLDivElement>(null);
  const element =
    typeof window !== "undefined" &&
    (document.querySelector("#modal") as HTMLDivElement);

  useEffect(() => {
    const html = document.querySelector("html");
    if (html) {
      isOpen ? (html.style.overflow = "hidden") : (html.style.overflow = "");
    }
  }, [isOpen]);

  if (!element) return null;

  const modalHandler = (children: ReactNode) => {
    switch (modalType) {
      case "side-menu":
        return (
          <SideNav ele={ele} isOpen={isOpen}>
            {children}
          </SideNav>
        );
      case "bottom-slide":
        return (
          <BottomSlideModal ele={ele} isOpen={isOpen}>
            {children}
          </BottomSlideModal>
        );
      default:
        return (
          <FadeModal ele={ele} isOpen={isOpen}>
            {children}
          </FadeModal>
        );
    }
  };

  return <>{ReactDOM.createPortal(modalHandler(children), element)}</>;
};
