import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./components/HomeScreen";
import Page1Screen from "./components/Page1Screen";
import Page2Screen from "./components/Page2Screen";
import Page3Screen from "./components/Page3Screen";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Page1: {
      screen: Page1Screen,
    },
    Page2: {
      screen: Page2Screen,
    },
    Page3: {
      screen: Page3Screen,
    },
  },
  {
    initialRouteName: "Home",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default AppContainer;