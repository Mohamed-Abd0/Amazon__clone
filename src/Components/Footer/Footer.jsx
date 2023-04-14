import React, { useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import { Divider, List, ListItem, Typography } from "@mui/material";
import { Box, width } from "@mui/system";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import TopNav from "../../Components/Layout/nav/TopNav";
// Active Language selector
import Flag from '../../assets/Flag_of_Egypt.png'
import words from "../../leng.json";
import { useDispatch, useSelector } from "react-redux";
import languageChange from "./LangChoose";
import LangChoose from "./LangChoose";
import { getactiveLeng } from "../../Store/nav_slice/lengRedusers";
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
    paddingRight: '0 !important'
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
    // height: "40px",
    width: "80px",
  },
}));

const handleImageLoad = () => {
  window.location.reload();
  window.scrollTo(0, 0);
}
const homePage = () => {
  Navigate("/");
}


export default function Footer() {
  const classes = useStyles();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const lengActive = useSelector((state) => state.leng);
  console.log(lengActive)
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
              {langWordsActive.knowUs}
              </Typography>
              
              <List>
              <a href="https://www.amazon.eg/b?node=22624915031">
                <ListItem className={classes.listItem}>{langWordsActive.aboutAmazon}</ListItem>
              </a>
                <ListItem className={classes.listItem}>{langWordsActive.careers}</ListItem>
                <ListItem className={classes.listItem}>{langWordsActive.amazonScience}</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                {langWordsActive.shopWithUs}
              </Typography>
              <List>
                <ListItem className={classes.listItem}>{langWordsActive.yourAccount}</ListItem>
                <ListItem className={classes.listItem}>{langWordsActive.yourOrders}</ListItem>
                <ListItem className={classes.listItem}>{langWordsActive.yourAddresses}</ListItem>
                <ListItem className={classes.listItem}>{langWordsActive.yourLists}</ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                {langWordsActive.makeMoneyWithUs}
              </Typography>
              <List>
                <ListItem className={classes.listItem}>
                  {langWordsActive.protectYourBrand}
                </ListItem>
                <ListItem className={classes.listItem}>
                  {langWordsActive.advirtiseProducts}
                </ListItem>
                <ListItem className={classes.listItem}>{langWordsActive.sellOnAmazon}</ListItem>
                <ListItem className={classes.listItem}>
                  {langWordsActive.fulfillmentByAmazon}
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography className={classes.listTitle}>
                {langWordsActive.helpYou}
              </Typography>
              <List>
                <ListItem className={classes.listItem}>{langWordsActive.help}</ListItem>
                <ListItem className={classes.listItem}>
                  {langWordsActive.shippingAndDelivery}
                </ListItem>
                <ListItem className={classes.listItem}>
                  {langWordsActive.returnsReplacements}
                </ListItem>
                <ListItem className={classes.listItem}>
                  {langWordsActive.amazonAppDownload}
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
              backgroundColor: "#F1F1F1",
            }}
          ></Divider>
        </Grid>

        <Grid
          container
          spacing={2}
          style={{
            justifyContent: "center",
            alignItems: "center",
            padding: "30px",
          }}
        >
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            
            <div className={classes.logo}>
              <Link to="/">
                {location.pathname === "/" ? (
                  <img
                    src={logo}
                    alt="Amazon logo"
                    onClick={homePage}
                    onClick={handleImageLoad}
                  />
                ) : (
                  <img src={logo} alt="Amazon logo" onClick={homePage} />
                )}
              </Link>
            </div>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}
            style={{ padding: "20px" }}
          >
          {/* <LangChoose/> */}
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
            <a href="https://advertising.amazon.com/?ref=footer_advtsing_2_eg">
            <Typography className={classes.listTitle1}>
              {langWordsActive.amazonAdvertising}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {" "}
                {langWordsActive.findAttract} and <br/> 
                engage customers{" "}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <a href="https://sell.amazon.ae/?ld=AZEGSOA_footer_affiliateAE_AR&ref_=AZEGSOA_footer_affiliateAE_AR">
            <Typography className={classes.listTitle1}>
              {langWordsActive.sellOnAmazonAE}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {langWordsActive.sellGlobally}, {langWordsActive.startWith} {langWordsActive.UAE}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <a href="https://sell.amazon.sa/?ld=AZEGSOA_footer_affiliateSA_AR&ref_=AZEGSOA_footer_affiliateSA_AR">
            <Typography className={classes.listTitle1}>
                {langWordsActive.sellOnAmazonSA}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {langWordsActive.sellGloballySA}, {langWordsActive.startWithSA} <br/> {langWordsActive.saudiArabia}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <a href="https://aws.amazon.com/what-is-cloud-computing/?sc_channel=EL&sc_campaign=AE_amazonfooter">
            <Typography className={classes.listTitle1}>
              {langWordsActive.amazonWebServices}
            </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {langWordsActive.cloudComputing}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <Typography className={classes.listTitle1}> Goodreads </Typography>
            <List>
              <ListItem className={classes.listItem1}>
                {langWordsActive.bookReviews} {langWordsActive.and} <br/> {langWordsActive.recommendations}
              </ListItem>
            </List>
          </Grid>
        </Grid>

        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
              <a href="https://www.audible.ca/?ref=Adbl_ip_rdr_from_US&source_code=CANGBHP09121700NN&ipRedirectFrom=US&ipRedirectOriginalURL=">
              <List>
              <Typography className={classes.listTitle1}> Audible </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                {langWordsActive.download} <br /> {langWordsActive.audioBooks}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <a href="https://www.imdb.com/">
            <List>
              <Typography className={classes.listTitle1}>IMDb </Typography>
              <ListItem className={classes.listItem1}>
                {langWordsActive.moviesTV} <br /> {langWordsActive.celebrities}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>Alexa </Typography>
              <ListItem className={classes.listItem1}>
              {langWordsActive.actionableAnalytics} <br/> {langWordsActive.forWeb}
              </ListItem>
            </List>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
          <a href="https://www.bookdepository.com/">
            <List>
              <Typography className={classes.listTitle1}>
                Book Depository{" "}
              </Typography>
              <ListItem className={classes.listItem1}>
                {langWordsActive.booksFreeDelivery} <br /> {langWordsActive.Worldwide}
              </ListItem>
            </List>
            </a>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} xl={2}>
            <List>
              <Typography className={classes.listTitle1}>Shopbop </Typography>
              <ListItem className={classes.listItem1}>
                {" "}
                {langWordsActive.designer} <br /> {langWordsActive.fashionBrands}
              </ListItem>
            </List>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={2}
          columnSpacing={2}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Grid item>
            <Typography className={classes.listTitle1}>
              {langWordsActive.conditionsUseSale}  &nbsp; {langWordsActive.privacyNotice} &nbsp;  {langWordsActive.InterestAds}
            </Typography>
            <Typography className={classes.listTitle1} sx={{align: 'center'}}>
              {langWordsActive.copyRight} {langWordsActive.year1996}, {langWordsActive.amazonInc}  {langWordsActive.or} {langWordsActive.itsAffiliates} 
            </Typography>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
