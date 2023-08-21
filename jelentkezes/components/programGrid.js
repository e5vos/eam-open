import {
  Card,
  CardHeader,
  Grid,
  GridItem,
  Flex,
  Avatar,
  Box,
  Heading,
  Text,
  IconButton,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverBody,
  Image,
  Stack,
  Divider,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
} from "@chakra-ui/react";
import { IoIosCheckmarkCircle, IoIosLock } from "react-icons/io";
import React from "react";

export default function ProgramGrid({ programs, joinProgram, openProgram }) {
  return (
    <Grid
      templateColumns={{
        sm: "repeat(1, 1fr)",
        md: "repeat(2,1fr)",
        lg: "repeat(3, 1fr)",
      }}
      gap={4}
      p={4}
      bgImage={"url(/bg.jpg)"}
      bgSize={"cover"}
    >
      {programs.length > 0 &&
        programs.map((program, index) => (
          <GridItem key={index}>
            <Card rounded={"xl"}>
              <CardHeader>
                <Flex spacing="4">
                  <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                    <Avatar
                      name={program.title}
                      src={program.logoURL}
                      size={"sm"}
                    />

                    <Box>
                      <Heading size="sm">{program.title}</Heading>
                    </Box>
                  </Flex>
                  <Popover>
                    <PopoverTrigger>
                      <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        color={program.registerEnabled ? "green" : "red"}
                        icon={
                          program.registerEnabled ? (
                            <IoIosCheckmarkCircle />
                          ) : (
                            <IoIosLock />
                          )
                        }
                      ></IconButton>
                    </PopoverTrigger>
                    <PopoverContent>
                      <PopoverArrow />
                      <PopoverCloseButton />
                      <PopoverBody>
                        {program.registerEnabled
                          ? "A programra a jelentkezés nyiva áll."
                          : "Sajnos a programra jelenleg nem lehet jelentkezni."}
                      </PopoverBody>
                    </PopoverContent>
                  </Popover>
                </Flex>
              </CardHeader>
              <CardBody>
                <Image
                  src={program.bannerURL}
                  mt={-6}
                  alt="A program képe"
                  rounded={"xl"}
                />
                <Stack mt="6" spacing="3">
                  <Heading size="md">{program.title}</Heading>
                  <Text>{program.description.substring(0, 300) + "..."}</Text>
                  <Text
                    color="orange.400"
                    fontWeight={"semibold"}
                    fontSize="lg"
                  >
                    {program.dates}
                  </Text>
                </Stack>
              </CardBody>
              <Divider color={"gray.200"} />
              <CardFooter>
                <ButtonGroup spacing="2" ml={"auto"}>
                  <Button
                    onClick={() => openProgram(program)}
                    variant="ghost"
                    colorScheme="orange"
                    rounded={"xl"}
                  >
                    Részletek
                  </Button>
                  {program.registerEnabled && (
                    <Button
                      onClick={() => joinProgram(program._id)}
                      variant="solid"
                      colorScheme="orange"
                      rounded={"xl"}
                      px="8"
                    >
                      Jelentkezés
                    </Button>
                  )}
                </ButtonGroup>
              </CardFooter>
            </Card>
          </GridItem>
        ))}
    </Grid>
  );
}
