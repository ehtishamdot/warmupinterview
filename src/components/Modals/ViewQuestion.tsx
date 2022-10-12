import React, { useState } from "react";
import { useSpeechSynthesis, useSpeechRecognition } from "react-speech-kit";
import { Keyboard, Microphone } from "../../data/icons";
import { IModal } from "../../data/type";
import { useAppDispatch } from "../../hooks/useRedux";
import { closeModal, openModal } from "../../reducer/modalSlice";
import Button from "../../standard/Button";
import Modal from "../../standard/Modal";

const ViewQuestion = ({ ModalDetail }: IModal) => {
  const [speech, setSpeech] = useState("");
  const [isKeyboard, setIsKeyBoard] = useState(false);

  const { speak, speaking } = useSpeechSynthesis();

  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result: string) => {
      setSpeech(result);
    },
  });

  const dispatch = useAppDispatch();

  const modalHandler = () => {
    dispatch(closeModal());
    dispatch(openModal({ ModalType: "viewSolution" }));
  };

  return (
    <Modal>
      <div className="ViewQuestion">
        <div className="ViewQuestion__topWrapper">
          <p
            onClick={() => {
              !speaking && speak({ text: ModalDetail.question });
            }}
            className="ViewQuestion__topWrapper--text"
          >
            {ModalDetail.question}
          </p>
        </div>
        {
          <div className="ViewQuestion__middleWrapper">
            <slot></slot>
            {!isKeyboard && (
              <div className="ViewQuestion__middleWrapper--text">{speech}</div>
            )}
            {isKeyboard && (
              <textarea
                onChange={(event) => setSpeech(event.target.value)}
                value={speech}
                className="ViewQuestion__middleWrapper--textarea"
                placeholder="Type your answer here."
              />
            )}
          </div>
        }
        <div className="ViewQuestion__bottomWrapper">
          <div className="ViewQuestion__actions">
            <div className="ViewQuestion__actions--left">
              <Button
                onClick={() => {
                  if (!listening) listen();
                  setIsKeyBoard(false);
                }}
                className="ViewQuestion__actions--answer"
              >
                &nbsp;
                <Microphone />
                &nbsp;&nbsp;&nbsp;Answer&nbsp;&nbsp;
              </Button>
              <Button
                onClick={() => {
                  if (listening) stop();
                  setIsKeyBoard(true);
                }}
                className="ViewQuestion__actions--keyboard"
              >
                <Keyboard />
              </Button>
            </div>
            <div className="ViewQuestion__actions--right">
              <Button
                onClick={modalHandler}
                className="ViewQuestion__actions--solution"
              >
                Solution
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewQuestion;
