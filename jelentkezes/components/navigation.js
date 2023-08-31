import React from "react";
import { signIn, useSession, signOut } from "next-auth/react";
import { Button, Flex, Heading, Image, Spacer, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Navigation({ loginHidden }) {
  const { data: session } = useSession();
  return (
    <Flex w={"full"} px={2} align={"center"} gap={2} bg={"white"}>
      <Image src="/logo-orange.png" alt="logo" w="100px" h="100px" />
      <Heading
        size={"md"}
        color={"rgb(248,120,57)"}
        display={{ base: "hidden", md: "block" }}
      >
        MűhelyJelentkezés™
      </Heading>
      <Spacer />
      {loginHidden ? null : (
        <>
          {session ? (
            <Button
              colorScheme="orange"
              onClick={() => signOut()}
              rounded={"full"}
              px={6}
            >
              Kijelentkezés
            </Button>
          ) : (
            <Button
              colorScheme="orange"
              onClick={() => signIn()}
              rounded={"full"}
              px={6}
            >
              Bejelentkezés
            </Button>
          )}
        </>
      )}
    </Flex>
  );
}
