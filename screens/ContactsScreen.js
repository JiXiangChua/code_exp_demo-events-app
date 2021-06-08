import * as React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { List, Card, Paragraph, Title } from "react-native-paper";
import { createStackNavigator } from "@react-navigation/stack";

const contactsData = [
  {
    name: "Charlie McCharles",
    title: "CEO",
    company: "Baskets International LLC",
    pic: "https://randomuser.me/portraits/men/1.jpg",
  },
  {
    name: "Desiree Dee",
    title: "CMO",
    company: "Busket Inc",
    pic: "https://randomuser.me/portraits/women/1.jpg",
  },
  {
    name: "Adam ellis",
    title: "CTO",
    company: "Baskets of Biskits",
    pic: "https://randomuser.me/portraits/men/2.jpg",
  },
];

function ContactsScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.list}>
        {contactsData.map((item) => {
          return (
            <List.Item
              title={item.name}
              description={(item.company, item.title)}
              left={(props) => (
                <Image
                  {...props}
                  style={styles.icon}
                  source={{ uri: item.pic }}
                />
              )}
            />
          );
        })}
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function HomeStack() {
  //for the fixed navigation bar at the top of the App.
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={ContactsScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    marginTop: 20,
  },
  list: {
    marginTop: 20,
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 50,
    width: 50,
    borderRadius: 50,
  },
});
