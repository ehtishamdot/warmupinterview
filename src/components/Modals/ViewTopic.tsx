import { useEffect, useState } from "react";
import { IModal, ISubTask } from "../../data/type";
import { useAppDispatch } from "../../hooks/useRedux";
import { editTopic } from "../../reducer/dataSlice";
import CheckBox from "../../standard/CheckBox";
import DropDown from "../../standard/DropDown";
import Modal from "../../standard/Modal";

const ViewTask = ({ ModalDetail, ModalType, BoardTab }: IModal) => {
  const dispatch = useAppDispatch();

  const [newTopic, setNewTopic] = useState({
    ...ModalDetail,
  });

  const onChangeTopicCheck = (id: number) => {
    let topicToCheck = newTopic.subtasks.slice();
    topicToCheck[id] = {
      ...topicToCheck[id],
      isCompleted: !topicToCheck[id].isCompleted,
    };
    setNewTopic({ ...newTopic, subtasks: topicToCheck });
  };

  useEffect(() => {
    dispatch(
      editTopic({
        newTopic: newTopic,
        BoardTab,
      })
    );
  }, [newTopic.subtasks]);

  return (
    <Modal>
      <div className="ViewTopic">
        <div className="ViewTopic__topWrapper">
          <h2>{ModalDetail.title}</h2>
          <DropDown />
        </div>
        <p className="ViewTopic__descWrapper">
          {ModalDetail.description ? ModalDetail.description : "No description"}
        </p>
        <div className="ViewTopic__subTopicWrapper">
          <p className="ViewTopic__sub-title">
            Subtasks ({2} of {4})
          </p>
          {newTopic.subtasks.map((task: ISubTask, index: number) => (
            <CheckBox
              task={task.title}
              checked={task.isCompleted}
              changeTopicCheck={onChangeTopicCheck}
              index={index}
            />
          ))}
        </div>
      </div>
    </Modal>
  );
};

export default ViewTask;
