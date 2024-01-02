import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import React, { useState } from 'react';
import { removeFromFavorites } from '../reduxComponents/favoritesActions';
import { useSelector, useDispatch } from 'react-redux';

const MyDashboard = () => {
  
  
  const dispatch = useDispatch();

const stockData = useSelector((state) => state.stockData) || [];
  const favorites = useSelector((state) => state.favorites) || [];
  
  
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleRemoveFromFavorites = (symbol) => {
    dispatch(removeFromFavorites(symbol));
  };
  const paginatedStocks = favoriteStocks.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  

  const favoriteStocks = stockData.filter((stock) => favorites.includes(stock.symbol));

  const renderItem = ({ item, index }) => (

    
    <View style={styles.stockItem}>
      <Text style={styles.companyName}>{`#${index + 1} - ${item.companyName}`}</Text>
      <Text>{`Latest Price: ${item.latestPrice}`}</Text>
      <Text>{`Symbol: ${item.symbol}`}</Text>

      
      <Text>{`Currency: ${item.currency}`}</Text>
      <Text>{`High: ${item.high}`}</Text>
      <Button

        title="Please Remove from Favorites"
        onPress={() => handleRemoveFromFavorites(item.symbol)}
        color="red"
      />
    </View>
  );



  return (
    <View style={styles.container}>

      <View style={styles.header}>
      
        <Text style={styles.headerText}>My Dashboard</Text>
      
      </View>
      
      <FlatList
      
      data={paginatedStocks}
      
      renderItem={renderItem}
      
      keyExtractor={(item) => item.symbol}
      
      ListEmptyComponent={<Text>No favorite stocks are found.</Text>}
      />
      <View style={styles.pagination}>
        <Button
          title="Previous"
          disabled={currentPage === 1}
          onPress={() => setCurrentPage((prevPage) => prevPage - 1)}
        />

        <Text>{`Page ${currentPage}`}</Text>
        
        <Button
        
        title="Next"
        
        disabled={favoriteStocks.length <= currentPage * pageSize}
          onPress={() => setCurrentPage((prevPage) => prevPage + 1)}
        />
      </View>
    </View>
  );
};

//Done
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  header: {
    backgroundColor: 'black',
    padding: 20,
    marginBottom: 10,
  },
  headerText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  stockItem: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
});

export default MyDashboard;
