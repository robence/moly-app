import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { max } from '../../constants/Layout';
import { View } from '../Themed';
import BookPreviewListItem from './BookPreviewListItem';
import BookPreviewSize from './configuration';

type BookPreviewListItemProps = { items: any[] };

export default function BookPreviewList(props: BookPreviewListItemProps) {
  const { items } = props;

  return (
    <View style={styles.layout}>
      <ScrollView horizontal>
        {items.map((item) => (
          <BookPreviewListItem key={item} item={item} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: max(BookPreviewSize.height),
  },
});
