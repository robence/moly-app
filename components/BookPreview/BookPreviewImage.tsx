import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { max } from '../../constants/Layout';
import BookPreviewSize from './configuration';

type BookPreviewImageProps = { source: any };
export default function BookPreviewImage(props: BookPreviewImageProps) {
  return <Image style={styles.img} resizeMode="cover" {...props} />;
}

const styles = StyleSheet.create({
  img: {
    width: max(BookPreviewSize.width),
    height: max(BookPreviewSize.height),
  },
});
