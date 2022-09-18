import * as React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import { View, Text } from './Themed'
import { LineChart } from 'react-native-chart-kit'

// Going to compare the two top RN charting libraries: victory-native and react-native-chart-kit
// react-native-chart-kit charts
export default function LineChartKit() {
  const screenWidth = Dimensions.get("window").width;

  const data = {
    labels: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    datasets: [
      {
        data: [1890, 1670, 1750, 1800, 1550, 1780, 1550],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // optional
        strokeWidth: 2 // optional
      }
    ],
    legend: ["Calories by Day"] // optional
  };

  return (
    <View style={styles.mainView}>
      <LineChart
        data={data}
        width={screenWidth}
        height={220}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  mainView: {

  }
})