import { Box } from "@material-ui/core";
import FormHeader from "./FormHeader.jsx/FormHeader";
import FormInput from "./FormHeader.jsx/FormInput";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  addBuild,
  addCity,
  addCountry,
  addDistrict,
  addGovernorate,
  addLandmark,
  addName,
  addPhone,
  addStreet,
} from "../../../Store/PaymentSlice";

const FormFields = () => {
  const dispatch = useDispatch();

  const [country, setCountry] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [street, setStreet] = useState("");
  const [build, setBuild] = useState("");
  const [city, setCity] = useState("");
  const [district, setDistrict] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [landmark, setLandmark] = useState("");

  const changesHandler = (newValue) => {
    setCountry(newValue);
    setName(newValue);
    setPhone(newValue);
    setStreet(newValue);
    setBuild(newValue);
    setCity(newValue);
    setDistrict(newValue);
    setGovernorate(newValue);
    setLandmark(newValue);
  };

  const submitHandler = (e) => {
    e.preventDefault(); // prevent the default form submission behavior

    // dispatch an action with the form data
    dispatch(addCountry(country));
    dispatch(addName(name));
    dispatch(addPhone(phone));
    dispatch(addStreet(street));
    dispatch(addBuild(build));
    dispatch(addCity(city));
    dispatch(addDistrict(district));
    dispatch(addGovernorate(governorate));
    dispatch(addLandmark(landmark));

    // reset the input field
    setCountry("");
    setName("");
    setPhone("");
    setStreet("");
    setBuild("");
    setCity("");
    setDistrict("");
    setGovernorate("");
    setLandmark("");
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
    </Box>
  );
};

export default FormFields;
