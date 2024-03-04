import { Navio } from 'rn-navio';
import { Image, View } from 'react-native';
import { screenDefaultOptions, tabDefaultOptions } from './utils/designSystem';
import { RepCounter } from './screens/RepCounter';
import { Main } from './screens/Main';
import { More } from './screens/More';
import { Setting } from './screens/Settings';
// NAVIO
export const navio = Navio.build({
  screens: {
    Main,
    More,
    Setting: {
      component: RepCounter,
      options: () => ({
        headerShown: false,
      }),
    },
    RepCounter: {
      component: RepCounter,
      options: () => ({
        headerShown: false,
      }),
    },
  },
  stacks: {
    MainStack: ['Main', 'Setting'],
    MoreStack: ['More'],
    RepCounterStack: ['RepCounter'],
  },
  tabs: {
    AppTabs: {
      content: {
        MainTab: {
          stack: 'MainStack',
          options: {
            title: 'Home',
            tabBarIcon: ({ focused }) => {
              const image = focused
                ? require('../assets/images/home-filled.png')
                : require('../assets/images/home.png');
              return <Image source={image} style={{ height: 28, width: 28 }} />;
            },
          },
        },
        ScheduleTab: {
          stack: 'MoreStack',
          options: () => ({
            title: 'Rep',
            tabBarIcon: ({ focused }) => {
              const image = focused
                ? require('../assets/images/calendar-filled.png')
                : require('../assets/images/calendar.png');
              return <Image source={image} style={{ height: 28, width: 28 }} />;
            },
          }),
        },
      },
    },
  },
  modals: {
  },
  root: 'AuthFlow',
  defaultOptions: {
    stacks: {
      screen: screenDefaultOptions,
    },
    tabs: {
      screen: tabDefaultOptions,
    },
  },
});

export const getNavio = () => navio;
export const AppRoot = navio.App;
