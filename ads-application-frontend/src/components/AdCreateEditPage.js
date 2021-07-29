import { Card } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Header from "./Header";
import { Form } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { adsService } from "../services/ads-service";
import { toast } from "react-toastify";
import { CATEGORIES } from "../constants";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";

const AdCreateEditPage = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [showErrorMsg, setShowErrorMsg] = useState(false);
  const [selectedFile, setSelecetedFile] = useState(null);
  const [title, setTitle] = useState("");
  const [ad, setAd] = useState({});

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    let id = params.id;
    if (id === undefined) {
      setTitle("Create New Ad");
    } else {
      setTitle("Edit Ad");
      getAd(id);
    }
  }, []);

  const getAd = async (id) => {
    try {
      const response = await adsService.get(id);
      setAd(response);
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message, {
        hideProgressBar: true,
      });
    }
  };

  const onFileChange = (event) => {
    let selected = event.target.files[0];
    setSelecetedFile(selected);
    formik.values.imageUrl = selected.name;
  };

  const formik = useFormik({
    initialValues: {
      name: ad.name,
      description: ad.description,
      image: undefined,
      imageUrl: ad.imageUrl,
      price: ad.price,
      category: ad.category,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      description: Yup.string().required("Description is required"),
      image: Yup.object().nullable(),
      imageUrl: Yup.string().required("Image is required"),
      price: Yup.number().required("Price is required"),
      category: Yup.string().required("Category is required"),
    }),
    onSubmit: async (values, { resetForm }) => {
      const formData = new FormData();
      if (selectedFile !== null) {
        formData.append("file", selectedFile, selectedFile.name);

        try {
          const response = await adsService.uploadImage(formData);
          values.imageUrl = response;
        } catch (error) {
          setErrorMsg(error.response ? error.response.data : error.message);
          setShowErrorMsg(true);
          setTimeout(() => {
            setShowErrorMsg(false);
          }, 5000);
        }
      }

      try {
        setShowErrorMsg(false);
        resetForm();
        var response;
        if (title === "Create New Ad") {
          response = await adsService.create(values);
        } else {
          response = await adsService.edit(values, ad.id);
        }
        toast.info(response.message, {
          hideProgressBar: true,
        });

        history.push("/");
      } catch (error) {
        setErrorMsg(error.code ? error.response.data : error.message);
        setShowErrorMsg(true);
        setTimeout(() => {
          setShowErrorMsg(false);
        }, 5000);
      }
    },
  });

  return (
    <>
      <Header />
      <Card
        style={{
          maxWidth: "30rem",
        }}
        className="shadow-lg ms-auto me-auto mt-5"
      >
        <Card.Header>
          <Card.Title> {title}</Card.Title>
        </Card.Header>
        <Card.Body>
          <Form onSubmit={formik.handleSubmit}>
            <Form.Group className="mt-2">
              <Form.Label>Name</Form.Label>
              <Form.Control
                id="name"
                name="name"
                type="text"
                placeholder="Enter ad's name"
                onChange={formik.handleChange}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <p style={{ color: "red" }}>{formik.errors.name}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                id="description"
                name="description"
                as="textarea"
                rows={3}
                placeholder="Enter ad's description"
                onChange={formik.handleChange}
                value={formik.values.description}
              />
              {formik.touched.description && formik.errors.description ? (
                <p style={{ color: "red" }}>{formik.errors.description}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Price</Form.Label>
              <Form.Control
                id="price"
                name="price"
                type="number"
                min="0"
                placeholder="Enter ad's price (&#8364;)"
                onChange={formik.handleChange}
                value={formik.values.price}
              />
              {formik.touched.price && formik.errors.price ? (
                <p style={{ color: "red" }}>{formik.errors.price}</p>
              ) : null}
            </Form.Group>
            <Form.Group className="mt-2">
              <Form.Label>Image</Form.Label>
              <Form.Control
                id="imageUrl"
                name="imageUrl"
                type="file"
                placeholder="Select image"
                onChange={onFileChange}
                value={formik.values.image}
              />
              {formik.touched.imageUrl && formik.errors.imageUrl ? (
                <p style={{ color: "red" }}>{formik.errors.imageUrl}</p>
              ) : null}
            </Form.Group>
            <Form.Label className="mt-2">Category</Form.Label>
            <Form.Select
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            >
              <option defaultChecked>Select category</option>
              {CATEGORIES.map((c) => {
                return (
                  <option key={c.value} value={c.value}>
                    {c.label}
                  </option>
                );
              })}
            </Form.Select>
            {formik.touched.category && formik.errors.category ? (
              <p style={{ color: "red" }}>{formik.errors.category}</p>
            ) : null}
            <div className="d-flex justify-content-end mt-4 mb-2">
              <Button type="submit" variant="secondary">
                Submit
              </Button>
            </div>
          </Form>
          {showErrorMsg && (
            <div
              className="card mt-3 ms-auto me-auto"
              style={{
                maxWidth: "40rem",
                backgroundColor: "#ff7e75",
              }}
            >
              <h4>{errorMsg}</h4>
            </div>
          )}
        </Card.Body>
      </Card>
    </>
  );
};

export default AdCreateEditPage;
