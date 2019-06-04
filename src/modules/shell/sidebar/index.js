import React from "react";
import RX from "reactxp";

let dummy = [];

for (let i = 0; i < 100; i++) {
    dummy.push({text: `Option ${i + 1}`});
}

const _styles = {
    sidebar: RX.Styles.createViewStyle({
        position: 'absolute',
        left: -100,
        top: 0,
        bottom: 0,
        width: 300,
        backgroundColor: 'lightblue',
        borderWidth: 2,
        borderColor: 'lightcoral',
        borderStyle: 'solid'
    }),

    test: {
        height: 299,
        backgroundColor: 'green',
        width: 300,
        borderWidth: 1,
        borderColor: 'grey',
        borderStyle: 'solid'
    },

    list: RX.Styles.createViewStyle({
        flex: 1,
    }),

    listItem: RX.Styles.createViewStyle({
        flex: 1,
        cursor: 'pointer'
    }),

    text: RX.Styles.createTextStyle({
        opacity: 0.3,
    })
};

const Sidebar = props => {
    return (
        <RX.ScrollView style={[_styles.sidebar, _styles.list]}>
                {dummy.map((item, index) => <RX.View style={_styles.listItem} key={index}><RX.Text>{item.text}</RX.Text></RX.View>)}
        </RX.ScrollView>
    )
};

export default Sidebar;

