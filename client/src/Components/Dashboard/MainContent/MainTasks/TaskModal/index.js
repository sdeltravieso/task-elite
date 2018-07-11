import React, { Component } from 'react';
// import Modal from 'react-modal';
import MyModal from './Modal';
import API from "../../utils/API";

const MODAL_A = 'modal_a';
// const MODAL_B = 'modal_b';

const DEFAULT_TITLE = 'New Task';

class AddTaskModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
    //   title1: DEFAULT_TITLE,
    //   currentModal: null,
      taskName: "",
      taskDescription: ""

    };
  }

  toggleModal = key => event => {
    event.preventDefault();
    if (this.state.currentModal) {
      this.handleModalCloseRequest();
      return;
    }

    this.setState({
      ...this.state,
      currentModal: key,
      title1: DEFAULT_TITLE
    });
  }

  handleModalCloseRequest = () => {
    // opportunity to validate something and keep the modal open even if it
    // requested to be closed
    this.setState({
      ...this.state,
      currentModal: null
    });
  }

//   handleInputChange = e => {
//     let text = e.target.value;
//     if (text == '') {
//       text = DEFAULT_TITLE;
//     }
//     this.setState({ ...this.state, title1: text });
//   }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  }

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.taskName && this.state.taskDescription) {
        this.toggleModal();
      API.createTask({
        taskName: this.state.taskName,
        // taskName: "do this fun thing",
        // author: this.state.author,
        completed: 0,
        // description: "Fun thing to be done",
        description: this.state.taskDescription,
        department_id: 1,
        assigned_user: 2
      })
        .then(res => API.loadTasks())
        .catch(err => console.log(err));
    }
  };

  render() {
    const { currentModal } = this.state;

    return (
      <div>
        <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_A)}>Create New Task</button>
        {/* <button type="button" className="btn btn-primary" onClick={this.toggleModal(MODAL_B)}>Open Modal B</button> */}
        <MyModal
          title={this.state.title1}
          taskName={this.state.taskName}
          taskDescription={this.state.taskDescription}
          isOpen={currentModal == MODAL_A}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.handleModalCloseRequest}
          askToClose={this.toggleModal(MODAL_A)}
          handleInputChange={this.handleInputChange}
          handleFormSubmit={this.handleFormSubmit} />


        {/* <Modal
          ref="mymodal2"
          id="test2"
          aria={{
            labelledby: "heading",
            describedby: "fulldescription"
          }}
          closeTimeoutMS={150}
          contentLabel="modalB"
          isOpen={currentModal == MODAL_B}
          shouldCloseOnOverlayClick={false}
          onAfterOpen={this.handleOnAfterOpenModal}
          onRequestClose={this.toggleModal(MODAL_B)}>
          <h1 id="heading" ref={h1 => this.heading = h1}>This is the modal 2!</h1>
          <div id="fulldescription" tabIndex="0" role="document">
            <p>This is a description of what it does: nothing :)</p>
          </div>
        </Modal> */}


      </div>
    );
  }
}

export default AddTaskModal

// export default {
//   label: "Working with one modal at a time.",
//   app: SimpleUsage
// };