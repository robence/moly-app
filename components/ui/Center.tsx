import React from 'react';
import { StyleSheet } from 'react-native';
import { View, ViewProps } from '../Themed';

export default function Center({ children }: ViewProps) {
  return <View style={styles.center}>{children}</View>;
}

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});
