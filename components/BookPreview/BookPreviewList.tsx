import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { max } from '../../constants/Layout';
import { View, ViewProps } from '../Themed';
import BookPreviewSize from './configuration';

export default function BookPreviewList({ children }: ViewProps) {
  return (
    <View style={styles.layout}>
      <ScrollView horizontal>{children}</ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  layout: {
    height: max(BookPreviewSize.height),
  },
});
