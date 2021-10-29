import React from 'react';
import {StyleSheet, Image, Dimensions, Text, View} from 'react-native';
import Texto from '../components/Texto';

import logo from '../../assets/logo.png';

import topo from '../../assets/topo.png';
const width = Dimensions.get('screen').width;

export default function Cesta() {
    return <>

        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}> Detalhe da cesta </Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image style={estilos.imagemFazenda} source={logo} />
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>

    </>
}

const estilos = StyleSheet.create({
    topo:{
        width: "100%",
        height: 578 / 768 * width,
    },
    titulo:{
        width: "100%",
        position:"absolute",
        textAlign:"center",
        fontSize: 16,
        lineHeight:26, 
        color: "white",
        fontWeight: "bold",
        padding: 16,
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16,
    },
    nomeFazenda:{
        fontSize:16,
        lineHeight: 26,
        marginLeft: 12,
        fontWeight: "bold",
    },
    imagemFazenda:{
        height: 32,
        width: 32,
        
    },
    fazenda:{
        flexDirection: "row",
        paddingVertical: 12,
    },
    nome:{
        color:"#464646",
        fontSize:26,
        lineHeight:42,
        fontWeight: "bold",
    },
    descricao:{
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26,
        fontFamily: "RobotoRegular",
    },
    preco:{
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight:42,
        marginTop: 8,
    }
})

 

