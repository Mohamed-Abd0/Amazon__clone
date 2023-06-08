import { Box } from "@material-ui/core";
import FormHeader from "./FormHeader.jsx/FormHeader";
import FormInput from "./FormHeader.jsx/FormInput";
import { useState } from "react";
import { sendAddressData } from "../../../Firebase-APIS/FirebaseFunctions";
import { useNavigate } from "react-router-dom";
import YellowBtn from "./YellowBtn";

const FormFields = ({ onClose }) => {
  const navigate = useNavigate();

  const [address, setAddress] = useState({
    country: "",
    name: "",
    phone: "",
    street: "",
    build: "",
    city: "",
    district: "",
    governorate: "",
    landmark: "",
  });

  const changesHandler = (e) => {
    setAddress({
      ...address,
      [e.target.name]: e.target.value,
    });
  };

  const SendAddressData = (e) => {
    console.log("SendAddressData");
    const uid = localStorage.getItem("uid");

    sendAddressData(uid, address)
      .then(() => {
        setAddress({
          country: "",
          name: "",
          phone: "",
          street: "",
          build: "",
          city: "",
          district: "",
          governorate: "",
          landmark: "",
        });
      })
      .catch((error) => {
        console.log("Error sending address data:", error);
      });

    navigate("/");
  };

  return (
    <Box style={{ margin: "15px 0" }}>
      <FormHeader for="country">Country/region</FormHeader>
      <FormInput
        type="text"
        id="country"
        name="country"
        backgroundColor="#F0F2F2"
        boxShadow="0 2px 5px rgba(15,17,17,.15)"
        borderColor="#D5D9D9"
        onChange={changesHandler}
      />

      <FormHeader for="name">Full name (First and Last name)</FormHeader>
      <FormInput type="text" id="name" name="name" onChange={changesHandler} />

      <FormHeader for="phone">Mobile number</FormHeader>
      <Box style={{ display: "flex", justifyContent: "space-between" }}>
        <FormInput
          width="27%"
          backgroundColor="#F0F2F2"
          value="+20"
          boxShadow="0 2px 5px rgba(15,17,17,0.15)"
          borderColor="#D5D9D9"
        />
        <FormInput
          type="tel"
          id="phone"
          name="phone"
          placeholder="e.g. 1xxxxxxxxx"
          width="70%"
          onChange={changesHandler}
        />
      </Box>

      <FormHeader for="street">Street name</FormHeader>
      <FormInput
        type="text"
        id="street"
        name="street"
        placeholder="e.g. Talaat Harb Street"
        onChange={changesHandler}
      />

      <FormHeader for="build">Building name/no</FormHeader>
      <FormInput
        type="text"
        id="build"
        name="build"
        placeholder="e.g. Princess Tower"
        onChange={changesHandler}
      />

      <FormHeader for="city">City/Area</FormHeader>
      <FormInput
        type="text"
        id="city"
        name="city"
        placeholder="e.g. El Nozha, New Cairo City & Dokki"
        onChange={changesHandler}
      />

      <FormHeader for="district">District</FormHeader>
      <FormInput
        type="text"
        id="district"
        name="district"
        backgroundColor="#d3d3d3"
        onChange={changesHandler}
      />

      <FormHeader for="name">Governorate</FormHeader>
      <FormInput
        type="text"
        id="Governorate"
        name="Governorate"
        backgroundColor="#d3d3d3"
        boxShadow="0 1px 2px rgba(15,17,17,.15) inset"
      />

      <FormHeader for="name">Nearest landmark</FormHeader>
      <FormInput
        type="text"
        id="landmark"
        name="landmark"
        placeholder="e.g. Cairo festival city"
        onChange={changesHandler}
      />
      <br />
      <YellowBtn OnAction={onClose} SendAddressData={SendAddressData}>
        Add address
      </YellowBtn>
    </Box>
  );
};

export default FormFields;
