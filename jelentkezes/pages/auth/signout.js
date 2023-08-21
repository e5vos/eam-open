import React, { useEffect } from "react";
import { signOut, useSession } from "next-auth/react";
import { Button, Flex } from "@chakra-ui/react";
import { useRouter } from "next/router";

export default function SignOut() {
  const { data: session } = useSession();
  const router = useRouter();

  // Get redirect URL from query string (?callbackUrl=/foo/bar)
  const { callbackUrl } = router.query;

  // If session exists, redirect to content
  useEffect(() => {
    if (!session) {
      router.replace(callbackUrl || "/");
    }
  }, [session, callbackUrl, router]);

  return (
    <Flex w="full" h="full" align="center" justify="center">
      <Button onClick={() => signOut()}>KIjelentkezés</Button>
    </Flex>
  );
}
