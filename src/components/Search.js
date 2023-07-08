import { Input, Container, IconButton, Flex, Box, Text } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { useState, useEffect } from "react";
import axios from "axios";
import Card from "./Card";


export default function Search(props) {
  const [searchValue, setSearchValue] = useState('');
  const [weather, setWeather] = useState([]);
  const [isData, setData] = useState(false);

  const handleClick = () => {
    const err = axios
      .get(
        `http://api.openweathermap.org/data/2.5/weather?q=${searchValue}&appid=f5cc23918aade3d2c115ea8d0ca1f664&units=imperial`
      )
      .then((res) => {
        setWeather(res.data);
        console.log(res.data);
        setData(true);
      })
      .catch((err) => {
        err;
        setData(false);
      });
  };


  return(
    <>
      <Container padding="10px" width="100vw">
        <Flex>
          <Input
            placeholder="Search"
            onChange={(e) => {
              setSearchValue(e.target.value)
            }}
          />
          <IconButton
            colorScheme="blue"
            icon={<SearchIcon />}
            onClick = {handleClick}
          />
        </Flex>
      </Container>
      {isData ? <Card weather={weather}/> : <Container><Box><Text>City not Found</Text></Box></Container>}
    </>
  );
}
