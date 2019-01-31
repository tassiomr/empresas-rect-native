import React from 'react';
import { TouchableOpacity } from 'react-native';
import { Wrapper, Image } from '..';


const Button = ({ children, onPress }) => (
  <TouchableOpacity onPress={onPress}>
    {children}
  </TouchableOpacity>
);


export const IconBar = ({ facebook, twitter, linkedin }) => (
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

export default IconBar;
