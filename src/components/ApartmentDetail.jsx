import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function ApartmentDetail(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Detalles de tu apartamento
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h4>{props.apartment?.description}</h4>
          <p>Área interior: {props.apartment?.livingArea} m<sup>2</sup></p>
          <p>Área del balcón: {props.apartment?.balcony} m<sup>2</sup></p>
          <p>Área total: {props.apartment?.totalArea} m<sup>2</sup></p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }

  export default ApartmentDetail;