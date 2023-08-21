import React, { useEffect } from "react";
import { signIn, useSession } from "next-auth/react";
import { Button, Flex, Heading, Text, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Navigation from "@/components/navigation";

export default function SignIn() {
  const { data: session } = useSession();
  const router = useRouter();

  // Get redirect URL from query string (?callbackUrl=/foo/bar)
  const { callbackUrl } = router.query;

  // If session exists, redirect to content
  useEffect(() => {
    if (session) {
      router.replace(callbackUrl || "/");
    }
  }, [session, callbackUrl, router]);

  return (
    <Flex direction={"column"} overflowY={"hidden"} maxH={"100vh"}>
      <Navigation loginHidden={true} />
      <Flex
        w="full"
        h="90vh"
        align="center"
        justify="center"
        bgImage={"url(/bg.jpg)"}
        bgSize={"cover"}
      >
        <Flex
          direction={"column"}
          align={"center"}
          justify={"center"}
          bgColor={"whiteAlpha.800"}
          px={8}
          py={8}
          gap={2}
          rounded={"xl"}
          maxW={"md"}
          shadow={"md"}
        >
          <Image
            src="/logo-orange.png"
            alt="logo"
            w="100px"
            h="100px"
            my={"-2"}
          />
          <Heading mb={2}>Bejelentkezés</Heading>
          <Text>
            A programokra történő jelentkezéshez be kell jelentkezni, hogy a a
            foglalkozásvezetőnek jelentkezés esetén el tudjuk küldeni nevedet és
            email címedet.
          </Text>
          <Button colorScheme="blue" onClick={() => signIn("google")}>
            Folytatás Google fiókkal
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
