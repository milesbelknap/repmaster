import React, { useCallback, useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Button, Card, Colors, Text, View, } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NavioScreen } from 'rn-navio';
import _ from 'lodash';
import { navio } from '@app/navio';
export const Main: NavioScreen = observer((props) => {
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
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Start</Text>
                </Button>
                <Button style={{ width: '100%', height: 50 }}
                    onPress={() => { navio.push('Setting'); }}
                    borderRadius={5}
                    size={Button.sizes.large} backgroundColor={Colors.primary} >
                    <Text style={{ color: '#fff', fontSize: 18, fontWeight: '500' }}>Start</Text>
                </Button>
                <View >
                    <Card height={160} onPress={() => { }} activeOpacity={1} activeScale={0.96}>
                        <Card.Section
                            bg-$backgroundDangerHeavy
                            padding-20
                            flex-3
                            content={[
                                { text: 'Special sale!', text70: true, $textDefaultLight: true },
                                { text: '10%', text60: true, $textDefaultLight: true }
                            ]}
                            contentStyle={{ alignItems: 'center' }}
                        />
                        <Card.Section
                            bg-$backgroundElevated
                            padding-20
                            flex
                            content={[{ text: 'All site', text70: true, $textDefault: true }]}
                            contentStyle={{ alignItems: 'center', margin: 0, padding: 0 }}
                        />
                    </Card>
                </View>
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
