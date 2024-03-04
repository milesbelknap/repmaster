import React, { useCallback, useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Button, Card, Colors, Text, View, } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NavioScreen } from 'rn-navio';
import _ from 'lodash';
import { navio } from '@app/navio';

export const Setting: NavioScreen = observer((props) => {
    const isFocused = useIsFocused();
    useEffect(() => {
        if (isFocused) {
        }

    }, [isFocused]);

    return (
        <SafeAreaView style={{
            height: '100%', paddingTop: Platform.OS == "android" ? (StatusBar.currentHeight + 10) : 5,
        }} >
            <View padding-20 center style={[styles.container]} >
                <Button style={{ width: '100%', height: 50 }}
                    onPress={() => { navio.stacks.push('RepCounterStack'); }}
                    borderRadius={5}
                    size={Button.sizes.large} backgroundColor={Colors.primary} >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Setting</Text>
                </Button>
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