import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  VStack
} from "@chakra-ui/react";
import { useEffect } from "react";

type ConnectWeb3Props = {
  connectors: any[];
  connect: any;
  signData: string | undefined;
};

const ConnectWeb3 = ({ connectors, connect, signData }: ConnectWeb3Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    if (signData) {
      onClose();
    }
  }, [signData]);

  return (
    <>
      <Button _focus={{ boxShadow: "none" }} onClick={onOpen}>
        Connect
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent _focus={{ boxShadow: "none" }}>
          <ModalHeader _focus={{ boxShadow: "none" }}>
            Choose Web3 Provider
          </ModalHeader>
          <ModalCloseButton _focus={{ boxShadow: "none" }} />
          <ModalBody>
            <VStack spacing="24px">
              {connectors.map(x => (
                <Button
                  _focus={{ boxShadow: "none" }}
                  disabled={!x.ready}
                  key={x.id}
                  w="100%"
                  onClick={() => connect(x)}
                >
                  {x.name}
                  {!x.ready && " (unsupported)"}
                </Button>
              ))}
            </VStack>
          </ModalBody>

          <ModalFooter />
        </ModalContent>
      </Modal>
    </>
  );
};

export default ConnectWeb3;
