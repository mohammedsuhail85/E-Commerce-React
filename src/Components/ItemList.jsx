import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Heading,
  GridItem,
} from '@chakra-ui/react';
import axios from 'axios';

import Item from "./Item";
import AddItemModel from "./AddItem";

export default function ItemList() {

  const [hasError, setErrors] = useState(false);
  const [listProperty, setListProperty] = useState([]);

  useEffect(async () => {
    axios.get('https://extendsclass.com/mock/rest/6861d7c0f53686808c4c50d53259092e/fetchallitems', 
    {headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
     }})
    .then(response => {
      console.log(response.data);
      setListProperty(response.data);
    }, error => {
      console.log(error);
    });

  }, []);

  return (
    <div>

      <Grid templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem textAlign="left" colSpan={2} h="10">
          <Heading as="h3" size="lg">List of available items</Heading>
        </GridItem>
        <GridItem colStart={5} textAlign="right" colEnd={6} h="10"><AddItemModel /></GridItem>
      </Grid>

      <Box textAlign="left" fontSize="xl">

        <br />
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          {
            listProperty.map(property => {
              return <Item key={property.id} property={property} />
            })
          }
        </Grid>

      </Box>
    </div>
  );
}
