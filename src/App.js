import React, {useEffect, useState} from "react";
import RX from "reactxp";

let rotateValue = new RX.Animated.Value(0);

const _styles = {
        main: RX.Styles.createViewStyle({
            flex: 1,
        }),
        box: RX.Styles.createAnimatedViewStyle({
            flex: 1,
            width: 50,
            height: 50,
            backgroundColor : 'red',
            transform: [{rotate: RX.Animated.interpolate(rotateValue, [0, 1], ['0deg', '90deg'])}]
        }),

        button: RX.Styles.createButtonStyle({
            backgroundColor: 'lightgray',
            padding: 20,
            minWidth: 400,
            minHeight: 100,
        })
    }
;


const App = props => {
    const [rotate, setRotate] = useState(false);

    useEffect(() => {
        console.log('rotate', rotate);
        RX.Animated.timing(rotateValue, {
            toValue: rotate ? 1 : 0,
            duration: 2000,
            useNativeDriver: true
        }).start();
    }, [rotate]);
    return (
        <RX.View style={[_styles.main]}>

            <RX.Button style={_styles.button} onPress={() => {
                setRotate(!rotate)
            }}>
                <RX.Animated.View style={_styles.box}>
                    <RX.Text>CLICK ME</RX.Text>
                </RX.Animated.View>
            </RX.Button>
        </RX.View>
    );
};

export default App;

