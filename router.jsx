import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Details } from "./src/component/Details/Details";
import { List } from "./src/component/List/List";

const Navigator = createNativeStackNavigator();

export const AppRouter = () => (
  <NavigationContainer>
    <Navigator.Navigator>
      <Navigator.Screen
     
        name="list"
        component={List}
      />
     
     <Navigator.Screen
     
     name="Details"
     component={Details}
   />
  
    </Navigator.Navigator>
  </NavigationContainer>
);