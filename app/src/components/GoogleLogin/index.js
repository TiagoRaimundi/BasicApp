import React, { useEffect, useState } from "react";
import { Image, TouchableOpacity } from "react-native";
import { GoogleSignin, statusCodes } from "@react-native-google-signin/google-signin";
import { styles } from "./styles";

const GoogleLogin = () => {
    const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

    useEffect(() => {
        // Verificar se o usuário está logado ao inicializar o componente
        const checkSignInStatus = async () => {
            const isSignedIn = await GoogleSignin.isSignedIn();
            console.log("Usuário está logado?", isSignedIn);
            setIsUserLoggedIn(isSignedIn);
        };

        checkSignInStatus();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const userInfo = await GoogleSignin.signIn();
            console.log('userInfo :>> ', userInfo);
            setIsUserLoggedIn(true);  // Atualizar o status de login após o login bem-sucedido
        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // usuário cancelou o fluxo de login
            } else if (error.code === statusCodes.IN_PROGRESS) {
                // operação (por exemplo, login) já está em andamento
            } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
                // serviços de jogo não disponíveis ou desatualizados
            } else {
                // algum outro erro ocorreu
            }
            setIsUserLoggedIn(false); // Atualizar o status de login após uma tentativa de login falha
        }
    };

    return (
        <TouchableOpacity style={styles.container} onPress={handleGoogleLogin} activeOpacity={0.6}>
            <Image style={styles.image} source={require('../../assets/Gmail.png')} />
        </TouchableOpacity>
    );
};

export default React.memo(GoogleLogin);
