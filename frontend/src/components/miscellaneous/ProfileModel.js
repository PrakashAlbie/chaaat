import { ViewIcon } from "@chakra-ui/icons";
import React from "react";
import {
	IconButton,
	useDisclosure,
	Modal,
	ModalOverlay,
	ModalContent,
	ModalHeader,
	ModalFooter,
	ModalBody,
	ModalCloseButton,
	Button,
	Image,
	Text,
} from "@chakra-ui/react";

const ProfileModel = ({ user, children }) => {
	const { isOpen, onOpen, onClose } = useDisclosure();

	return (
		<>
			{children ? (
				<span onClick={onOpen}>{children}</span>
			) : (
				<IconButton
					display={"flex"}
					icon={<ViewIcon />}
					onClick={onOpen}></IconButton>
			)}
			<Modal size={"lg"} isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />
				<ModalContent h={"350px"}>
					<ModalHeader
						fontSize={"35px"}
						fontFamily="Work sans"
						display={"flex"}
						justifyContent={"center"}>
						{user.name}
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody
						display={"flex"}
						flexDirection="column"
						alignItems={"center"}
						justifyContent="space-between">
						<Image
							borderRadius={"full"}
							boxSize="120px"
							src={user.pic}
							alt={user.name}
						/>
						<Text
							fontSize={{ base: "22px", md: "24px" }}
							fontFamily="Work sans">
							Email: {user.email}
						</Text>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};

export default ProfileModel;
