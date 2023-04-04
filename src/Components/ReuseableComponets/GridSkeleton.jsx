import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(6),
  },
  skeleton: {
    borderRadius: '0',
    margin: theme.spacing(2)
  },
}));

const GridSkeleton = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        {[...Array(12)].map((_, index) => (
          <Grid item  xs={12} sm={6} md={4} lg={3} key={index} style={{ background: "#E2E6E6" }}>
            <div style={{ background: "#fff", padding: 20 }}>
            <h4>
              <Skeleton height={36} width={`80%`}  style={{marginBottom:20}} />
            </h4>
            <Skeleton height={250} />
            <p>
              <Skeleton width={`30%`}  style={{marginTop:20}}/>{" "}
            </p>
            </div>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default GridSkeleton;
