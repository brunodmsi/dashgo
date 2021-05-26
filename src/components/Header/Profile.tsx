import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
	showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
			{showProfileData && (
				<Box mr="4" textAlign="right">
					<Text>Bruno De Masi</Text>
					<Text
						color="gray.300"
						fontSize="small"
					>
						brunodemasi1@gmail.com
					</Text>
				</Box>
			)}

      <Avatar
        size="md"
        name="Bruno De Masi"
        src="https://github.com/brunodmsi.png"
      />
    </Flex>
  )
}
