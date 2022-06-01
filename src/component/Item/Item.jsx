import { Image, TouchableHighlight, View } from "react-native"
import {HStack, Avatar, Text, Spacer, VStack, Box} from "native-base"
export const Item =({item,navigation})=>{


    return(
        <TouchableHighlight onPress={()=>{
       
            navigation.navigate('Details',{id:item.id})
        }} >
        <Box  borderBottomWidth="1" _dark={{
            borderColor: "gray.600"
        }} borderColor="coolGray.200" pl="4" pr="5" py="2">
                <HStack space={3} justifyContent="space-between">
                    <Avatar size="48px" source={{
                        uri: "https://www.irishlifecorporatebusiness.ie/sites/default/files/slider/employee_2.jpg"
                    }} />
                    <VStack >
                        <Text _dark={{
                            color: "warmGray.50"
                        }} color="coolGray.800" bold>
                            {item.username}
                        </Text>
                        <Text color="coolGray.600" _dark={{
                            color: "warmGray.200"
                        }}>
                            {item.email}
                        </Text>
                    </VStack>
                    <Spacer />
                    <Text fontSize="xs" _dark={{
                        color: "warmGray.50"
                    }} color="coolGray.800" alignSelf="flex-start">
                        {item.website}
                    </Text>
                </HStack>
            </Box>
            </TouchableHighlight>
    )
}