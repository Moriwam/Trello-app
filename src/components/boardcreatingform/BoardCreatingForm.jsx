import { useState, useContext } from "react";
import { BoardContext } from "../../contexts/board";
import "./boardcreatingform.css";

function BoardCreatingForm() {
  const [boardTitle, setBoardTitle] = useState("");
  const { dispatchBoardAction } = useContext(BoardContext);

  const submitHandler = (e) => {
    e.preventDefault();
    if (boardTitle) {
      dispatchBoardAction({
        type: "CREATE_BOARD",
        payload: { title: boardTitle },
      });
      setBoardTitle("");
    } else {
      alert(`Please Provide a Board Name`);
    }
  };
  return (
    <div className="board-creating-form">
      <h1>Welcome to Trello app</h1>
      <div className="align-center m-top-md">
        <form onSubmit={(e) => submitHandler(e)}>
          <input
            placeholder="Enter Board Name"
            type="text"
            name="boardTitle"
            value={boardTitle}
            onChange={(e) => setBoardTitle(e.target.value)}
            id=""
          />
          <button type="submit" onClick={(e) => submitHandler(e)}>
            {" "}
            Create Boards{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default BoardCreatingForm;
