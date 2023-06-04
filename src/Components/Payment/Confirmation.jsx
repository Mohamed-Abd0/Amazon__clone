import React from "react";
import { useSelector } from "react-redux";
import ProductData from "../Cart/cartItemComponents/ProductData";
import { Divider, Stack , Box } from "@mui/material";

const Confirmation = () => {
    const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
    const selectedItems = cartItems.filter((item) => item.selected === true);

  return (
    <div className="m-4 ">


      {/* item */}
      <Stack>
        {selectedItems.map((item, idx) => (
          <Box key={idx} >
            <ProductData  item={item} />
            {idx !== cartItems.length - 1 && (
              <Divider sx={{ margin: "20px 0 10px 0 " }} />
            )}
          </Box>
        ))}
      </Stack>

    </div>
  );
};

export default Confirmation;


// const Confirmation = () => {

    // const cartItems = useSelector(({ CartSlice }) => CartSlice.cartItems);
    // const selectedItems = cartItems.filter((item) => item.selected === true);

//     console.log(selectedItems)
//     return (
      
//         <>
//           <Typography variant="h5">
//             Thank you for your pruchase, firstName lastName
//           </Typography>
//         </>
//     );
//   };



//   export default Confirmation;