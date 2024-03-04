import React, { Children } from 'react';
import { View, Text, Colors, TouchableOpacity, Button } from 'react-native-ui-lib';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Image } from 'expo-image';

export const SubScreenWrapper = (props) => {
    var black = require('../../assets/images/backicon3xios.png');
    var white = require('../../assets/images/backicon3xioswhite.png');
    return (
        <SafeAreaView style={{
            height: '100%',
            backgroundColor: props.backgroundColor ? props.backgroundColor : '#fff'
        }} >
            <View row paddingH-10 centerV
                style={{
                    justifyContent: 'space-between',
                    borderBottomWidth: props.showBorder ? .5 : 0,
                    borderBottomColor: Colors.geryLine,
                    height: 45,
                    backgroundColor: props.navBackgroundColor ? props.navBackgroundColor : '#fff',
                }}>
                {!props.hideBack && <TouchableOpacity onPress={props.back} style={{ width: 40, zIndex:999, position: 'absolute', marginLeft: 10, justifyContent: 'center', }}>
                    <Image
                        style={{ height: 19, width: 19 }}
                        source={props.white ? white : black}
                        contentFit="contain"
                        transition={10}
                    />
                    </TouchableOpacity>}
                <View center style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20, fontWeight: '500', textAlign: 'center' }} numberOfLines={1}>{props.title}</Text>
                </View>
                
            </View>
            {props.children}

        </SafeAreaView>
    );
};
