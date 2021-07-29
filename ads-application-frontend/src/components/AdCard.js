import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import { IMAGES_URL } from "../constants";
import AdDetailsModal from "./AdDetailsModal";
import { useHistory } from "react-router-dom";
import { adsService } from "../services/ads-service";
import { toast } from "react-toastify";

const AdCard = ({ ad, onDelete }) => {
  const [adDetailsModalShow, setAdDetailsModalShow] = useState(false);

  const history = useHistory();

  const isCurrentUsersAd = () => {
    return localStorage.getItem("currentUserUsername") === ad.user.username;
  };

  const deleteAd = async () => {
    try {
      await adsService.delete(ad.id);
      toast.info("Ad successfully deleted", {
        hideProgressBar: true,
      });
      handleDelete();
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message, {
        hideProgressBar: true,
      });
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <>
      <Card
        className="shadow-lg mt-2 ms-1 me-1 mb-2"
        style={{ maxWidth: "22rem" }}
        key={ad.id}
      >
        <Card.Body>
          <Card.Img
            variant="bottom"
            src={IMAGES_URL + ad.imageUrl}
            style={{ maxWidth: "25rem", maxHeight: "15rem" }}
          />

          <Card.Title>{ad.name}</Card.Title>
          <Card.Text>
            {ad.description}
            <br />
            Price: {ad.price} &#8364; <br />
            <Badge pill bg="primary">
              {ad.category}
            </Badge>{" "}
          </Card.Text>
        </Card.Body>
        <Card.Footer className=" d-flex justify-content-end">
          {isCurrentUsersAd() && (
            <Button onClick={deleteAd} variant="outline-danger me-2">
              Delete
            </Button>
          )}
          {isCurrentUsersAd() && (
            <Button
              variant="outline-warning me-2"
              onClick={() => history.push("/edit-ad/" + ad.id)}
            >
              Edit
            </Button>
          )}

          <Button
            variant="outline-secondary"
            onClick={() => setAdDetailsModalShow(true)}
          >
            Details
          </Button>
        </Card.Footer>
      </Card>

      <AdDetailsModal
        ad={ad}
        modalShow={adDetailsModalShow}
        setModalShow={setAdDetailsModalShow}
        onDelete={() => {
          handleDelete();
        }}
      />
    </>
  );
};

export default AdCard;
