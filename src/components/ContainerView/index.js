import React from 'react';
import {
  View, StatusBar, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';

import colors from '../../utils/colors';
import { Title } from '../Titles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export const ContainerView = ({
  color, children, error, animated,
}) => (
  <View style={[
    styles.container,
    { backgroundColor: color }]}
  >
    {
      animated
        ? <StatusBar translucent backgroundColor="transparent" barStyle="dark-content" />
        : <StatusBar translucent backgroundColor={colors.primary} barStyle="dark-content" />

    }
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
  animated: PropTypes.bool,
};

ContainerView.defaultProps = {
  color: colors.primary,
  animated: false,
  error: '',
};

export default ContainerView;
