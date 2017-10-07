import React from 'react';
import Markdown from './Markdown.js';
import List from './List.js';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
    this.addModule = this.addModule.bind(this)
  }

  closeModal(e) {
    this.props.onClose(e)
  }

  addModule(e) {
    this.props.selectModule(this.props.module)
    this.closeModal(e)
  }

  render() {
    let description = this.props.module.description;
    return (
        <div className="modal is-active">
          <div className="modal-background"></div>
            <div className="modal-card">
            <header className="modal-card-head">
               <p className="modal-card-title">{this.props.module.title}</p>
               <button onClick={this.closeModal} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
              <Markdown className="description" text={description}></Markdown>
              <List elements={this.props.module.outputs} name="Outputs"></List>
              <List elements={this.props.module.outcomes} name="Outcomes"></List>
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.addModule} className="button">Add</button>
              <button onClick={this.closeModal} className="button is-info">Close</button>
            </footer>
          </div>
        </div>
    );
  }
}

export default DetailsModal;
