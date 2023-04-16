import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ViewImageScreen() {
  return <Image source={require("../assets/chair.jpg")} />;
}

const styles = StyleSheet.create({});
