import "./NoticiasHome.css";
import { Link } from "react-router-dom";
import React from "react";

import { Text, Box, Button, Flex } from "@chakra-ui/react";

const NoticiasHome = () => {
  return (
    <Flex flexDirection="column" alignItems="center">
      <Text  as="b" fontSize={"4xl"} mb={5}>
        Por favor, elige una de las categorías:
      </Text>
      <Flex align="center">
      <Box w="400px" h="200px" m={3}>
        <Link to="/noticias/sport"><Button colorScheme='blue'>Deportes</Button></Link>
        <Text>Encuentra las ultimas noticias sobre tus desportes favoritos, desde futbol hasta tenis, baloncesto, golf y mucho mas.</Text>
      </Box>
      <Box w="400px" h="200px" m={3}>
      <Link to="/noticias/tech"><Button colorScheme='blue'>Tecnologia</Button></Link>
        <Text>Mantente al dia con las ultimas tendencias tecnologicas, desde dispositivos moviles hasta inteligencia artificial, robotica y mucho mas.</Text>
      </Box>
      <Box w="400px" h="200px" m={3}>
      <Link to="/noticias/economics"><Button colorScheme='blue'>Economia</Button></Link>
        <Text>Descubre las ultimas noticias economicas, desde mercados financieros hasta empresas, negocios, politica fiscal y mucho mas.</Text>
      </Box>
      </Flex>
    </Flex>
  );
};

export default NoticiasHome;
