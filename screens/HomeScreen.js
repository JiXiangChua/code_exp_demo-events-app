import * as React from "react";
import { Text, View, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { createStackNavigator } from "@react-navigation/stack";
import { List, Card, Paragraph, Title } from "react-native-paper";

const dataArray = [
  {
    title: "What is this?",
    content: "Exactly what the title says. A basket throwing competition!",
  },
  {
    title: "Who is this by?",
    content:
      "The International Society of Basket Throwers (ISBT). We love throwing baskets.",
  },
  {
    title: "Why is this?",
    content: "Because baskets! Wheee!",
  },
];

function HomeScreen() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text style={styles.title}>International Potato Day</Text>

        <Card style={styles.card}>
          <Card.Content>
            <Title>Welcome</Title>
            <Paragraph>Thank you for downloadiing this app.</Paragraph>
          </Card.Content>
          <Card.Cover
            style={{ marginTop: 10, height: 200 }}
            source={{
              uri: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Patates.jpg",
            }}
          />
        </Card>

        <List.Section title="Frequently Asked Questions">
          <List.Accordion title={dataArray[0].title}>
            <List.Item title={dataArray[0].content} />
          </List.Accordion>
          <List.Accordion title={dataArray[1].title}>
            <List.Item title={dataArray[1].content} />
          </List.Accordion>
          <List.Accordion title={dataArray[2].title}>
            <List.Item title={dataArray[2].content} />
          </List.Accordion>
        </List.Section>
      </ScrollView>
    </SafeAreaView>
  );
}

const Stack = createStackNavigator();

export default function HomeStack() {
  //for the fixed navigation bar at the top of the App.
  return (
    <Stack.Navigator>
      <Stack.Screen name="Welcome" component={HomeScreen} />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  },
  card: {
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
});
