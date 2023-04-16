import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import words from "../../../leng.json";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(1),
  },
  title: {
    fontSize: "16px !important",
    fontWeight: "700 !important",
    lineHeight: "24px",
  },
  list: {
    listStyle: "disc",
    paddingLeft: "16px !important", // Set the left padding of the list
    paddingRight: "16px !important", // Set the right padding of the list
  },
  listItem: {
    fontSize: "16px !important",
    fontWeight: "400",
  },
}));

const ProductAbout = () => {
  const classes = useStyles();
  const { product } = useSelector(({ ProductSlice }) => ProductSlice);
  const productPropertes = product.ProductProperties;

  const lengActive = useSelector(({ leng }) => leng);
  const activWrods = words[`${lengActive.lang}`];

  const about = activWrods.about;

  const renderingList = () => (
    <ul className={classes.list}>
      {productPropertes.map((li, index) => (
        <li key={index}>
          <Typography
            variant="body2"
            color="black"
            className={classes.listItem}
          >
            {li[`${lengActive.lang}`]}
          </Typography>
        </li>
      ))}
    </ul>
  );

  return (
    <Box className={classes.root}>
      <Typography variant="body2" className={classes.title}>
        {about}
      </Typography>
      <Box>{renderingList()}</Box>
    </Box>
  );
};

export default ProductAbout;
