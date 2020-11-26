import React, { useState, useEffect } from "react";
import { Box, Text, Divider, Input, Button } from "@chakra-ui/react"
import { useForm } from "react-hook-form";

export default function App() {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = data => console.log(data);

  const [itemList, setItemList] = useState([]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Text fontSize="2xl">Add new record</Text>

      <br />
      <Input placeholder="First Name" w="300px" name="firstName" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <br />
      <Input placeholder="Last Name" name="lastName" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <br />
      <Input placeholder="Address" name="address" ref={register({ required: true })} />
      {errors.exampleRequired && <span>This field is required</span>}
      <br />
      <br />
      <Button
        size="md"
        height="48px"
        width="200px"
        border="2px"
        borderColor="green.500"
        type="submit"
      >
        Submit
      </Button>
    </form>
  );
}