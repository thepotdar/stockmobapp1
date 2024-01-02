import { LineChart } from 'react-native-chart-kit';

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const StockDataChart = () => {
    const stockData = useSelector((state) => state.stockData) || [];



    const companyNames = stockData.map((item) => item.companyName);
    //cbjknslm  a;,'.
    const latestPrices = stockData.map((item) => item.latestPrice);
   
    const highestPrices = stockData.map((item) => item.high);

    const chartData = {
        labels: companyNames,
        datasets: [
            
            {
                data: latestPrices,
                color: (opacity = 1) => `rgba(72, 193, 193, ${opacity})`,
                strokeWidth: 2,
            },
            
            
            {
                data: highestPrices,
                color: (opacity = 1) => `rgba(252, 93, 128, ${opacity})`,
                strokeWidth: 2,
            },
        ],
    };

    return (
        //
        <View>
            <View style={{ backgroundColor: '#1890ff', paddingVertical: 20, alignItems: 'center', marginBottom: 20 }}>
                <Text style={{ color: 'white', fontSize: 20 }}>Line Chart : Company Prices here </Text>
            </View>
            
            <View style={{ margin: 20 }}>
                <LineChart
                //
                    data={chartData}
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
                        marginVertical: 8,
                        borderRadius: 16,
                    }}
                    verticalLabelRotation={30}
                    //
                />
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 20 }}>
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(71, 168, 168, 1)', marginRight: 5 }} />
                    <Text>Current Prices</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, backgroundColor: 'rgba(244, 99, 128, 1)', marginRight: 5 }} />
                    <Text>Highest Prices</Text>
                </View>
            </View>
        </View>
    );
};

export default StockDataChart;
