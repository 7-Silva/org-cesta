import { StyleSheet, View } from 'react-native';
import Detalhes from './componentes/detalhes';

import Topo from './componentes/topo';


export default function Cesta({ topo, detalhes}) {
    return <>
        <Topo {...topo}/>
        <View style={estilos.marginCesta}>
         <Detalhes {...detalhes}/>
        </View>
    </>

}
const estilos = StyleSheet.create({
    marginCesta: {
        paddingVertical: 8,
        paddingHorizontal: 16
    },
});