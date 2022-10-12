import React, { useEffect } from "react";
import { Cross } from "../data/icons";
import { useAppDispatch } from "../hooks/useRedux";
import { closeModal } from "../reducer/modalSlice";
import { useSpeechSynthesis } from "react-speech-kit";

const Modal = (props: { children: JSX.Element; className?: string }) => {
  const { cancel } = useSpeechSynthesis();
  const dispatch = useAppDispatch();

  useEffect(() => {
    const handleCloseModal = (event: KeyboardEvent) => {
      if (event.code === "Escape") {
        dispatch(closeModal());
      }
    };

    window.addEventListener("keydown", handleCloseModal);
    return () => window.removeEventListener("keydown", handleCloseModal);
  });

  return (
    <div
      className="Overlay"
      onClick={() => {
        dispatch(closeModal());
        cancel();
      }}
    >
      <div className={`Modal`} onClick={(e) => e.stopPropagation()}>
        <button className="Modal--close" onClick={() => dispatch(closeModal())}>
          <Cross />
        </button>
        {props.children}
      </div>
    </div>
  );
};

export default Modal;
