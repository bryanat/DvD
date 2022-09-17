import * as React from 'react'
import { StyleSheet, Pressable } from 'react-native'
import { Text, View, TextInput } from './Themed'
import { Picker } from '@react-native-picker/picker'
import axios from 'axios'

export default function AxiosButtonPut({uri, title}: {uri: string, title: string}) {
  const [axiosState, setAxiosState] = React.useState<String>("Put Axios (before)")
  const [nameState, setNameState] = React.useState<String>();
  const [ageState, setAgeState] = React.useState<Number>();
  const [weightState, setWeightState] = React.useState<Number>();
  const [heightState, setHeightState] = React.useState<Number>();
  const [sexState, setSexState] = React.useState<Boolean>();
  const [colorState, setColorState] = React.useState<Number>();

  function axiosPressFunction() {
    axios.put(uri, {
      name: nameState ?? null, //'Justin Timberlake'
      age: +ageState ?? null, //36
      weight: +weightState ?? null, //168
      height: +heightState ?? null, //73
      sex: sexState ?? null,
      color: colorState ?? null, //'#ff0000'
    })
      .then( function (response: any) {
        console.log(response.data)
        const returnedUser = response.data
        setAxiosState(response.data.log ?? "undefined")
      })
      .catch( function (error: any) {
        console.log(error)
      })
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputViewName}>
        <Text>Name: </Text>
        <TextInput
          style={styles.inputText}
          onChangeText={setNameState}
          value={nameState}
          cursorColor='#fff'
          />
      </View>
      <View style={styles.inputViewAge}>
        <Text>Age: </Text>
        <Picker
          selectedValue={ageState}
          onValueChange={(itemValue, itemIndex) => setAgeState(itemValue)}
          style={{color: '#ffffff'}}
          dropdownIconColor='#ffffff'
          mode='dropdown'
          >
          <Picker.Item label="13" value="13" />
          <Picker.Item label="14" value="14" />
          <Picker.Item label="15" value="15" />
          <Picker.Item label="16" value="16" />
          <Picker.Item label="17" value="17" />
          <Picker.Item label="18" value="18" />
          <Picker.Item label="19" value="19" />
          <Picker.Item label="20" value="20" />
          <Picker.Item label="21" value="21" />
          <Picker.Item label="22" value="22" />
          <Picker.Item label="23" value="23" />
          <Picker.Item label="24" value="24" />
          <Picker.Item label="25" value="25" />
          <Picker.Item label="26" value="26" />
          <Picker.Item label="27" value="27" />
          <Picker.Item label="28" value="28" />
          <Picker.Item label="29" value="29" />
          <Picker.Item label="30" value="30" />
          <Picker.Item label="31" value="31" />
          <Picker.Item label="32" value="32" />
          <Picker.Item label="33" value="33" />
          <Picker.Item label="34" value="34" />
          <Picker.Item label="35" value="35" />
          <Picker.Item label="36" value="36" />
          <Picker.Item label="37" value="37" />
          <Picker.Item label="38" value="38" />
          <Picker.Item label="39" value="39" />
          <Picker.Item label="40" value="40" />
          <Picker.Item label="41" value="41" />
          <Picker.Item label="42" value="42" />
          <Picker.Item label="43" value="43" />
          <Picker.Item label="44" value="44" />
          <Picker.Item label="45" value="45" />
          <Picker.Item label="46" value="46" />
          <Picker.Item label="47" value="47" />
          <Picker.Item label="48" value="48" />
          <Picker.Item label="49" value="49" />
          <Picker.Item label="50" value="50" />
          <Picker.Item label="51" value="51" />
          <Picker.Item label="52" value="52" />
          <Picker.Item label="53" value="53" />
          <Picker.Item label="54" value="54" />
          <Picker.Item label="55" value="55" />
          <Picker.Item label="56" value="56" />
          <Picker.Item label="57" value="57" />
          <Picker.Item label="58" value="58" />
          <Picker.Item label="59" value="59" />
          <Picker.Item label="60" value="60" />
          <Picker.Item label="61" value="61" />
          <Picker.Item label="62" value="62" />
          <Picker.Item label="63" value="63" />
          <Picker.Item label="64" value="64" />
          <Picker.Item label="65" value="65" />
          <Picker.Item label="66" value="66" />
          <Picker.Item label="67" value="67" />
          <Picker.Item label="68" value="68" />
          <Picker.Item label="69" value="69" />
        </Picker>
      </View>
      <View style={styles.inputViewWeight}>
        <Text>Weight:</Text>
        <Picker
          selectedValue={weightState}
          onValueChange={(itemValue, itemIndex) => setWeightState(itemValue)}
          style={{color: '#ffffff'}}
          dropdownIconColor='#ffffff'
          mode='dropdown'
          >
          <Picker.Item label="100" value="100" />
          <Picker.Item label="105" value="105" />
          <Picker.Item label="110" value="110" />
          <Picker.Item label="115" value="115" />
          <Picker.Item label="120" value="120" />
          <Picker.Item label="125" value="125" />
          <Picker.Item label="130" value="130" />
          <Picker.Item label="135" value="135" />
          <Picker.Item label="140" value="140" />
          <Picker.Item label="145" value="145" />
          <Picker.Item label="150" value="150" />
          <Picker.Item label="155" value="155" />
          <Picker.Item label="160" value="160" />
          <Picker.Item label="165" value="165" />
          <Picker.Item label="170" value="170" />
          <Picker.Item label="175" value="175" />
          <Picker.Item label="180" value="180" />
          <Picker.Item label="185" value="185" />
          <Picker.Item label="190" value="190" />
          <Picker.Item label="195" value="195" />
          <Picker.Item label="200" value="200" />
          <Picker.Item label="205" value="205" />
          <Picker.Item label="210" value="210" />
          <Picker.Item label="215" value="215" />
          <Picker.Item label="220" value="220" />
          <Picker.Item label="225" value="225" />
          <Picker.Item label="230" value="230" />
          <Picker.Item label="235" value="235" />
          <Picker.Item label="240" value="240" />
          <Picker.Item label="245" value="245" />
          <Picker.Item label="250" value="250" />
          <Picker.Item label="255" value="255" />
          <Picker.Item label="260" value="260" />
          <Picker.Item label="265" value="265" />
          <Picker.Item label="270" value="270" />
          <Picker.Item label="275" value="275" />
          <Picker.Item label="280" value="280" />
          <Picker.Item label="285" value="285" />
          <Picker.Item label="290" value="290" />
          <Picker.Item label="295" value="295" />
        </Picker>
      </View>
      <View style={styles.inputViewHeight}>
        <Text>Height:</Text>
        <Picker
          selectedValue={heightState}
          onValueChange={(itemValue, itemIndex) => setHeightState(itemValue)}
          style={{color: '#ffffff'}}
          dropdownIconColor='#ffffff'
          mode='dropdown'
          >
          <Picker.Item label="4'8''" value="56" />
          <Picker.Item label="4'9''" value="57" />
          <Picker.Item label="4'10''" value="58" />
          <Picker.Item label="4'11''" value="59" />
          <Picker.Item label="5'0''" value="60" />
          <Picker.Item label="5'1''" value="61" />
          <Picker.Item label="5'2''" value="62" />
          <Picker.Item label="5'3''" value="63" />
          <Picker.Item label="5'4''" value="64" />
          <Picker.Item label="5'5''" value="65" />
          <Picker.Item label="5'6''" value="66" />
          <Picker.Item label="5'7''" value="67" />
          <Picker.Item label="5'8''" value="68" />
          <Picker.Item label="5'9''" value="69" />
          <Picker.Item label="5'10''" value="70" />
          <Picker.Item label="5'11''" value="71" />
          <Picker.Item label="6'0''" value="72" />
          <Picker.Item label="6'1''" value="73" />
          <Picker.Item label="6'2''" value="74" />
          <Picker.Item label="6'3''" value="75" />
          <Picker.Item label="6'4''" value="76" />
          <Picker.Item label="6'5''" value="77" />
          <Picker.Item label="6'6''" value="78" />
          <Picker.Item label="6'7''" value="79" />
          <Picker.Item label="6'8''" value="80" />
          <Picker.Item label="6'9''" value="81" />
        </Picker>
      </View>
      <View style={styles.inputViewSex}>
        <Text>Sex:</Text>
        <Picker
          selectedValue={sexState}
          onValueChange={(itemValue, itemIndex) => setSexState(itemValue)}
          style={{color: '#ffffff'}}
          dropdownIconColor='#ffffff'
          mode='dropdown'
          >
          <Picker.Item label="Female" value="0" />
          <Picker.Item label="Male" value="1" />
        </Picker>
      </View>
      <View style={styles.inputViewColor}>
        <Text>Theme Color:</Text>
        <Picker
          selectedValue={sexState}
          onValueChange={(itemValue, itemIndex) => setSexState(itemValue)}
          style={{color: '#ffffff'}}
          dropdownIconColor='#ffffff'
          mode='dropdown'
          >
          <Picker.Item label="💙" value="#0000ff" />
          <Picker.Item label="❤️" value="#ff0000" />
          <Picker.Item label="🧡" value="#ff8000" />
          <Picker.Item label="💛" value="#ffff00" />
          <Picker.Item label="💚" value="#00ff00" />
          <Picker.Item label="💎" value="#00ffff" />
          <Picker.Item label="💜" value="#a500ff" />
          <Picker.Item label="🎀" value="#ff00ff" />
          <Picker.Item label="🤍" value="#ffffff" />
          <Picker.Item label="🖤" value="#000000" />
        </Picker>
      </View>
      <Pressable onPress={axiosPressFunction} style={styles.submitButton}><Text>{title}</Text></Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  inputText: {
    borderWidth: 1,
    borderColor: '#ffffff',
    height: 32,
    paddingLeft: 10,
    paddingRight: 80,
  },
  inputViewName: {
  },
  inputViewAge: {
  },
  inputViewWeight: {
  },
  inputViewHeight: {
  },
  inputViewSex: {
  },
  inputViewColor: {
  },
  pickerAge: {
    backgroundColor: '#ffffff',
    color: '#ff0000',
  },
  submitButton: {
    backgroundColor: '#2f95dc',
    padding: 10,
  },
})
