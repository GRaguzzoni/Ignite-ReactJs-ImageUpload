import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  // TODO MODAL WITH IMAGE AND EXTERNAL LINK
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />

        <ModalContent maxWidth="max-content" backgroundColor="gray.800">
          <ModalBody>
            <Image src={imgUrl} maxHeight={600} minWidth={600} />
          </ModalBody>

          <ModalFooter justifyContent="start" borderBottomLeftRadius={6} borderBottomRightRadius={6}>
            <Link href={imgUrl}> Abrir original</Link>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}
