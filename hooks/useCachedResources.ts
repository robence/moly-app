import { Ionicons } from '@expo/vector-icons';
import * as React from 'react';
import * as Font from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts, Lato_400Regular } from '@expo-google-fonts/lato';
import {
  Merriweather_700Bold,
  Merriweather_400Regular,
} from '@expo-google-fonts/merriweather';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false);

  let [fontsLoaded] = useFonts({
    Lato_400Regular,
    Merriweather_700Bold,
    Merriweather_400Regular,
  });

  // Load any resources or data that we need prior to rendering the app
  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHideAsync();

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'space-mono': require('../assets/fonts/SpaceMono-Regular.ttf'),
        });
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e);
      } finally {
        setLoadingComplete(true);
        SplashScreen.hideAsync();
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete && fontsLoaded;
}
