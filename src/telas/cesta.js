import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Dimensions, Text, View } from 'react-native';

import Texto from './componentes/texto';
import topo from '../../assets/topo.png'
import logo from '../../assets/logo.png'


export default function Cesta() {
    return <>
        <Image source={topo} style={estilos.topo} />
        <Texto style={estilos.titulo}>Detalhe da cesta</Texto>

        <View style={estilos.cesta}>
            <Texto style={estilos.nome}>Cesta de Verduras</Texto>
            <View style={estilos.fazenda}>
                <Image source={logo} style={estilos.imagemFazenda}/>
                <Texto style={estilos.nomeFazenda}>Jenny Jack Farm</Texto>
            </View>
            <Texto style={estilos.descricao}>Uma cesta com produtos selecionados
                cuidadosamente da fazenda direto para sua cozinha</Texto>
            <Texto style={estilos.preco}>R$ 40,00</Texto>
        </View>
    </>

}
const width = Dimensions.get('screen').width;
const estilos = StyleSheet.create({
    topo: {
        with: "100%",
        height: 578 / 768 * width,
        alignSelf:"center",
        resizeMode:"stretch"
        
    },
    titulo: {
        width: "100%",
        position: "absolute",
        textAlign: "center",
        fontSize: 16,
        lineHeight: 26,
        color: "white",
        fontWeight: "bold",
        padding: 26
    },
    cesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontWeight:"bold"
    },
    fazenda:{
        flexDirection:"row",
        paddingVertical:12
    },
    imagemFazenda:{
        width:32,
        height:32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft:12,
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    }
});