import React from 'react';
import { View, Text } from '../Themed';
import { StyleSheet } from 'react-native';
import { max } from '../../constants/Layout';
import { Heading } from '../ui';
export default function Quote() {
  return (
    <View>
      <Heading variant="h1">
        Azt akarom, hogy bízzál magadban. Higgyél magadban, és ezt lássa rajtad
        mindenki.
      </Heading>
      <Text style={styles.author}>Virginia C. Andrews: Rain"</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  author: {
    fontSize: max(24),
  },
});
