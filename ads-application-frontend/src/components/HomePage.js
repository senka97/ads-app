import React, { useState, useEffect } from "react";
import Header from "./Header";
import { toast } from "react-toastify";
import { adsService } from "../services/ads-service";
import AdCard from "./AdCard";
import { Pagination } from "react-bootstrap";

const HomePage = () => {
  const [ads, setAds] = useState([]);
  const [pageNumber, setPageNumber] = useState(0);
  const [items, setItems] = useState([0, 1, 2, 3, 4, 5]);

  useEffect(() => {
    getAds(pageNumber);
  }, []);

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

  return (
    <div>
      <Header />
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
                  setAds([]);
                  getAds(item);
                  setPageNumber(item);
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
