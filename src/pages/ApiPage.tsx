import { FlatList, Text } from 'native-base';
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, View } from 'react-native';
export const ApiPage = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  let cont=1;

  const getData = async () => {
     try {
      const response = await fetch('https://jsonplaceholder.typicode.com/photos');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  useEffect(() => {
    cont=1;
    getData();
  }, []);
  return (
    <View style={{ flex: 1, padding: 24 }}>
    {isLoading ? <ActivityIndicator/> : (
      <FlatList
        data={data}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => (
          <Text> Id: {item.id} - Name: {item.title} - URL: {item.thumbnailUrl}</Text>
        )}
      />
    )}
  </View>
  )
}