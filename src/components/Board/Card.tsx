import React from "react";
import { ITask } from "../../data/type";
import { useAppDispatch } from "../../hooks/useRedux";
import { openModal } from "../../reducer/modalSlice";

interface CardType {
  cardData: ITask;
}

const Card = ({ cardData }: CardType) => {
  const dispatch = useAppDispatch();

  return (
    <div
      onClick={() => {
        dispatch(
          openModal({
            ModalType: "viewQuestion",
            ModalDetail: cardData,
          })
        );
      }}
      className={`Card`}
    >
      <div className="Card__title">{cardData.question}</div>
      <div className="Card__count">
        {`${0} of ${cardData.subtasks?.length} subtasks`}
      </div>
    </div>
  );
};

export default Card;
