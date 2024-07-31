import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: 'gray',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        width: 190,
        borderRadius: 10,

    },
    image: {
        width: 160,
        height: 200,
        borderRadius: 10,
        marginLeft: 5
    },
    info_container: {
        flexDirection: 'column',
    },
    soldout_title: {
        color: "red",
        marginLeft: 25
    },
    soldout_container: {
        alignItems: "flex-end",
        justifyContent: "bottom",
    },
    title: {
        marginTop: 5,
    },
    price: {

    },
    price_soldout: {
        marginTop: 7,
        flexDirection: 'row',
    }

})
