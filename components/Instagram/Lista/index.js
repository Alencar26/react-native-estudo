import React, { useState } from 'react';
import { StyleSheet,  Text,  View, Image, TouchableOpacity } from 'react-native';

export const Lista = ({ data }) => {

    const [dados, setDados] = useState(data)

    const like = () => {
        
        if(dados.likeada === true) {
            setDados({
                ...dados,
                likeada: false,
                likers: dados.likers - 1
            })
        } else {
            setDados({
                ...dados,
                likeada: true,
                likers: dados.likers + 1
            })
        }
    }

    const carregaIcone = (likeada) => {

        if(likeada === false) {
            return require('../../../assets/img/like.png')
        } else {
            return require('../../../assets/img/likeada.png')
        }
    }

    return (
        <View style={styles.areaFeed}>
            
            <View style={styles.viewPerfil}>
                <Image 
                    source={{uri: dados.imgperfil}}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}> { dados.nome } </Text>
            </View>

            <Image
                resizeMode="cover"
                source={{uri: dados.imgPublicacao}}
                style={styles.fotoPublicacao}
            />

            <View style={styles.areaBtn}>
                <TouchableOpacity onPress={like}>
                    <Image 
                        source={carregaIcone(dados.likeada)}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnSend}>
                    <Image 
                        source={require('../../../assets/img/send.png')}
                        style={styles.iconeLike}
                    />
                </TouchableOpacity>
            </View>

            { (dados.likers) > 0 ? 
                <Text style={styles.likes}>
                    { dados.likers } { dados.likers > 1 ? 'curtidas' : 'curtida' }
                </Text>
                : 
                <></>
            }

            <View style={styles.viewRodape}>
                <Text style={styles.nomeRodape}>
                    {dados.nome}
                </Text>

                <Text style={styles.descRodape}>
                    {dados.descricao}
                </Text>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: 'left',
        color: '#000',
    },
    fotoPerfil: {
        width: 50,
        height: 50,
        borderRadius: 25
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: 'center',
  
    },
    viewPerfil: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        padding: 8,
    },
    areaBtn: {
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike: {
        width: 33,
        height: 33,
    },
    btnSend: {
        paddingLeft: 5 
    },
    viewRodape: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    descRodape: {
        paddingLeft: 5,
        fontSize: 15,
        color: '#000',
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        padding: 5,
    },
    likes: {
        fontWeight: 'bold',
        marginLeft: 5,

    },
});
