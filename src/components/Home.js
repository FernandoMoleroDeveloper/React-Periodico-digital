import { Image , Text , Divider, Flex } from "@chakra-ui/react";
const Home = () => {

  return (
    <div className="page">
      <Text textAlign='center' fontSize='4xl' as='b'>Bienvenido a nuestro Periódico Digital</Text>
      <Image 
      w='400px'
      margin='10px'
      src="https://cdn.pixabay.com/photo/2014/05/21/22/28/old-newspaper-350376_1280.jpg"></Image>
      <Text margin='10px'>Nuestrta mision es proporcionarte noticias objetivas  y precisas de todo el mundo. Fundado en 2023 por Daniel y Fernando, nuestro equipo esta dedicado a brindarte las ultimas noticas de politica, negocios, tecniologia, deportes y mas.</Text>
      <Divider />
      <Text fontSize='3xl' margin='10px'>Conecta con nosotros:</Text>
      <Flex>
      <Image 
      boxSize='50px'
      margin='10px'
      objectFit='cover' 
      src="https://cdn.pixabay.com/photo/2016/11/29/13/17/coffee-1869772_1280.jpg"></Image>
      <Text>@ Periodico Digital</Text>
      </Flex>
      <Flex>
      <Image 
      boxSize='50px'
      margin='10px'
      objectFit='cover' 
      src="https://cdn.pixabay.com/photo/2016/11/29/13/17/coffee-1869772_1280.jpg"></Image>
      <Text>Periodico Digital</Text>
      </Flex>
    </div>
  );
}

export default Home;
