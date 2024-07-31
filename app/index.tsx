import { Text, View, FlatList, StyleSheet } from "react-native";
import React, { useState } from "react";
import productData from './../product.json'
import SearchBar from './SearchBar'
import Product from './../app/product'
export default function Index() {

  const [product, setProduct] = useState(productData)

  const renderProduct = ({ item }) => <Product product={item} />

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TETIKSTORE</Text>
      <SearchBar />

      <FlatList numColumns={2}
        columnWrapperStyle={{ gap: 10, paddingHorizontal: 5 }}
        contentContainerStyle={{ gap: 10, paddingHorizontal: 5, paddingVertical: 2 }}
        keyExtractor={item => item.id.toString()}
        data={product} renderItem={renderProduct} />
    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    marginTop: 5,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#8B008B'
  }
})
