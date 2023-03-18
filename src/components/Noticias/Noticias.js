import React from "react";
import { useParams } from "react-router-dom";
import { Box, Text, Button, Image, Flex, Link, Input } from "@chakra-ui/react";

const API_URL =
  "https://raw.githubusercontent.com/The-Valley-School/react-w5-newspaper/main/api/";

const Noticias = () => {
  //Parametros recibidos
  const { topic } = useParams();

  //Estados
  const [articles, setArticles] = React.useState([]);
  const [filteredArticles, setFilteredArticles] = React.useState([]);
  const [page, setPage] = React.useState(1);

  React.useEffect(() => {
    const fullAPI_URL = API_URL + topic + "/" + page + ".json";

    fetch(fullAPI_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.articles));
  }, [topic, page]);

  //Referencias
  const inputRef = React.useRef("");

  //Funciones
  const filterNews = (e) => {
    e.preventDefault();
    const textToFind = inputRef.current.value.toLowerCase();
    const filterResult = articles.filter((article) => {
                                    return article.title.toLowerCase().includes(textToFind)
                                });
    setFilteredArticles(filterResult);
  }

  return (
    <Box>
        <Box m={10}>
            <Input 
                ref={inputRef}
                onChange={(event) => filterNews(event)}
                placeholder='Filtrar noticias por titulo...' >
            </Input>  
        </Box>
        
        
    {inputRef.current.value ? (
        filteredArticles.map((article) => {
          return (
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m="10"
              p="10"
              key={article._id}
            >
              <Image margin="10px 0px" src={article.media} />
              <Text margin="10px 0px" as="b" fontSize="2xl">
                {article.title}
              </Text>
              <Text margin="10px 0px">{article.summary}</Text>
              <Text margin="10px 0px">{article.published_date}</Text>
              <Link href={article.link} isExternal>
                <Button>Leer articulo completo</Button>
              </Link>
            </Box>
          );
        })
      ) : (
        articles.map((article) => {
          return (
            <Box
              borderWidth="1px"
              borderRadius="lg"
              overflow="hidden"
              m="10"
              p="10"
              key={article._id}
            >
              <Image margin="10px 0px" src={article.media} />
              <Text margin="10px 0px" as="b" fontSize="2xl">
                {article.title}
              </Text>
              <Text margin="10px 0px">{article.summary}</Text>
              <Text margin="10px 0px">{article.published_date}</Text>
              <Link href={article.link} isExternal>
                <Button>Leer articulo completo</Button>
              </Link>
            </Box>
          );
        })
      )}

      
      <Flex justifyContent="space-between">
        <Box margin="10" min-width='500px'>{page > 1 ? <Button onClick={() => setPage(page - 1)}>Anterior</Button> : null}</Box>
        <Text margin="10">Pagina {page} de 5</Text>
        <Box margin="10" min-width='500px'>{page < 5 ? <Button onClick={() => setPage(page + 1)}>Siguiente</Button> : null}</Box>
      </Flex>
    </Box>
  );
};

export default Noticias;
