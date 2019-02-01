import React from 'react';
import { Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../utils/colors';
import dimensions from '../../utils/dimensions';


const styles = StyleSheet.create({
  title: {
    fontSize: dimensions.size(13),
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: dimensions.size(10),
  },
});


export const Title = ({ children, color }) => (
  <Text style={[styles.title, { color }]}>{children}</Text>
);

Title.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

Title.defaultProps = {
  color: colors.primary,
};

export const SubTitle = ({ children, color }) => (
  <Text style={[styles.subtitle, { color }]}>{children}</Text>
);


SubTitle.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string,
};

SubTitle.defaultProps = {
  color: colors.brown,
};
