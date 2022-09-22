// Personal Challenge : 

import { ScrollView, StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryBar } from 'victory-native'
import AxiosButtonGet from '../../components/AxiosButtonGet';
import LineChartVictory from '../../components/LineChartVictory';
import ImageBMI from '../../components/ImageBMI';

// user health stats (diet, charts, bmi, calorie history)
export default function PersonalchallengeScreen({ navigation }) {

  return (
    <ScrollView style={styles.topView}>
      <View style={styles.viewWeight}>
        <Text style={styles.titleWeight}>Weight</Text>
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
      </View>

      <View style={styles.viewBMI}>
        <Text style={styles.titleBMI}>BMI</Text>
        <ImageBMI sex="male"/>
      </View>

      <View style={styles.viewCalories}>
        <Text style={styles.titleCalories}>Calories</Text>
        <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
          <VictoryBar
            style={{ data: { fill: "#c43a31" } }}
            data={[
              { x: 1, y: 2 },
              { x: 2, y: 3 },
              { x: 3, y: 5 },
              { x: 4, y: 4 },
              { x: 5, y: 7 }
            ]}
          />
        </VictoryChart>
      </View>

      <Text>Get User</Text>
      <AxiosButtonGet title="/getUser" uri="http://192.168.1.214:8088/users/getUser" />
  </ScrollView>
  );
}

const styles = StyleSheet.create({
  topView: {
  },
  titleWeight: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  imageBMI: {
    width: '100%',
  },
  titleBMI: {
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  titleCalories: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  viewWeight: {
    backgroundColor: '#0000ff',
  },
  viewBMI: {
  },
  viewCalories: {
    backgroundColor: '#ff0000',
  }
});
