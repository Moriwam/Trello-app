import { useContext } from "react";
import { Link } from "react-router-dom";

import BoardItem from "../../components/boarditems/BoardItem";
import { BoardContext } from "../../contexts/board";
import "./boardlist.css";

function BoardList() {
  const { boards } = useContext(BoardContext);
  return (
    <div className="flex-wrap m-top-md d-flex justify-content-around">
      {boards?.map((board) => (
        <Link key={board.id} to={`/${board.id}`}>
          <BoardItem board={board} />
        </Link>
      ))}
    </div>
  );
}

export default BoardList;
