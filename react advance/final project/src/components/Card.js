import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
    return (
      <HStack background="white" borderRadius="lg" color="black" >
        <VStack display='flex' alignItems='left'>
          <Image src={imageSrc} borderRadius='lg'/>
          <Heading padding="10px" size="md">{title}</Heading>
          <Text padding="10px">{description}</Text>
          <a href="#" style={{padding:"10px"}}>See more &nbsp;
            <FontAwesomeIcon icon={faArrowRight}/>
          </a>
        </VStack>
      </HStack>
    )
};

export default Card;
