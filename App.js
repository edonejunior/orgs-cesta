import React from 'react';
import { StatusBar, SafeAreaView, View } from 'react-native';
import Cesta from './src/views/Cesta';
import { useFonts, Montserrat_400Regular , Montserrat_700Bold } from '@expo-google-fonts/montserrat';
import mock from './src/mocks/cesta';



export default function App() {

  const [fonteCarregada] = useFonts({
    "RobotoRegular": Montserrat_400Regular,
    "RobotoBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return <View></View>
  }

  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta {...mock} />
    </SafeAreaView>
  );
}

