import React from 'react'
import { Text, View } from '../../components/Themed';
import { Card, Title} from 'react-native-paper';
import styles from './HomePageStyles';
import CircularProgress, {CircularProgressBase} from 'react-native-circular-progress-indicator';
import { Pressable, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 

const Nutrient = ({ navigation }) => {

    const goSearch = () => {
        navigation.navigate('SearchScreen');
      }
  return (
    <View style={styles.mediumContainer}>
        <Text style={[{marginTop: 10}, styles.headerText]}>Nutrients</Text>
        <Card style={styles.card}>
                <View style={styles.barContainer}>
                    <View style={styles.smallBarContainer1}>
                        <Title style={styles.titleContainer}>BreakFast</Title>
                        <Pressable onPress={goSearch}>
                            <Ionicons name="add" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.smallBarContainer1}>
                        <Title style={styles.titleContainer}>Lunch</Title>
                        <Pressable onPress={goSearch}>
                                <Ionicons name="add" size={24} color="black" />
                        </Pressable>
                    </View>
                    <View style={styles.smallBarContainer1}>
                        <Title style={styles.titleContainer}>Dinner</Title>
                        <Pressable onPress={goSearch} style={{justifyContent: 'center'}}>
                                <Ionicons name="add" size={24} color="black" />
                        </Pressable>
                    </View>
                </View>
        </Card>
    </View>
  )
}

export default Nutrient