import Marked from 'marked';
import React from 'react';

class DetailsModal extends React.Component {
  constructor(props) {
    super(props)
    this.closeModal = this.closeModal.bind(this)
  }

  closeModal(e) {
    this.props.onClose(e)
  }

  outcomes() {
    return this.list(this.props.outcomes, "Outcomes")
  }

  outputs() {
    return this.list(this.props.outputs, "Outputs")
  }

  list(elements, name) {
    if(elements.length === 0) { return }

    let listItems = elements.map( (element, idx) => {
      return <li key={idx}>{element}</li>
    });

    return (
      <div className="content">
        {name}:
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }

  render() {
    let description = {__html: Marked(this.props.description)}
    return (
        <div className="modal is-active">
          <div className="modal-background"></div>
            <div className="modal-card">
            <header className="modal-card-head">
               <p className="modal-card-title">{this.props.title}</p>
               <button onClick={this.closeModal} className="delete" aria-label="close"></button>
            </header>
            <section className="modal-card-body">
                <div className="description" dangerouslySetInnerHTML={description}></div>
                {this.outputs()}
                {this.outcomes()}
            </section>
            <footer className="modal-card-foot">
              <button onClick={this.closeModal} className="button is-info">Close</button>
            </footer>
          </div>
        </div>
    );
  }
}

export default DetailsModal;
