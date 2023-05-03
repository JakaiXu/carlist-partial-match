import { createSlice, nanoid } from "@reduxjs/toolkit";

const carsSlice = createSlice({
  name: "cars",
  initialState: {
    searchTerm: "",
    data: [],
  },
  reducers: {
    changeSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    addCar(state, action) {
      //Assumption
      // action.payload ==={name:'something',cost:'something'}
      state.data.push({
        name: action.payload.name,
        cost: action.payload.cost,
        id: nanoid(),
      });
    },
    removeCar(state, action) {
      //Assumption:
      //action.payload === the id of the car we want to move
      const updatedCars = state.data.filter((car) => {
        return car.id !== action.payload;
      });
      state.data = updatedCars;
    },
  },
});
export const { changeSearchTerm, addCar, removeCar } = carsSlice.actions;
export const carsReducer = carsSlice.reducer;