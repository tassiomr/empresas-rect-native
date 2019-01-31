import React from 'react';
import { TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { Wrapper, Image } from '..';


const Button = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    {children}
  </TouchableOpacity>
);

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onPress: PropTypes.func,
};

Button.defaultProps = {
  onPress: () => {},
};

export const IconBar = ({
  facebook, twitter, linkedin, onPress,
}) => (
  <Wrapper style={{
    flex: 0.7, flexDirection: 'row', padding: 10, justifyContent: 'space-around',
  }}
  >
    <Button onPress={() => onPress(facebook)}>
      <Image size={32} uri={require('../../assets/facebook.png')} />
    </Button>
    <Button onPress={() => onPress(twitter)}>
      <Image size={32} uri={require('../../assets/twitter.png')} />
    </Button>
    <Button onPress={() => onPress(linkedin)}>
      <Image size={32} uri={require('../../assets/linkedin.png')} />
    </Button>
  </Wrapper>
);

IconBar.propTypes = {
  facebook: PropTypes.string,
  twitter: PropTypes.string,
  linkedin: PropTypes.string,
  onPress: PropTypes.func,
};

IconBar.defaultProps = {
  facebook: 'https://www.facebook.com',
  twitter: 'https://www.twitter.com',
  linkedin: 'https://www.linkedin.com',
  onPress: () => {},
};

export default IconBar;
