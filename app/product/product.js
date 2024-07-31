import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './product.style'

const product = props => {
    return (

        <View style={styles.container}>
            <View style={styles.inner_container}>
                <View style={styles.image_container}>
                    <Image style={styles.image} source={{ uri: props.product.imgURL }} />
                </View>
                <View style={styles.info_container} >

                    <Text style={styles.title}>{props.product.title}</Text>
                    <View style={styles.price_soldout}>
                        <Text style={styles.price}>{props.product.price}</Text>

                        {props.product.inStock && (<View style={styles.soldout_container}>
                            <Text style={styles.soldout_title}>STOKTA YOK</Text>
                        </View>)}
                    </View>

                </View>
            </View>
        </View>

    )
}

export default product