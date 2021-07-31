import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Badge from "react-bootstrap/Badge";
import { IMAGES_URL } from "../constants";
import { Image } from "react-bootstrap";
import moment from "moment";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { adsService } from "../services/ads-service";

const AdDetailsModal = ({ ad, modalShow, setModalShow, onDelete }) => {
  const history = useHistory();

  const isCurrentUsersAd = () => {
    return localStorage.getItem("currentUserUsername") === ad.user.username;
  };

  const handleDelete = () => {
    onDelete();
  };

  const deleteAd = async () => {
    try {
      await adsService.delete(ad.id);
      toast.info("Ad successfully deleted", {
        hideProgressBar: true,
      });
      setModalShow(false);
      handleDelete();
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <>
      <Modal show={modalShow} onHide={() => setModalShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{ad.name}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Image
            variant="bottom"
            style={{ maxWidth: "22rem", maxHeight: "18rem" }}
            src={IMAGES_URL + ad.imageUrl}
          />
        </Modal.Body>

        <Modal.Body>
          {ad.description} <br />
          Price: {ad.price} &#8364; <br />
          Created: {moment(ad.creationDate.toString()).format("LL")}
        </Modal.Body>
        <Modal.Body>
          <h4>User details:</h4>
          Username: {ad.user.username} <br />
          Phone number: {ad.user.phoneNumber} <br />
          Active since:{" "}
          {moment(ad.user.registrationDate.toString()).format("LL")}
        </Modal.Body>
        <Modal.Body>
          <Badge pill bg="primary">
            {ad.category}
          </Badge>{" "}
        </Modal.Body>

        <Modal.Footer className="d-flex justify-content-end">
          {isCurrentUsersAd() && (
            <Button variant="outline-danger me-2" onClick={deleteAd}>
              Delete
            </Button>
          )}
          {isCurrentUsersAd() && (
            <Button
              onClick={() => history.push("/edit-ad/" + ad.id)}
              variant="outline-warning"
            >
              Edit
            </Button>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default AdDetailsModal;
