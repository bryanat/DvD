import * as React from 'react';
import { StyleSheet } from 'react-native';
import { View, Text } from './Themed'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native'

// Going to compare the two top RN charting libraries: victory-native and react-native-chart-kit
// victory-native charts (also check out "area hover styles" victory-native chart)
export default function LineChartVictory() {
  return (
    <VictoryChart theme={VictoryTheme.material}>
      <VictoryLine
        style={{
          data: { stroke: "#c43a31" },
          parent: { border: "1px solid #ccc"}
        }}
        data={[
          { x: 1, y: 2 },
          { x: 2, y: 3 },
          { x: 3, y: 5 },
          { x: 4, y: 4 },
          { x: 5, y: 7 }
        ]}
      />
    </VictoryChart>
  )
}

const styles = StyleSheet.create({
})