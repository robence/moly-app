import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BookPreviewList } from '../components/BookPreview';
import { Quote } from '../components/home';

import { View } from '../components/Themed';
import { Heading, Separator, Center } from '../components/ui';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <View style={styles.padding}>
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
          <BookPreviewList items={getNewReleases()} />

          <Center>
            <Separator />
          </Center>

          <Heading variant="h2">Hamarosan érkeznek</Heading>
          <BookPreviewList items={getUpcomingReleases()} />
        </View>
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
  },
  padding: {
    padding: 10,
  },
});

function getNewReleases() {
  return [1, 2, 3, 4, 5];
}

function getUpcomingReleases() {
  return [1, 2, 3, 4, 5];
}
