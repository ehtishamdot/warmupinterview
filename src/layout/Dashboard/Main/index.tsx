import Board from "../../../components/Board";
import SideNav from "../../../components/SideNav";
import { useAppSelector } from "../../../hooks/useRedux";

const Main = () => {
  const data = useAppSelector((state) => state.data.data);
  const currentBoardTab = data[0];

  return (
    <div className="Main">
      <SideNav />
      <Board allBoards={data} currentBoard={currentBoardTab} />
    </div>
  );
};

export default Main;
