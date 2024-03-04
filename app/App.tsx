import 'expo-dev-client';
import React, { useCallback, useEffect, useState, useContext, useRef } from 'react';
import { LogBox } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import 'expo-dev-menu';
import {
    configureDesignSystem,
} from './src/utils/designSystem';
import { initServices } from './src/services';
import * as Font from 'expo-font';
LogBox.ignoreAllLogs()
console.ignoredYellowBox = ["Warning: Each", "Warning: Failed"];
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { StatusBar } from 'expo-status-bar';
import { AppRoot } from '@app/navio';
import { getNavigationTheme } from '@app/utils/designSystem';

export default (): JSX.Element => {

    const [ready, setReady] = useState(false);

    useEffect(() => {
        loadFonts();
    }, []);

    const loadFonts = async () => {
        await Font.loadAsync({
            SFProTextMedium: require('./assets/fonts/SF-Pro-Text-Medium.otf'),
            SFProTextBold: require('./assets/fonts/SF-Pro-Text-Bold.otf'),
            SFProTextRegular: require('./assets/fonts/SF-Pro-Text-Regular.otf'),
            SFProTextSemibold: require('./assets/fonts/SF-Pro-Text-Semibold.otf'),
            SFProDisplayHeavy: require('./assets/fonts/SF-Pro-Display-Heavy.ttf'),
            SFProDisplaySemibold: require('./assets/fonts/SF-Pro-Display-Semibold.ttf'),
        });
    };

    const start = useCallback(async () => {
        await SplashScreen.preventAutoHideAsync();

        configureDesignSystem();
        await initServices();
        setReady(true);
        await SplashScreen.hideAsync();
    }, []);


    useEffect(() => {
        start();
    }, [start]);

    if (!ready) return <></>;
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <BottomSheetModalProvider>
                <StatusBar style="dark" />
                <AppRoot
                    navigationContainerProps={{ theme: getNavigationTheme() }}
                    root={'AppTabs'} />
            </BottomSheetModalProvider>
        </GestureHandlerRootView>
    );
};
