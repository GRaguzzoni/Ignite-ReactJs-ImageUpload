import { Button, Box } from '@chakra-ui/react';
import { useMemo } from 'react';
import { useInfiniteQuery } from 'react-query';

import { Header } from '../components/Header';
import { CardList } from '../components/CardList';
import { api } from '../services/api';
import { Loading } from '../components/Loading';
import { Error } from '../components/Error';
import {ImagesQueryResponse} from './api/images';

export default function Home(): JSX.Element {
  const {
    data,
    isLoading,
    isError,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useInfiniteQuery(
    'images', 

      async ({pageParam = null}) => {
        const response = await api.get('/api/images', {
          params: {
            after: pageParam?.after,
          },
        });
        return response.data;
      },

      {
        getNextPageParam: (lastpage: ImagesQueryResponse) =>
          lastpage?.after ? lastpage : null,        
      }        
  );

  const formattedData = useMemo(() => {
    return data?.pages?.flatMap(page => page.data)
  }, [data]);

  if (isLoading) {
    return <Loading />
  }

  if (isError) {
     return <Error />
  }

  return (
    <>
      <Header />

      <Box maxW={1120} px={20} mx="auto" my={20}>
        <CardList cards={formattedData} />
        {/* TODO RENDER LOAD MORE BUTTON IF DATA HAS NEXT PAGE */}
        {hasNextPage && (
          <Button 
            isLoading={isFetchingNextPage}
            marginTop="8"
            onClick={() => fetchNextPage()}
            disabled={!hasNextPage}
          >
            Carregar mais
          </Button>
        )}       
      </Box>
    </>
  );
}
