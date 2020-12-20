import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Quote } from '../components/home';

import { View } from '../components/Themed';
import { Heading, Separator, Center } from '../components/ui';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Heading variant="h2">Kezdőoldal</Heading>
        <Center>
          <Separator />
        </Center>

        <Quote />

        <Center>
          <Separator />
        </Center>

        <Heading variant="h2">Ajánló</Heading>

        <Center>
          <Separator />
        </Center>

        <Heading variant="h2">Random értékelés</Heading>

        <Center>
          <Separator />
        </Center>

        <Heading variant="h2">Friss megjelenések</Heading>

        <Center>
          <Separator />
        </Center>

        <Heading variant="h2">Hamarosan érkeznek</Heading>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    flex: 1,
    padding: 10,
  },
});
