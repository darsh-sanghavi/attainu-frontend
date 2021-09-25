import React, { useState } from "react";

import Typography from "@material-ui/core/Typography";

import { MuiPrimarySearchAppBar } from "../../../components/MUI/MuiPrimarySearchAppBar";
import { MuiCard } from "../../../components/MUI/MuiCard";

import { Footer } from "../../../components/UI/Footer";

import useLoader from "../../../hooks/useLoader";
import useNotification from "../../../hooks/useNotification";

import * as restauratnApi from "../../../api/restaurantApi";

import classes from "./HomePage.module.css";

const HomePage = () => {
  const { loader, isLoading, showLoader, hideLoader } = useLoader();
  const { notification, showNotification } = useNotification();

  const [restaurantsList, setRestaurantsList] = useState([]);
  const [sortList, setSortList] = useState(["Ascending", "Descending"]);

  const handleTitleSearch = (title) => {
    showLoader();

    restauratnApi.searchRestaurant(
      title,
      (response) => {
        setRestaurantsList(response.data);
        hideLoader();
      },
      (error, errorMessage) => {
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }

        hideLoader();
      }
    );
  };

  const handleSort = (sort) => {
    showLoader();

    var data = "";
    if (sort === "Ascending") {
      data = "price";
    } else {
      data = "-price";
    }

    restauratnApi.sortRestaurant(
      data,
      (response) => {
        setRestaurantsList(response.data);
        hideLoader();
      },
      (error, errorMessage) => {
        if (errorMessage) {
          showNotification(errorMessage);
        } else {
          showNotification(error.toString());
        }

        hideLoader();
      }
    );
  };

  return (
    <div className={classes.homePage}>
      {/* Header */}
      <MuiPrimarySearchAppBar
        isSearchVisible={true}
        isSortVisible={true}
        isProfileVisible={true}
        handleTitleSearch={handleTitleSearch}
        handleSort={handleSort}
        sortList={sortList}
      />
      {isLoading ? (
        <section className={classes.loaderContainer}>{loader}</section>
      ) : (
        <main className={classes.homePageContent}>
          {restaurantsList.length > 0 ? (
            <section className={classes.cardsContainer}>
              {restaurantsList.map((rest) => (
                <MuiCard key={rest._id} data={rest} />
              ))}
            </section>
          ) : (
            <Typography
              variant="inherit"
              component="h4"
              className={classes.noFoundText}
            >
              No Restaurant Found
            </Typography>
          )}
          {notification}
        </main>
      )}
      <Footer />
    </div>
  );
};

export default HomePage;
