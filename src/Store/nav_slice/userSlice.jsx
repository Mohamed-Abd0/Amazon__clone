import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  initialState: { status: true, rouls: "admin", token: "" },
  name: "userSlice",
  reducers: {},
});

export default userSlice.reducer;
