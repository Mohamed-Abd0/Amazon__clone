import { Divider, Grid, Typography, Container, Stack } from "@mui/material";
import SavedItem from "./SavedItem";
import { useSelector } from "react-redux";
import words from "../../leng.json";

const SavedItems = () => {


  // Access language data from Redux store
  const lengActive = useSelector(({ leng }) => leng);
  const activWords = words[`${lengActive.lang}`];

  //translated words
  const yourItems = activWords.yourItems;
  const savedForLater = activWords.savedForLater;
  const items = activWords.items;

  // get saved items data
  const savedProducts = useSelector(({ CartSlice }) => CartSlice.savedItems);

  return (
    <Container sx={{ my: "24px" }}>
      <Stack>
        <Typography variant="h4">{yourItems}</Typography>
        <Typography variant="subtitle1" mx={2}>
          {savedForLater} ({savedProducts.length} {items})
        </Typography>
        <Divider />
      </Stack>

      <Grid container my={3} px={2} gap={2} spacing={2}>
        {savedProducts.map((item) => (
          <SavedItem key={item.id} item={item} />
        ))}
      </Grid>
    </Container>
  );
};

export default SavedItems;
