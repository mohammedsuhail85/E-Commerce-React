import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  Text,
  Heading,
  Flex,
  Center,
  Badge,
  Image,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  HStack,
  Button,
} from '@chakra-ui/react';
import {
  useParams
} from "react-router-dom";
import axios from 'axios';

import NotAvailable from './NotAvailable';

export default function ViewItem() {

  let { id } = useParams();

  const [hasError, setErrors] = useState(false);
  const [property, setProperty] = useState({});

  useEffect(async () => {
    await axios.get('https://extendsclass.com/mock/rest/6861d7c0f53686808c4c50d53259092e/getpropertybyId/' + id,
      {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
      .then(response => {
        console.log(response.data);
        setProperty(response.data);
      }, error => {
        console.log(error);
        setErrors(true);
      });

  }, [property]);

  if (hasError) {
    return <NotAvailable />
  } else {
    return (
      <div>
        <br />
        <br />
        <Center>
          <Box textAlign="left" fontSize="xl" p={15} w="80%" >
            <div>
              <br />
              <Heading as="h3" size="lg" textAlign="">
                {property.title}
              </Heading>
            </div>
            <br />
            <br />
            <div>
              <Flex>
                <Box
                  d="flex"
                  position="relative"
                  h="425px"
                  w="600px"
                  borderWidth="1px"
                  borderRadius="lg"
                  overflow="hidden"
                >
                  <Image src={property.imageUrl} alt={property.imageAlt} h="100%" w="100%" />
                </Box>

                {/* <Square color="transparent" size="150px">
              </Square> */}

                <Box flex="1">
                  <Box p="10">
                    <Box d="flex" alignItems="baseline">
                      <Badge borderRadius="full" px="2" colorScheme="teal">
                        New
                  </Badge>
                      <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                      >
                        {property.beds} beds &bull; {property.baths} baths
                  </Box>
                    </Box>
                    <Box
                      mt="1"
                      fontWeight="semibold"
                      as="h4"
                      lineHeight="tight"
                      isTruncated
                    >
                      <Box as="span" color="grey" fontSize="2xl">
                        {property.title}
                      </Box>
                    </Box>
                    <Box color="grey">
                      {property.formattedPrice}
                      <Box as="span" color="gray.600" fontSize="sm">
                        / wk
                  </Box>
                    </Box>
                    <Box d="flex" mt="2" alignItems="center">
                      <Box as="span" ml="2" color="gray.600" fontSize="sm">
                        {property.reviewCount} reviews
                  </Box>
                    </Box>
                    <Text fontSize="lg" color="grey">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quis! Repellat nemo reiciendis veniam possimus odit dolores,
                      inventore ipsa labore, odio minima eius ipsam sequi facilis perspiciatis ab voluptatibus tempore!
                  </Text>
                    <Text color="grey" fontSize="lg">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, quis! Repellat nemo reiciendis veniam possimus odit dolores,
                      inventore ipsa labore, odio minima eius ipsam sequi facilis perspiciatis ab voluptatibus tempore!
                  </Text>
                    <br />
                    <HStack>
                      <NumberInput defaultValue={1} min={1} max={20} w="150px" color="grey">
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>

                      <Button colorScheme="teal" variant="solid">
                        Set Booking
                    </Button>
                    </HStack>
                  </Box>
                </Box>
              </Flex>

            </div>

          </Box>
        </Center>
      </div>
    );
  }

  ReactDOM.render(
    // Try changing to isLoggedIn={true}:
    <ViewItem />,
    document.getElementById('root')
  );
}