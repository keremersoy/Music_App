import React from 'react';
import { View, StyleSheet, Image, Text, } from 'react-native';
import styles from "./SongCard.style"

const MusicCard = props => {
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: props.song.imageUrl }} />
            <View style={styles.inner_container} >
                <Text style={styles.title} >{props.song.title}</Text>
                <View style={styles.content_container}>
                    <View style={styles.info_container} >
                        <Text style={styles.artist} >{props.song.artist}</Text>
                        <Text style={styles.year} >{props.song.year}</Text>
                    </View>

                    {props.song.isSoldOut && (
                        <View style={styles.sooldout_container}>
                            <Text style={styles.sooldout_title}>TÜKENDİ</Text>
                        </View>)
                    }
                </View>
                        <Text style={styles.album}>{props.song.album}</Text>
            </View>
        </View>
    );
}

export default MusicCard;
