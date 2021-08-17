import {
  AspectRatio,
  Box,
  Image,
  Modal,
  ModalContent,
  ModalOverlay,
  useDisclosure,
  useMediaQuery,
} from "@chakra-ui/react";

interface Props {
  id: string;
  title: string;
}

function Trailer({ id, title }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile] = useMediaQuery("(max-width: 768px)");
  return (
    <Box onClick={onOpen}>
      <>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent bgColor="dark" maxW={isMobile ? "320px" : "1200px"}>
            <AspectRatio ratio={16 / 9}>
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </AspectRatio>
          </ModalContent>
        </Modal>
      </>
      <Image
        m="auto"
        mb="2"
        width={isMobile ? "320px" : "210px"}
        borderRadius="md"
        src={`https://img.youtube.com/vi/${id}/0.jpg`}
      />
    </Box>
  );
}

export default Trailer;
