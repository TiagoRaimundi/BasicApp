import React from "react";
import { View, Image, Text } from "react-native";
import {styles} from './styles'

const Splash = () => {
    return(
        <View>
            <Image resizeMode='contain' style={styles.image} source={require('../../../assets/splash_image.png')} />
            <Text>Welcome</Text>
        </View>
    );
}

export default Splash;
