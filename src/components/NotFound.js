import { Text, Box } from "@chakra-ui/react";

const NotFound = () => {

    return (
      <Box width={700} justify={'center'} wrap={'wrap'} margin={'0 auto'} >
        <Text
        bgGradient='linear(to-tr, teal.300, yellow.400)'
        bgClip='text'
        fontSize='100px'
        fontWeight='extrabold'
        >404</Text>
        <Text as='kbd' fontSize='3xl'>Página no encontrada</Text>
        <p>No existe la ruta actual, por favor utiliza los enlaces del menú para navegar.</p>
      </Box>
    );
  }
  
  export default NotFound;
  