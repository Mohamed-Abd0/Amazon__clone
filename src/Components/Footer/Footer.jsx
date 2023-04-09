import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import TopNav from "../../Components/Layout/nav/TopNav";
// Active Language selector
import Flag from '../../assets/USA_flag.webp'
import words from "../../leng.json";
import { useDispatch, useSelector } from "react-redux";
const useStyles = makeStyles((theme) => ({
  listItem: {
    lineHeight: "120%",
    fontSize: "13px",
    lineHeight: "120%",
    color: "#DDD",
    // textAlign: "center",
  },
  listItem1: {
    // lineHeight: "120%",
    fontSize: "10px",
    lineHeight: "120%",
    color: "#DDD",
    paddingTop: "0 !important",
  },

  listTitle: {
    fontWeight: "700 !important",
    fontSize: "16px",
    // margin: "6px 0 14px 0",
    whiteSpace: "nowrap",
    paddingLeft: "16px",
    color: "#FFF",
  },
  listTitle1: {
    fontWeight: "700 !important",
    fontSize: "10px !important",
    whiteSpace: "nowrap",
    paddingLeft: "16px",
    color: "#FFF",
  },
  logo: {
    height: "40px",
    width: "60px",
  },
}));

export default function Footer() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const lengActive = useSelector((state) => state.leng);
  const activeLeng = lengActive.lang;
  const langWordsActive = words[`${lengActive.lang}`];
  return (
    <>
      <Box sx={{ backgroundColor: "#222F3E" }}>
        <Box
          sx={{
            // backgroundColor: "white",
            padding: "50px 200px 50px 200px",
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                Get to Know Us
              </Typography>
              <List>
                <ListItem className={classes.listItem}>About Amazon</ListItem>
                <ListItem className={classes.listItem}>Careers</ListItem>
                <ListItem className={classes.listItem}>Amazon Science</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                {" "}
                Shop with Us{" "}
              </Typography>
              <List>
                <ListItem className={classes.listItem}>Your Account</ListItem>
                <ListItem className={classes.listItem}>Your Orders</ListItem>
                <ListItem className={classes.listItem}>Your Addresses</ListItem>
                <ListItem className={classes.listItem}>Your Lists</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                {" "}
                Make Money with Us{" "}
              </Typography>
              <List>
                <ListItem className={classes.listItem}>
                  {" "}
                  Protect and build your brand
                </ListItem>
                <ListItem className={classes.listItem}>
                  Advertise Your Products{" "}
                </ListItem>
                <ListItem className={classes.listItem}>Sell on Amazon</ListItem>
                <ListItem className={classes.listItem}>
                  Fulfillment by Amazon
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                Let Us Help You
              </Typography>
              <List>
                <ListItem className={classes.listItem}>Help</ListItem>
                <ListItem className={classes.listItem}>
                  Shipping & Delivery
                </ListItem>
                <ListItem className={classes.listItem}>
                  Returns & Replacements
                </ListItem>
                <ListItem className={classes.listItem}>
                  Amazon App Download{" "}
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Box>
        <Grid item xs={12} sm={12} md={12}>
          <Divider
            sx={{ bgcolor: (theme) => theme.palette.divider }}
            style={{
              border: "none",
              height: 0.1,
              margin: 0,
              backgroundColor: "#F1F1F1",
            }}
          ></Divider>
        </Grid>

        <Grid container spacing={2} style={{ justifyContent: "center", alignItems: "center", }}>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2} style={{ padding: '20px'}}>
        <div className={classes.logo}>
          <Link to="/">
            <img src={logo} alt="Amazon logo" />
          </Link>
          </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2} style={{ padding: '20px'}}>
          <Link to={"#"} className="leng-top flex cursor-pointer">
            <img
              alt="fleg"
              src={Flag}
              className="w-7"
            />
            <span className="mx-2">{activeLeng}</span>
            <span className="fa-solid fa-caret-down text-[#ccc]"></span>
          </Link>
       
        </Grid>
        </Grid>
      </Box>
      {/* <TopNav/> */}

      {/* </Box> */}

      <Box
        sx={{ backgroundColor: "#131A22", padding: "50px 150px 50px 150px" }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}>
              {" "}
              Amazon Advertising{" "}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                Find, attract, and engage customers{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}>
              {" "}
              Sell on Amazon.ae{" "}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                Sell globally, start with UAE{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}>
              {" "}
              Sell on Amazon.sa{" "}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                Sell globally, start with Saudi Arabia{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}>
              {" "}
              Amazon Web Services{" "}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                Scalable Cloud Computing Services
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}> Goodreads </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                Book reviews & recommendations
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}> Audible </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                Download Audio Books{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>IMDb </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                Movies, TV & Celebrities{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>IMDb </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                Movies, TV & Celebrities{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>
                Book Depository{" "}
              </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                Books With Free Delivery Worldwide{" "}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>Shopbop </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                Designer Fashion Brands{" "}
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid container spacing={2} columnSpacing={2}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item>
            <Typography className={classes.listTitle1}>
              {" Conditions of Use & Sale Privacy Notice Interest-Based Ads"}
            </Typography>
            <Typography className={classes.listTitle1}>
              {"&copy; 1996–2023, Amazon.com, Inc. or its affiliates "}
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
