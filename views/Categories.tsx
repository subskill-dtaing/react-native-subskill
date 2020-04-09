import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, Text } from "react-native";
import axios from "axios";

interface Props {
}

const Categories: React.FC<Props> = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    axios.get('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list').then(res => setCategories(res.data.drinks));
  });

  return (
    <SafeAreaView>
        <FlatList
          data={categories}
          renderItem={({ item, index }) => (
            <Text key={index}>{ item.strCategory }</Text>
          )}
          keyExtractor={item => item.index}
        />
    </SafeAreaView>
  );
};

export default Categories;
