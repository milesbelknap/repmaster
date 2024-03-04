import React, { useCallback, useEffect, useState, useContext } from 'react';
import { ScrollView, StyleSheet, Platform, SafeAreaView, StatusBar } from 'react-native';
import { Card, Text, View,  } from 'react-native-ui-lib';
import { observer } from 'mobx-react';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { NavioScreen } from 'rn-navio';
import _ from 'lodash';
import { SubScreenWrapper } from '@app/components/SubScreenWrapper';
import { navio } from '@app/navio';

export const RepCounter: NavioScreen = observer((props) => {

    const isFocused = useIsFocused();


    useEffect(() => {
        if (isFocused) {
        }

    }, [isFocused]);

    return (
        <SubScreenWrapper title="Rep Counter" back={() => navio.stacks.pop(1)}>
            <View center style={[styles.container]} >
              <Text>rep</Text>
            </View>
        </SubScreenWrapper>
    );
});

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fdfdff'
    }
});
