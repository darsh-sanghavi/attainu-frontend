import React from "react";

import PropTypes from "prop-types";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

import { useStyles } from "./styles.js";

const MuiCard = ({ data }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h3" className={classes.title}>
          {data.name}
        </Typography>
        <div className={classes.footerInfo}>
          <Typography>{data.place}</Typography>
        </div>
        <div className={classes.footerInfo}>
          <Typography variant="inherit" component="h5">
            INR <span className={classes.discountedPrice}>{data.price}</span>
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

MuiCard.propTypes = {
  data: PropTypes.object.isRequired,
};

export default MuiCard;
