/* eslint-disable @typescript-eslint/no-unused-vars */
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { BookPreviewList } from '../components/BookPreview';
import BookPreviewImage from '../components/BookPreview/BookPreviewImage';
import BookPreviewListItem from '../components/BookPreview/BookPreviewListItem';
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
          {/* <Heading variant="h2">Ajánló</Heading>
          <Center>
            <Separator />
          </Center>
          <Heading variant="h2">Random értékelés</Heading>
          <Center>
            <Separator />
          </Center> */}
          <Heading variant="h2">Friss megjelenések</Heading>
          <BookPreviewList>
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_638858.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_642333.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_646512.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_640330.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_643468.jpg')}
            />
          </BookPreviewList>
          <Center>
            <Separator />
          </Center>
          <Heading variant="h2">Hamarosan érkeznek</Heading>
          <BookPreviewList>
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_644503.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_644896.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_643020.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_639385.jpg')}
            />
            <BookPreviewListItem
              source={require('../assets/images/covers/covers_644783.jpg')}
            />
          </BookPreviewList>
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

const newReleases = [
  '../assets/images/covers/covers_638858.jpg',
  '../assets/images/covers/covers_642333.jpg',
  '../assets/images/covers/covers_646512.jpg',
  '../assets/images/covers/covers_640330.jpg',
  '../assets/images/covers/covers_643468.jpg',
];

const upcomingReleases = [
  '../../assets/images/covers/covers_638858.jpg',
  '../../assets/images/covers/covers_642333.jpg',
  '../../assets/images/covers/covers_646512.jpg',
  '../../assets/images/covers/covers_640330.jpg',
  '../../assets/images/covers/covers_643468.jpg',
];
