import * as React from 'react';
import { StyleSheet } from 'react-native';
import { max } from '../../constants/Layout';

import { Text, TextProps } from '../Themed';

type HeadingKey = 'h1' | 'h2' | 'h3' | 'h4';
type HeadingProps = TextProps & { variant: HeadingKey };

export default function Heading(props: HeadingProps) {
  return (
    <Text
      {...props}
      style={[props.style, styles.text, styles[props.variant]]}
    />
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Merriweather_700Bold',
  },
  h1: {
    fontSize: max(32),
  },
  h2: {
    fontSize: max(24),
  },
  h3: {
    fontSize: max(18),
  },
  h4: {
    fontSize: max(16),
  },
});
