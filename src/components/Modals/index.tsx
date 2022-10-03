import { useAppSelector } from "../../hooks/useRedux";
import AddQuestion from "./AddQuestion";
import ViewQuestion from "./ViewQuestion";
import ViewSolution from "./ViewSolution";
import ViewTopic from "./ViewTopic";

const Modals = () => {
  const getModal = useAppSelector((state) => state.modal);
  const BoardTab = useAppSelector((state) => state.boardTab);
  console.log();
  return (
    <>
      {/* {getModal.ModalType === "viewTopic" && (
        <ViewTopic
          ModalDetail={getModal.ModalDetail}
          ModalType={getModal.ModalType}
          BoardTab={BoardTab}
        />
      )} */}

      {getModal.ModalType === "viewSolution" && (
        <ViewSolution
          ModalDetail={getModal.ModalDetail}
          ModalType={getModal.ModalType}
          BoardTab={BoardTab}
        />
      )}
      {getModal.ModalType === "viewQuestion" && (
        <ViewQuestion
          ModalDetail={getModal.ModalDetail}
          ModalType={getModal.ModalType}
          BoardTab={BoardTab}
        />
      )}
    </>
  );
};

export default Modals;
