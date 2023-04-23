import { FlatList, StyleSheet, View } from "react-native";
import React, { useState } from "react";
import ListItem from "../components/ListItem";
import Screen from "../components/Screen";
import ListItemSeparator from "../components/ListItemSeparator";
import ListItemDeleteAction from "../components/ListItemDeleteAction";

export default function MessagesScreen() {
  const [refreshing, setRefresing] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      title: "T1",
      description: "Description ipsum",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "T2",
      description: "Description ipsum",
      image: require("../assets/mosh.jpg"),
    },
  ]);
  const handleDelete = (id) => {
    setMessages((prev) => prev.filter((m) => m.id !== id));
  };
  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            title={item.title}
            subTitle={item.description}
            image={item.image}
            onPress={() => console.log(item.description)}
            renderRightActions={() => (
              <ListItemDeleteAction onPress={() => handleDelete(item.id)} />
            )}
          />
        )}
        ItemSeparatorComponent={() => <ListItemSeparator />}
        refreshing={refreshing}
        onRefresh={() => {
          setMessages([
            {
              id: 3,
              title: "T3",
              description: "Description ipsum",
              image: require("../assets/mosh.jpg"),
            },
            {
              id: 4,
              title: "T4",
              description: "Description ipsum",
              image: require("../assets/mosh.jpg"),
            },
          ]);
        }}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});
