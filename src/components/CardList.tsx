import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  // TODO MODAL USEDISCLOSURE
  const {isOpen, onClose, onOpen} = useDisclosure();
  
  // TODO SELECTED IMAGE URL STATE
  const [selectedImageUrl, setSelectedImageUrl] = useState('');

  // TODO FUNCTION HANDLE VIEW IMAGE
  function handleViewImage(url: string ): void {
    setSelectedImageUrl(url);

    onOpen();
  }

  return (
    <>
      {/* TODO CARD GRID */}
      <SimpleGrid columns={3} spacing="40px">
        {cards.map(image => (
          <Card key={image.id} data={image} viewImage={() => handleViewImage(image.url)} />
        ))}
      </SimpleGrid>

      {/* TODO MODALVIEWIMAGE */}
      <ModalViewImage onClose={onClose} isOpen={isOpen} imgUrl={selectedImageUrl} />
    </>
  );
}
