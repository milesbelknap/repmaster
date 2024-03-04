import React, { useCallback, useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Card, Text, View,  } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NavioScreen } from 'rn-navio';
import _ from 'lodash';

export const More: NavioScreen = observer((props) => {

    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
        }

    }, [isFocused]);

    return (
        <SafeAreaView style={{
            height: '100%', paddingTop: Platform.OS == "android" ? (StatusBar.currentHeight + 10) : 5,
        }} >
            <View center style={[styles.container]} >
              <Text>rep</Text>
            </View>
        </SafeAreaView>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdff'
    }
});
