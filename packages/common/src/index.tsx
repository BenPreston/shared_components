import React, { useState } from "react";
import { SafeAreaView, ScrollView, Text, View, Button } from "react-native";

export const App = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View>
          <Text>Hello Ben</Text>
          <Text>{count}</Text>
          <Button onPress={() => setCount(count + 1)} title="Click" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
