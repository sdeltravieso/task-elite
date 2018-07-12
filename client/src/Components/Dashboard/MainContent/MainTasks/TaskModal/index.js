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

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleOnAfterOpenModal = () => {
    // when ready, we can access the available refs.
    this.heading && (this.heading.style.color = '#F00');
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.taskName && this.state.taskDescription) {
      API.createTask({
        taskName: this.state.taskName,
        // taskName: "do this fun thing",
        // author: this.state.author,
        completed: 1,
        // description: "Fun thing to be done",
        description: this.state.taskDescription,
        department_id: 1,
        assigned_user: 2
      })
      .then(this.handleModalCloseRequest())
      .then(res => API.loadTasks())
      // .then(loadTasks())
      .catch(err => console.log(err))
      // this.toggleModal();
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

      </div>
    );
  }
}

export default AddTaskModal