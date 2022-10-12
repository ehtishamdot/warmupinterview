import Board from "../../../components/Board";
import SideNav from "../../../components/SideNav";
import { useAppSelector } from "../../../hooks/useRedux";

const Main = () => {
  const data = useAppSelector((state) => state.data.data);
  const boardTab = useAppSelector((state) => state.boardTab);

  console.log(data, boardTab);
  const currentBoardTabData = data.filter((item) => item.name === boardTab);

  return (
    <div className="Main">
      <SideNav />
      <Board allBoards={data} currentBoard={currentBoardTabData[0]} />
    </div>
  );
};

export default Main;
