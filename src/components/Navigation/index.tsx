import { useAppDispatch } from "../../hooks/useRedux";
import { setTopic } from "../../reducer/boardTopicSlice";
import { closeModal, openModal } from "../../reducer/modalSlice";
import Button from "../../standard/Button";

interface IList {
  text: string;
  ModalType?: string;
  boardTab?: string;
}

interface INavigation {
  Buttons: IList[];
}

const Navigation = ({ Buttons }: INavigation) => {
  const dispatch = useAppDispatch();

  const modalHandler = (ModalType?: string) => {
    if (!ModalType) return;

    dispatch(closeModal());
    dispatch(openModal({ ModalType }));
  };

  const boardTabHandler = (boardTab?: string) => {
    dispatch(setTopic(boardTab));
  };

  return (
    <nav className="Navigation">
      {Buttons.map((button) => (
        <li key={button.text} className="Navigation__list">
          <Button
            onClick={() => boardTabHandler(button.boardTab)}
            className="Navigation__list--item"
          >
            {button.text}
          </Button>
        </li>
      ))}
    </nav>
  );
};

export default Navigation;
