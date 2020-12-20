import React from 'react';
import { StyleSheet } from 'react-native';
import { max } from '../../constants/Layout';
import { useThemeColor, View } from '../Themed';
import BookPreviewSize from './configuration';

type BookPreviewListItemProps = { item: any };
export default function BookPreviewListItem(props: BookPreviewListItemProps) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { item } = props;

  const borderColor = useThemeColor({}, 'text');
  return <View style={[{ borderColor }, styles.layout]} />;
}

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    width: max(BookPreviewSize.width),
    borderRadius: 5,
    borderWidth: 1,
    marginHorizontal: 5,
  },
});
