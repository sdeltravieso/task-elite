import React from "react";
import Modal from "react-modal";
import { Input, TextArea, FormBtn } from "../../MainTasks/Form";

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
    departmentName,
    departmentDescription,
    isOpen,
    askToClose,
    onAfterOpen,
    onRequestClose,
    handleFormSubmit,
    handleInputChange
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
          Department Name:
          <Input
            value={departmentName}
            onChange={handleInputChange}
            name="departmentName"
            placeholder="Department Name (required)"
          />
        </div>
        Department Description:
        <TextArea
          value={departmentDescription}
          onChange={handleInputChange}
          name="departmentDescription"
          placeholder="Department Description (required)"
        />
        {/* <input /> */}
        <br />
        <FormBtn
          disabled={!(departmentName && departmentDescription)}
          onClick={handleFormSubmit}
          // onClick={askToClose}
        >
          Create Department
        </FormBtn>
        {/* <button>Create Task</button> */}
        <button onClick={askToClose}>Cancel</button>
      </form>
    </Modal>
  );
};
