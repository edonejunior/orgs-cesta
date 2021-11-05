import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Texto from "../../../components/Texto";
import Botao from "../../../components/Botao";

export default function Detalhes({nome, nomeFazenda, logoFazenda, descricao, preco, botao }) {
    return <>
            <Texto style={estilos.nome}>{nome}</Texto>
                <View style={estilos.fazenda}>
                    <Image style={estilos.imagemFazenda} source={logoFazenda} />
                    <Texto style={estilos.nomeFazenda}> {nomeFazenda} </Texto>
                </View>
                <Texto style={estilos.descricao}> {descricao} </Texto>
            <Texto style={estilos.preco}> {preco} </Texto>
            <Botao style={estilos.botao} onPress={() => {}} >{botao}</Botao>
    </>
}

const estilos = StyleSheet.create({
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
    },
    botao: {
        marginTop: 16,
      },

})