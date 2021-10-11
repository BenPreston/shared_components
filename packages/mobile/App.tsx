import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  useColorScheme,
  View,
  Button,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const [count, setCount] = useState(0);

  return (
    <SafeAreaView>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text>Hello Ben</Text>
          <Text>{count}</Text>
          <Button onPress={() => setCount(count + 1)} title="Click" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
