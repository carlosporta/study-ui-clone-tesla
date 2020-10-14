import { useTransform } from 'framer-motion';
import React from 'react';
import useWrapperScroll from '../Model/useWrapperScroll';

import { Container, Header, Logo, Burguer, Footer } from './styles';

const UniqueOverlay: React.FC = () => {

  const { scrollYProgress } = useWrapperScroll();

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <Container>
      <Header>
        <Logo />
        <Burguer />
      </Header>

      <Footer style={{ opacity }}>
        <ul>
          <li>
            <a href="https://www.youtube.com/watch?v=Mf4Se4ZGcG8&list=PL85ITvJ7FLohTZv9cC5-PrZ39Q3cugWqp&index=11">UI Clone by Guilherme Rodz</a>
          </li>
          <li>
            <a href="https://rocketseat.com.br/">Rocketseat </a>
          </li>
          <li>
            <a href="https://github.com/carlosporta">Carlos Porta</a>
          </li>
        </ul>
      </Footer>
    </Container>
  );
};

export default UniqueOverlay;
