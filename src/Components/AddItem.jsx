import React, { useState, useEffect } from "react";
import ReactDOM from 'react-dom';
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Input,
  CircularProgress,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';

import { useForm } from "react-hook-form";
import axios from 'axios';

export default function AddItem() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [hasError, setErrors] = useState(false)
  const { register, handleSubmit, reset, watch, formState: { isSubmitSuccessful }, errors } = useForm();
  const [ isLoading, setLoading ] = useState(false);
  const [ isSuccess, setSuccess ] = useState(false);
  const [ submittedData, setSubmittedData ] = React.useState({});

  React.useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ ...submittedData });
    }
  }, [isSubmitSuccessful, submittedData, reset]);

const onSubmit = data => {

  data = { ...data, "reviewCount": 0, "rating": 0, "imageAlt": "Rear view of modern home with pool" };
  console.log(data);

  axios.post('https://extendsclass.com/mock/rest/6861d7c0f53686808c4c50d53259092e/addnewproperty',
    {data},
    {
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        if(response.status == 201){
          setSuccess(true);
          setSubmittedData(data);
        }
    }, error => {
      console.log(error)
      setErrors(true);
    });
  }

  const restStat = () => {
    setSubmittedData(null);
  }
  return (
      <>
        <Button onClick={onOpen}>Add Item</Button>

        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Add new item</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor velit eveniet odit possimus adipisci voluptas, at qui vel labore? Amet fuga deserunt voluptatum quam omnis esse quasi, dolorem beatae vel.
  
            <form onSubmit={handleSubmit(onSubmit)}>
                <br />
                <Input placeholder="Title" name="title" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <Input placeholder="Price" name="formattedPrice" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <Input placeholder="Photo Link" name="imageUrl" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <Input placeholder="Bads" name="beds" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <Input placeholder="Baths" name="baths" ref={register({ required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <br />
                <br />
                <div align="right">
                  <Button
                    size="md"
                    height="42px"
                    width="125px"
                    border="2px"
                    borderColor="green.500"
                    type="submit"
                  >
                    {
                      isLoading ? <CircularProgress isIndeterminate color="green.300" size="8"/> : "Add"
                    }</Button>
                </div>
                <br/> {isSuccess && 
                <Alert
                  status="success"
                  variant="subtle"
                  flexDirection="column"
                  alignItems="center"
                  justifyContent="center"
                  textAlign="center"
                  height="200px"
                >
                <AlertIcon boxSize="40px" mr={0} />
                <AlertTitle mt={4} mb={1} fontSize="lg">
                  Saved Successfully!
                </AlertTitle>
                <AlertDescription maxWidth="sm">
                  Thanks for submitting your details.
                </AlertDescription>
                </Alert>
                }
              </form>
            </ModalBody>
            <ModalFooter>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )

    ReactDOM.render(
      <AddItem />,
      document.getElementById('root')
    );
  }
  