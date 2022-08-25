import React, {useEffect, useState} from 'react';

import {FlatList, RefreshControl, Text} from 'react-native'
import {useAuth} from '../../context/AuthContext';

import {Container, HeaderContainer, HeaderContent} from './styles';
import {Fakitter, getFakittersService} from "../../services/fakitters";
import Title from "../../components/Title";
import FakitterComp from "../../components/Fakitter";

export const Home = () => {
    const {user} = useAuth()
    const [fakitters, setFakitters ] = useState<Fakitter[]>([])
    const [page, setPage ] = useState<number>(1)
    const [refreshing, isRefreshing ] = useState<boolean>(false)

    useEffect(() => {
        const loadFakitters = async () => {
            const fakitterData = await getFakittersService({page, pageSize: 10})
            setFakitters(fakitterData)
        }

        loadFakitters()
    }, [])

    const getMoreFakitters = async () => {
        const newPage = page + 1
        const additionalFakitters = await getFakittersService({page: newPage, pageSize: 10})
        setFakitters([...fakitters, ...additionalFakitters])
        setPage(newPage)
    }

    const refreshFakitters = async () => {
        isRefreshing(true)
        const fakitterData = await getFakittersService({page: 1, pageSize: 10})
        setFakitters(fakitterData)
        isRefreshing(false)
    }


  return (
    <Container>
      <FlatList
          ListHeaderComponent={() => (
              <HeaderContainer>
                  <HeaderContent>
                      <Title>{user.name}</Title>
                      <Text>@{user.username}</Text>
                  </HeaderContent>
                </HeaderContainer>
              )}
          data={fakitters}
          refreshControl={<RefreshControl
              refreshing={refreshing}
              onRefresh={refreshFakitters}
          />}
          onEndReached={getMoreFakitters}
          renderItem={({item}) => <FakitterComp fakitter={item} /> }
      />

    </Container>
  );
};
