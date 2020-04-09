import React, { useEffect, useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import axios from "axios";

interface Props {
}

const Home: React.FC<Props> = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a').then(res => setData(res.data.drinks));
  });

  return (
    <SafeAreaView>
      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <View key={item.idDrink}>
              <Text>{item.strDrink}</Text>
              <Image
                source={{
                  uri: item.strDrinkThumb,
                }}
                style={{
                  width: 200,
                  height: 200
                }}
              />
            </View>
          )
        }}
        keyExtractor={item => item.idDrink}
      />
    </SafeAreaView>
  );
};

export default Home;
