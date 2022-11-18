import React, { useState } from 'react'
import { View } from '../../components/Themed';
import { StyleSheet, Dimensions, Text } from 'react-native';
import { Card, Title} from 'react-native-paper';
import CircularProgress, {CircularProgressBase} from 'react-native-circular-progress-indicator';
import styles from './HomePageStyles';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Summary = () => {

  return (
    <View style={styles.container}>
        <Card style={styles.card}>
            <Card.Title titleStyle={{ fontWeight: "bold", fontSize: 25 }} title="Summary" fontWeight="400"/>
                <Card.Content style={styles.calroies}>
                    {/* Total calories they are eating */}
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Eaten</Title>
                        <Text style={{textAlign:'center'}}>1500 cal</Text>
                    </View>
                    {/* Reamaining Calories */}
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Reamaining</Title>
                    <CircularProgress
                        value={173}
                        radius={80}
                        inActiveStrokeOpacity={0.5}
                        activeStrokeWidth={15}
                        inActiveStrokeWidth={20}
                        progressValueStyle={{ fontWeight: '100', color: 'black' }}
                        activeStrokeSecondaryColor="yellow"
                        inActiveStrokeColor="black"
                        valueSuffix={'cals'}
                        duration={5000}
                        dashedStrokeConfig={{
                            count: 50,
                            width: 4,
                        }}
                        />
                    </View>
                    {/* Spent */}
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Spent</Title>
                        <Text style={{textAlign:'center'}}>250 cal</Text>
                    </View>

                </Card.Content>   

                <View style={styles.barContainer}>
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Protein</Title>
                        <CircularProgress
                                value={60}
                                radius={40}
                                inActiveStrokeColor={'#2ecc71'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'black'}
                                valueSuffix={'%'}
                        />
                    </View>
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Carb</Title>
                        <CircularProgress
                                value={80}
                                radius={40}
                                activeStrokeColor={'#18dcff'}
                                inActiveStrokeColor={'#18dcff'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'black'}
                                valueSuffix={'%'}
                        />
                    </View>
                    <View style={styles.smallBarContainer}>
                    <Title style={styles.titleContainer}>Fat</Title>
                        <CircularProgress
                                value={70}
                                radius={40}
                                inActiveStrokeColor={'#e84118'}
                                activeStrokeColor={'#e84118'}
                                inActiveStrokeOpacity={0.2}
                                progressValueColor={'black'}
                                valueSuffix={'%'}
                        />
                    </View>
                </View>
        </Card>

      </View>

  )
}

export default Summary
