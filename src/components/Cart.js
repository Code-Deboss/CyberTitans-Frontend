import React, { useEffect, useState } from 'react';
import { Box, Button, CloseButton, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Flex, Heading, IconButton, Image, Input, Stack, StackDivider, Text, VStack } from '@chakra-ui/react'
import { Link, Link as RouterLink } from 'react-router-dom';
import aloevera from '../assets/aloe-vera-img.webp'
import { AddIcon, MinusIcon } from '@chakra-ui/icons';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import cartAtom from '../states/atoms/cart';


const Cart = ({isOpen, onClose, onOpen, cartRef}) => {
  
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('user') ) || []
    setProducts(cart)
  }, [])
  
  return (
    <>

      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={cartRef}
        size={'md'}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader display={'flex'} gap={'.5rem'}>
            Your Cart <Text color={'brand.500'}> (7 items)</Text>
          </DrawerHeader>

          <DrawerBody mt={'2'}>
            {
              products.map(({name, price, totalPrice}) => {
                return(
                  <Flex gap={'2rem'}>
                    <Image h={'150px'} src={aloevera}/>
                    <Stack justifyContent={'space-between'} w={'100%'}>
                      <Flex justifyContent={'space-between'} >
                        <VStack alignItems={'flex-start'}>
                          <Heading fontSize={'xl'}>{name}</Heading>
                          <Heading fontSize={'md'} fontWeight={'medium'}>{`$${price}.00`}</Heading>
                        </VStack>
                        <Text fontSize={'lg'} fontWeight={'semibold'}>{`$${totalPrice}.00`}</Text>
                      </Flex>
                      <Flex justifyContent={'space-between'}>
                        <Box display={'flex'} alignItems={'center'} gap={'.5rem'} borderWidth={'2px'} borderColor={'brand.500'} px={'1.5'}>
                          <IconButton bg={'none'} _hover={{bg: 'none'}}   icon={<AiOutlineMinus />}/>
                          <Text fontSize={'lg'} fontWeight={'medium'}></Text>
                          <IconButton bg={'none'} _hover={{bg: 'none'}}   icon={<AiOutlinePlus />}/>
                        </Box>
                        <Button>
                          Remove
                        </Button>
                      </Flex>
                    </Stack>
                  </Flex>
                )
              })
            }
          </DrawerBody>

          <DrawerFooter px={'4'} py={'3'} display={'block'} clipPath={'none'}>
            <Stack >
              <Flex justifyContent={'space-between'}>
                <Text fontWeight={'semibold'}>Subtotal:</Text>
                <Text fontWeight={'semibold'}>$20.00</Text>
              </Flex>
              <Link as={RouterLink} to={'/checkout'}>
              <Button bgColor='brand.500' color={'white'}>Checkout</Button>
              </Link>
            </Stack>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
};

export default Cart;
