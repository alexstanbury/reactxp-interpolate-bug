import React, {useEffect, useState} from "react";
import RX from "reactxp";
import Sidebar from "./modules/shell/sidebar";
import {sidebarToggle} from "./modules/shell";
import {connect} from 'react-redux';
import lottie from 'lottie-web';
// import Lottie from 'react-lottie';
// import * as anim from 'anims/burger.json';


let transXValue = new RX.Animated.Value(-200);
let transXValueMain = new RX.Animated.Value(0);
console.log('transXValue', transXValue);


const onLayoutCalled = (e) => {
    console.log('layout', e);
};


const _styles = {
    main: RX.Styles.createViewStyle({
        flex: 1,
    }, false),


    content: RX.Styles.createViewStyle({
        position: 'absolute',
        top: 0,
        bottom: 0,
        flexGrow: 1,
        borderWidth: 5,
        borderColor: 'red',
        borderRadius: 10,
        borderStyle: 'solid',
        left: 0,
        right: 0,
        transform: [{
            translateX: transXValueMain
        }]
    }, false),

    test: RX.Styles.createViewStyle({
        width: 200,
        height: 200
    }, false),

    contentAux: RX.Styles.createAnimatedViewStyle({
        position: 'absolute',
        borderWidth: 5,
        borderColor: 'blue',
        borderRadius: 10,
        borderStyle: 'solid',
        top: 0,
        bottom: 0,
        left: 0,
        width: 200,
        backgroundColor: 'lightcoral',
        transform: [{
            translateX: transXValue
        }]
    }, false),

    button: RX.Styles.createButtonStyle({
        backgroundColor: 'lightgray',
        padding: 20,
        minWidth: 400,
        minHeight: 100,
    }),

    text: RX.Styles.createTextStyle({
        // flex: 1
    })
};

let dummy = [];
let anim;

for (let i = 0; i < 100; i++) {
    dummy.push({text: `Option ${i + 1}`});
}

const App = props => {
    // const [dimensions, setDimensions] = useState(RX.UserInterface.measureWindow());
    // let dynamicStyle = RX.Styles.createViewStyle({
    //     width: dimensions.width
    // }, false);
    // console.log('dynamicStyle', dynamicStyle);

    // const [show, setShow] = useState(false);

    // const defaultOptions = {
    //     loop: true,
    //     autoplay: true,
    //     animationData: anim,
    //     rendererSettings: {
    //         preserveAspectRatio: 'xMidYMid slice'
    //     }
    // };

    useEffect(() => {
        console.log('anim run', props.sidebarShow);
        RX.Animated.timing(transXValue, {
            toValue: props.sidebarShow ? 0 : -200,
            duration: 250,
            useNativeDriver: true, // <-- Add this
        }).start();
        RX.Animated.timing(transXValueMain, {
            toValue: props.sidebarShow ? 200 : 0,
            duration: 250,
            useNativeDriver: true, // <-- Add this
        }).start();
        props.sidebarShow ? anim && anim.play() : anim && anim.setDirection(-1) && anim.goToAndPlay(1);
    }, [props.sidebarShow]);

    return (
        <RX.View style={[_styles.main]} onLayout={(dims) => {
            console.log('dims', dims);
            // setDimensions(dims)
        }}>

            {/*<Sidebar/>*/}
            <RX.Animated.View style={[_styles.content]}>
                <RX.Button style={_styles.button} onPress={props.sidebarToggle}>
                    <RX.View id={'sid'} style={_styles.test}></RX.View>
                </RX.Button>
                <RX.ScrollView style={_styles.test}>
                    {dummy.map((item, index) => <RX.View style={_styles.listItem} key={index}><RX.Text>{item.text}</RX.Text></RX.View>)}
                </RX.ScrollView>
            </RX.Animated.View>
            <RX.Animated.View style={[_styles.contentAux]}>
                <RX.ScrollView>
                    {dummy.map((item, index) => <RX.View style={_styles.listItem} key={index}><RX.Text>{item.text}</RX.Text></RX.View>)}
                </RX.ScrollView>
            </RX.Animated.View>
        </RX.View>
    )
        ;
};

setTimeout(() => {

     anim = lottie.loadAnimation({
        container: document.querySelector('#sid'), // the dom element that will contain the animation
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: './anims/burger.json' // the path to the animation json
    });
    console.log('anim', anim);
}, 0);

const mapStateToProps = (state) => {
    return {sidebarShow: state.shell.sidebar.show}
};

const mapDispatchToProps = {
    sidebarToggle
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

