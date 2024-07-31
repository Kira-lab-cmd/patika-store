import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
    container: {
        backgroundColor: '#F0FFFF',
        borderRadius: 10,
        padding: 10,
        marginBottom: 5,
        width: 190,
        height: 320,
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
        marginLeft: 15,
        fontWeight: "bold",
        fontSize: 14,
        padding: 5,
    },
    soldout_container: {
        alignItems: "flex-end",
        justifyContent: "bottom",
    },
    title: {
        marginTop: 5,
        fontWeight: "bold",
        fontSize: 18
    },
    price: {
        color: "#A9A9A9",
        fontWeight: "bold",
        fontSize: 16
    },
    price_soldout: {
        marginTop: 7,
        flexDirection: 'row',

    }

})
