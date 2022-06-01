import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {List} from "./src/component/List/List"
import { NativeBaseProvider } from 'native-base';

import { Provider } from './src/component/Context/context';
import { AppRouter } from './router';


export default function App() {

  return (
    <NativeBaseProvider>
      <Provider>
   

    <AppRouter/>
      <StatusBar style="auto" />


    </Provider>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
