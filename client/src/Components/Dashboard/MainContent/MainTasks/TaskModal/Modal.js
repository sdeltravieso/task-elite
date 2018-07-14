import React from "react";
import Modal from "react-modal";
import { Input, TextArea, FormBtn } from "../Form";

// class NewTask extends Component {
//   state = {
//     taskName: "",
//     // author: "",
//     taskDescription: ""
//   };
// }

export default props => {
  const {
    title,
    taskName,
    taskDescription,
    isOpen,
    askToClose,
    onAfterOpen,
    onRequestClose,
    handleFormSubmit,
    handleInputChange,
  } = props;

  return (
    <Modal
      id="test"
      contentLabel="modalA"
      closeTimeoutMS={150}
      isOpen={isOpen}
      onAfterOpen={onAfterOpen}
      onRequestClose={onRequestClose}
      appElement={document.getElementById("root")}
    >
      <h1>{title}</h1>
      <form>
        {/* <input onChange={onChangeInput} /> */}
        <div>
          Task Title:
          <Input
            value={taskName}
            onChange={handleInputChange}
            name="taskName"
            placeholder="Task Name (required)"
          />
        </div>
        Task Description:
        <TextArea
          value={taskDescription}
          onChange={handleInputChange}
          name="taskDescription"
          placeholder="Task Description (required)"
        />
        {/* <input /> */}
        <br />
        <FormBtn
          disabled={!(taskName && taskDescription)}
          onClick={handleFormSubmit}
          // onClick={askToClose}
        >
          Create Task
        </FormBtn>
        {/* <button>Create Task</button> */}
        <button onClick={askToClose}>Cancel</button>
      </form>
    </Modal>
  );
};
