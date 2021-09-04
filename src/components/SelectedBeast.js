import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from 'react-bootstrap/Modal'



// Modal =====> App


class SelectedBeast extends React.Component {

    render() {
        return (
            <div>
                <Modal show={this.props.show} onHide={this.props.modalClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>{this.props.description}</Modal.Body>
                    <img className="imgModal" src={this.props.image_url} />
                    <Modal.Footer></Modal.Footer>
                </Modal>

                
            </div>
        );
    }

}


export default SelectedBeast;