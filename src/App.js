import React from 'react';
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
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

import ItemAddForm from './Components/ItemAddForm'
import ItemList from './Components/ItemList'
import ViewItem from './Components/ViewItem'

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Heading as="h2" size="2xl">
              E-Commerce Application
            </Heading>

            {/* <ItemAddForm /> */}
 <ItemList />


          </VStack>
          
          {/* <ViewItem /> */}

        </Grid>



      </Box>

      
    </ChakraProvider>
  );
}

export default App;
