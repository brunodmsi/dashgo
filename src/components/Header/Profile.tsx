import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export default function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Bruno De Masi</Text>
        <Text 
          color="gray.300" 
          fontSize="small"
        >
          brunodemasi1@gmail.com
        </Text>
      </Box>

      <Avatar
        size="md" 
        name="Bruno De Masi" 
        src="https://github.com/brunodmsi.png" 
      />
    </Flex>
  )
}