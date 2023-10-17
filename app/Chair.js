import React, { useState } from "react"
import { Text } from "react-native"

export const Chair = () => {
    const [isBig, setIsBig] = useState(false)
    console.log('isBig:>>', isBig)
    const changeState = () => {
        setIsBig(currentState => !currentState)
    }

    return(
        <Text style={isBig ? {fontSize: 24} : {fontSize: 14}} onPress={changeState}>This is chair</Text>
    )
}

