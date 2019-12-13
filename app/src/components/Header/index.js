import React from 'react';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, BasketContainer } from './styles';

function Header() {
  return (
    <Container>
      <Logo />
      <BasketContainer>
        <Icon name="shopping-basket" color="#FFF" size={24} />
      </BasketContainer>
    </Container>
  );
}

export default Header;
