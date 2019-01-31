import React from 'react';
import PropTypes from 'prop-types';
import { Text, StyleSheet } from 'react-native';
import colors from '../../utils/colors';

const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 13,
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
