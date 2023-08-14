import { Flex, Text, Image, Box, SimpleGrid, ListItem, UnorderedList, } from "@chakra-ui/react";
import { useEffect } from "react";

export default function Card(props) {

const data = props.weather; //stores props values in data
const cityName = data.name; //stores city name
const cityMain = data.main; //stores city main
const weatherForecast = data.main.feels_like
const weatherIcon = Object.values(data.weather)
  .map((itm) => itm.icon)
  .join("");
const url = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;
const dT = data.dt;
const time = data.timezone;
const cityMonth = new Date(dT * 1000 + time * 1000).getMonth();
const cityTime = new Date(dT * 1000 + time * 1000).getDay();
const minutes = new Date(dT * 1000 + time * 1000).getMinutes();
const hours = new Date(dT * 1000 + time * 1000).getHours();
const cityDate = new Date(dT * 1000 + time * 1000).getDate();
const cityMinutes = minutes < 10 ? `0` + minutes : minutes;
const cityHours = hours < 10 ? `0` + hours : hours;
const timeFormat = cityHours >= 12 ? "PM" : "AM";
const mainTime = `${cityHours}:${cityMinutes} ${timeFormat}`;
let val;
const dayArray = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const day = dayArray[cityTime];
const monthArray = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const month = monthArray[cityMonth];
let tempName = [];
let tempValue= [];
let dateSuffix;
switch (cityDate) {
  case 2:
    dateSuffix = "nd";
    break;
  case 3:
    dateSuffix = "rd";
    break;
  default:
    dateSuffix = "th";
}
const fullDate = `${month} ${day} ${cityDate + dateSuffix}`;
const unicode = "\u00b0";

//actual data array
let weatherArray = [fullDate, cityName, mainTime];
//weather key names



  return(
    <SimpleGrid columns={2} minChildWidth="500px" placeItems="center" spacing={0}>
      <Box
        m="10px"
        h="500px"
        w="400px"
        mt="40px"
        bgImage="url(./img/peyman-farmani-c-lVI683QwU-unsplash.jpg)"
        bgPosition="center"
        borderRadius="2xl"
        shadow="dark-lg"
      >

        <UnorderedList>
          {weatherArray.map((element, index) => (
              <ListItem
                color="white"
                display="flex"
                justifyContent="center"
                mt="20px"
                key={index}
              >
                {element}
              </ListItem>
          ))}
        </UnorderedList>
        <Image
          src={url}
          alt="weather-icon"
          width={100}
          height={100}
          ml="155"
        />
        <Text
        color="white"
        display="flex"
        justifyContent="center"
        mt="5px"
        fontSize="20px"
      >
        {Math.round((weatherForecast-32)*5/9)}
        {unicode}C
      </Text>
      <Text color="white" display="flex" justifyContent="center" mt="200px">
        Current Weather
      </Text>
    </Box>
      {/* <Box
        m="10px"
        h="500px"
        w="400px"
        mt="40px"
        bgImage="url(./img/steven-weeks-74Km27oJZpI-unsplash.jpg)"
        bgPosition="top"
        borderRadius="2xl"
        shadow="dark-lg"
      >
         <Flex wrap="wrap" gap="2" justifyContent="space-around">
          {mainTemp.map((val, index) => (
          <Box
            color="white"
            display="flex"
            justifyContent="center"
            alignItems="center"
            p="5"
            w="150px"
            key={index}
          >
            {" "}
            {val}{" "}
          </Box>
        ))}
        </Flex>
      </Box> */}
    </SimpleGrid>
  )
}