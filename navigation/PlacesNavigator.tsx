import { Platform } from "react-native";
import PlacesListScreen from "../screens/PlacesListScreen";
import PlaceDetailScreen from "../screens/PlaceDetailScreen";
import NewPlaceScreen from "../screens/NewPlaceScreen";
import MapScreen from "../screens/MapScreen";
import { createStackNavigator } from "react-navigation-stack";
import Colors from "../constants/Colors";
import { createAppContainer } from "react-navigation";

export interface NavigationShape {
  getParam: (param: string) => any;
  goBack: () => void;
  navigate: (path: string, params?: { [Key: string]: any }) => void;
  setParams: (params: { [Key: string]: any }) => void;
  toggleDrawer: () => void;
}

const PlacesNavigator = createStackNavigator(
  {
    Places: PlacesListScreen,
    PlaceDetail: PlaceDetailScreen,
    NewPlace: NewPlaceScreen,
    Map: MapScreen,
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Platform.OS === "ios" ? "" : Colors.primary,
      },
      headerTintColor: Platform.OS === "ios" ? Colors.primary : "",
    },
  }
);

export default createAppContainer(PlacesNavigator);
