import React, { useState, useEffect } from "react";
import { Heading, Flex, Text, Button, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import Link from "next/link";
import Navigation from "@/components/navigation";

export default function Error() {
  const [errorText, setErrorText] = useState("Betöltés...");
  const router = useRouter();

  // Get error code from URL query string (?error=xxxxx)
  const { error } = router.query;

  // Add errorText when error is present
  useEffect(() => {
    switch (error) {
      case "Configuration":
        setErrorText(
          "Valamilyen hibát ejtettünk a bejelentkezés konfigurálásakor. Csapatunk nagy eséllyel ismeri már a hibát és a megoldásán dolgozik. Kérlek próbáld újra később."
        );
        break;
      case "AccessDenied":
        setErrorText(
          "Úgy tűnik nincs jogosultságod bejelentkezni. Kérlek próbáld újra később."
        );
        break;
      case "Default":
        setErrorText(
          "Valamilyen hiba történt a bejelentkezés során. Kérlek próbáld újra később."
        );
        break;
    }
  }, [error]);

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
          <Heading mb={2}>Hiba történt</Heading>
          <Text>{errorText}</Text>
          <Link href={"/auth/signin"}>
            <Button>Újrapróbálom</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
}
