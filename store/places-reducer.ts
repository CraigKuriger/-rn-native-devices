import Place from "../models/place";
import { ADD_PLACE } from "./places-actions";

export interface PlacesStateShape {
  places: Place[];
}

const initialState: PlacesStateShape = {
  places: [],
};

export default (state: PlacesStateShape = initialState, action) => {
  switch (action.type) {
    case ADD_PLACE:
      const newPlace = new Place(new Date().toString(), action.placeData.title);
      return {
        places: state.places.concat(newPlace),
      };
    default:
      return state;
  }
};
