import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View} from 'react-native';
import AppLoading from 'expo-app-loading';
import Cesta from './src/telas/cesta';
import mock from './src/telas/mocks/cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  const [fonteCarregada]= useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold":  Montserrat_700Bold
  });

  if (!fonteCarregada){
    return <AppLoading />
  }

  return (
    <SafeAreaView style={{ flex:1}}>
      <StatusBar />
    <Cesta {...mock}/>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
