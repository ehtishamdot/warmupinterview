interface CheckBoxProps {
  task: string;
  checked: boolean;
  index: number;
  changeTopicCheck: (id: number) => void;
}

const CheckBox = (props: CheckBoxProps) => {
  const { task, checked, index, changeTopicCheck } = props;

  return (
    <label className={`CheckBox ${checked ? "CheckBox--checked" : ""}`}>
      <input
        type="checkbox"
        onChange={() => changeTopicCheck(index)}
        checked={checked}
      />
      {task}
    </label>
  );
};

export default CheckBox;
