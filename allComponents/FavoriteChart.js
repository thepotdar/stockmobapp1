import React from 'react';
import { useSelector } from 'react-redux';
import { View, Text } from 'react-native';
import { LineChart } from 'react-native-chart-kit';

const FavoriteChart = () => {


    
    
    const stockData = useSelector((state) => state.stockData) || [];
    
     const companyNames = favoriteStocks.map((item) => item.companyName);
    
    const latestPrices = favoriteStocks.map((item) => item.latestPrice);
    
    const favorites = useSelector((state) => state.favorites) || [];
    
    const highestPrices = favoriteStocks.map((item) => item.high);
    
    const favoriteStocks = stockData.filter((stock) => favorites.includes(stock.symbol));

   


    const transposedData = companyNames.map((name, index) => ({
        name,
        currentPrice: latestPrices[index],
        highestPrice: highestPrices[index],
    }));
    
    return (
        <View>
            <View style={{ backgroundColor: '#2090ff', paddingVertical: 18, alignItems: 'center', marginBottom: 18 }}>


                <Text style={{ color: 'white', fontSize: 17 }}>Line Chart : Favorite Stocks</Text>
            </View>


            <View style={{ margin: 18 }}>



                <LineChart
                    data={{
                        labels: transposedData.map((data) => data.name),
                        datasets: [


                            {
                                data: transposedData.map((data) => data.currentPrice),
                                color: (opacity = 1) => `rgba(79, 190, 190, ${opacity})`,
                                strokeWidth: 2,
                            },
                            {
                                data: transposedData.map((data) => data.highestPrice),
                                color: (opacity = 1) => `rgba(253, 100, 131, ${opacity})`,
                                strokeWidth: 2,
                            },
                        ],


                    }}

                    width={350}
                    height={300}
                    yAxisLabel="₹"
                    chartConfig={{
                    
                        backgroundGradientFrom: '#fff',
                        backgroundGradientTo: '#fff',


                        color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        
                        labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                        strokeWidth: 2,


                        decimalPlaces: 2,
                    }}
                    style={{


                        marginVertical: 10,
                        borderRadius: 16,
                    }}
                    verticalLabelRotation={30}
                />

                //ok
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(74, 190, 191, 1)', marginRight: 5 }} />
                    <Text>Current Prices</Text>

                    
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(223, 87, 123, 1)', marginRight: 5 }} />
                    <Text>Highest Prices</Text>
                </View>
            </View>
        </View>
        
    );
};

export default FavoriteChart;
