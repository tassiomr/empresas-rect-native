import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../utils/colors';
import { Title } from '../Titles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ContainerView = ({ color, children, error }) => (
  <View style={[
    styles.container,
    { backgroundColor: color }]}
  >
    <StatusBar backgroundColor={colors.primary} barStyle="dark-content" />
    { children }
    {
            error
              ? (
                <View style={{
                  height: 50, backgroundColor: 'yellow', justifyContent: 'center', alignItems: 'center',
                }}
                >
                  <Title>{error}</Title>

                </View>
              )
              : null
        }
  </View>
);

ContainerView.propTypes = {
  color: PropTypes.string,
  children: PropTypes.node.isRequired,
  error: PropTypes.string,
};

ContainerView.defaultProps = {
  color: colors.primary,
  error: '',
};

export default ContainerView;
