import { View } from "react-native"
import { Box, Heading, FlatList ,Button, VStack, Divider, Input, Icon } from 'native-base';
import {Item} from "../Item/Item";
import { usercontext } from "../Context/context";
import { useContext,useEffect } from "react";
import { getalluser } from "../Action/userAction";
import { Ionicons } from "@expo/vector-icons";
import { getUserbysearch } from "../Action/userAction";


export const List = ({navigation}) => {
   

    const {state,dispatch}= useContext(usercontext);

    const resolve = async()=>{
        dispatch( await getalluser())
      
    }
    
    const resolvesearch = async(t)=>{
        dispatch( await getUserbysearch(t))
      
    }
        useEffect(()=>{

           resolve();
           console.log()
        },[]);
    return (

        <Box>
       
           <VStack my="4" space={5} w="100%" maxW="300px" divider={<Box px="2">
          <Divider />
        </Box>}>
      <VStack w="100%" space={5} alignSelf="center">
        <Heading fontSize="lg">Cupertino</Heading>
        <Input onChangeText={(e)=>{ resolvesearch(e) }} placeholder="Search" variant="filled" width="100%" borderRadius="10" py="1" px="2" borderWidth="0" 
        InputLeftElement={<Icon ml="2" size="4" color="gray.400" as={<Ionicons name="ios-search" />} />} />
      </VStack>
    
    </VStack>
    
            <FlatList data={state.users.list} renderItem={({
                item
            }) => <Item navigation={navigation}item={item}></Item>} keyExtractor={item => item.id} />
        </Box>

    )
}