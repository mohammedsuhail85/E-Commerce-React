import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import {
  Box,
  theme,
  Heading,
  Center,
} from '@chakra-ui/react';

export default function NotAvailable() {

  return (
    <div>

      <br />
      <br />
      <Center>
        <Box textAlign="center" fontSize="xl" p={15} w="80%" >
          <div>
            <br />
            <Heading as="h3" size="lg" textAlign="">
              Sorry. Couldn't not load the contents.
            </Heading>
          </div>
          <br />
          <br />

        </Box>
      </Center>
    </div>
  );
}