import { Box, Heading, HStack, Text, VStack } from "native-base";
import { useContext, useEffect } from "react";
import { usercontext } from "../Context/context";

import { getUserDetails } from "../Action/userAction";

export const Details =({route})=>{
    let {id}=route.params
    const resolve = async () => {
        dispatch(await getUserDetails(id));
      };
      useEffect(() => {
        if (id) resolve();
    
        return () => dispatch({ type: "CLEAR" });
      }, []);
      const { state, dispatch } = useContext(usercontext);
      const user = state.users.details;
    
      if (!user) return <Text>Loading ...</Text>;
    return(
    <Box w="300" justifyContent="center">
    <VStack space={3}>
      <HStack alignItems="flex-end">
        <Heading>Details</Heading>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight="medium">Name</Text>
        <Text color="blueGray.400">{user.name}</Text>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight="medium">user Name</Text>
        <Text color="blueGray.400">{user.username}</Text>
      </HStack>
      <HStack alignItems="center" justifyContent="space-between">
        <Text fontWeight="medium">Email</Text>
        <Text color="emerald.600">{user.email}</Text>
      </HStack>
      </VStack>
      </Box>
)
}