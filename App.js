import React, { useState } from "react";
import Screen from "./app/components/Screen";
import { Switch, TextInput } from "react-native";
import AppTextInput from "./app/components/AppTextInput";
import AppPicker from "./app/components/AppPicker";

export default function App() {
  const [value, setValue] = useState(false);
  return (
    <Screen>
      <AppPicker />
    </Screen>
  );
}
