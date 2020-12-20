import React from 'react';
import { StyleSheet } from 'react-native';
import { max } from '../../constants/Layout';
import { useThemeColor, View } from '../Themed';
import BookPreviewImage from './BookPreviewImage';
import BookPreviewSize from './configuration';

export default function BookPreviewListItem({ source }: any) {
  const borderColor = useThemeColor({}, 'text');
  return (
    <View style={[{ borderColor }, styles.layout]}>
      <BookPreviewImage source={source} />
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: max(BookPreviewSize.width),
    marginHorizontal: 5,
  },
  img: {
    width: max(BookPreviewSize.width),
    height: max(BookPreviewSize.height),
  },
});
