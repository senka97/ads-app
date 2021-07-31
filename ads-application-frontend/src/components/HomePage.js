import React, { useState, useEffect } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import { adsService } from "../services/ads-service";
import AdCard from "./AdCard";
import { Button, Pagination, Form, Row, Col } from "react-bootstrap";
import { useFormik } from "formik";
import * as Yup from "yup";
import { CATEGORIES, SORT } from "../constants";

const HomePage = () => {
  const [ads, setAds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5]);
  const [searchObj, setSearchObj] = useState({
    category: "",
    name: "",
    priceSort: "DESC",
    showMineOnly: false,
  });
  const [searchActive, setSearchActive] = useState(false);

  useEffect(() => {
    getAds(pageNumber);
  }, []);

  const initSearchObj = () => {
    setSearchObj({
      category: "",
      name: "",
      priceSort: "DESC",
      showMineOnly: false,
    });
  };

  const getAds = async (page) => {
    try {
      const response = await adsService.getAll(page);
      setAds(response);
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message, {
        hideProgressBar: true,
      });
    }
  };

  const onDelete = () => {
    getAds(pageNumber);
  };

  const nextPage = (item) => {
    if (searchActive) {
      search(item, searchObj);
      setPageNumber(item);
    } else {
      getAds(item);
      setPageNumber(item);
    }
  };

  const search = async (page, values) => {
    try {
      const response = await adsService.search(page, values);
      setAds(response);
    } catch (error) {
      toast.error(error.response ? error.response.data : error.message, {
        hideProgressBar: true,
      });
    }
  };

  const cancelSearch = () => {
    initSearchObj();
    setSearchActive(false);
    setPageNumber(0);
    getAds(0);
  };

  const formik = useFormik({
    initialValues: {
      name: searchObj.name,
      showMineOnly: searchObj.showMineOnly,
      priceSort: searchObj.priceSort,
      category: searchObj.category,
    },
    enableReinitialize: true,
    validationSchema: Yup.object({
      name: Yup.string(),
      showMineOnly: Yup.boolean(),
      priceSort: Yup.string(),
      category: Yup.string(),
    }),
    onSubmit: async (values) => {
      setPageNumber(0);
      setSearchObj(values);
      setSearchActive(true);
      search(pageNumber, values);
    },
  });

  return (
    <div>
      <Header />

      <div>
        <Form onSubmit={formik.handleSubmit} className="mx-5 mt-4">
          <Row className="g-2">
            <Col md>
              <Form.Label className="mt-2">Choose Category</Form.Label>
              <Form.Select
                id="category"
                onChange={formik.handleChange}
                value={formik.values.category}
              >
                <option defaultChecked value="">
                  Select category
                </option>
                {CATEGORIES.map((c) => {
                  return (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col md>
              <Form.Group className="mt-2">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Search ads by name"
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </Form.Group>
            </Col>
            <Col md>
              <Form.Label className="mt-2">Choose Price Sort</Form.Label>
              <Form.Select
                id="priceSort"
                onChange={formik.handleChange}
                value={formik.values.priceSort}
              >
                <option defaultChecked value="MAX">
                  Select price sort
                </option>
                {SORT.map((c) => {
                  return (
                    <option key={c.value} value={c.value}>
                      {c.label}
                    </option>
                  );
                })}
              </Form.Select>
            </Col>
            <Col md>
              <Form.Label className="mt-2">Show Mine Ads Only</Form.Label>
              <Form.Check
                className="ms-5 me-5"
                type="checkbox"
                id="showMineOnly"
                label="Show"
                onChange={formik.handleChange}
                checked={formik.values.showMineOnly}
                value={formik.values.showMineOnly}
              />
            </Col>
            <Col md>
              <div className="d-flex justify-content-center mt-4 mb-2">
                <Button type="submit" variant="secondary">
                  Submit
                </Button>
                <Button
                  type="button"
                  className="ms-2"
                  onClick={() => {
                    cancelSearch();
                  }}
                  variant="outline-secondary"
                >
                  Cancel Search
                </Button>
              </div>
            </Col>
          </Row>
        </Form>
      </div>

      <div className="container-fluid mx-4 my-4">
        <div className="row mt-2">
          {ads.map((ad) => {
            return (
              <AdCard
                ad={ad}
                key={ad.id}
                onDelete={() => {
                  onDelete();
                }}
              />
            );
          })}
        </div>
      </div>

      <div className="d-flex justify-content-center mt-4">
        <Pagination>
          {items.map((item) => {
            return (
              <Pagination.Item
                key={item}
                active={item === pageNumber}
                onClick={() => {
                  nextPage(item);
                }}
              >
                {item}
              </Pagination.Item>
            );
          })}
        </Pagination>
      </div>
    </div>
  );
};

export default HomePage;
