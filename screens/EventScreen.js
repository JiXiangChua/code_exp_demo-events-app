import * as React from "react";
import { Text, View, Button } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

function EventsScreen({ navigation }) {
  // grabbing the property that they want instead of writing props.navigation. This is destructuring, grabbing that stuff and assign it to 'navigation'
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightblue",
      }}
    >
      <Text>Events!</Text>
      <Button
        title="You've won $1M!!! CLICK HERE!!!"
        onPress={() => navigation.navigate("Dont Get Scammed")} // the navigation name has to match the stack scren name
      />
    </View>
  );
}

function EventsSecondScreen() {
  return <Text>Don't get scammed</Text>;
}

const Stack = createStackNavigator();

export default function EventsStack() {
  //for the fixed navigation bar at the top of the App.
  return (
    <Stack.Navigator>
      <Stack.Screen name="Events" component={EventsScreen} />
      <Stack.Screen name="Dont Get Scammed" component={EventsSecondScreen} />
    </Stack.Navigator>
  );
}
//rmb to add the component to the stack so that it can display on the app as a seperate screen.
//the order of the stack maaters, the first thing written is the default screen shown on the app when navigated.
