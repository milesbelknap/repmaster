import {DarkTheme, DefaultTheme, Theme} from '@react-navigation/native';
import {NativeStackNavigationOptions} from '@react-navigation/native-stack';
import {BottomTabNavigationOptions} from '@react-navigation/bottom-tabs';
import {StatusBarStyle} from 'expo-status-bar';
import {Appearance as RNAppearance, Platform} from 'react-native';
import {Colors, Typography} from 'react-native-ui-lib';
import {ThemeManager} from 'react-native-ui-lib';

import {Icon} from '../components/icon';
import {Appearance} from './types/enums';
import {PVoid, ThemeColors} from './types';

ThemeManager.setComponentTheme('Text', {
    d15: true
});
// =============
// | RN UI Lib |
// =============

const colors = {
  primary: '#2F6ECA', // blue
  secondary: '#3B7197', // green
  accent: '#fed330', // yellow
  slider: '#1F2433',
  placeholder: '#F09A09',
  searchBack: '#F2F2F2',
  dotColor: '#D0D0D0',
  inactiveDotColor: Colors.rgba(208, 208, 208, 0.48),
  boxBorderColor: '#D4D4D4',
  boxBorderColor1: '#DDDDDD',
  _black: Colors.rgba(20, 20, 20, 1),
  _black2: Colors.rgba(50, 50, 50, 1),
  _black3: '#636366',
  _black4:'#575A5D',
  _white: Colors.rgba(255, 255, 255, 1),
  _white2: Colors.rgba(230, 230, 230, 1),
  grey: '#717171',
  geryLine: '#DDDDDD',
  original_black: '#111111',
  original_white: '#FFFFFF',
  activeLineGrey: '#B8BEC9',
  devider_white: '#DFDFDF',
  devider_red: '#F39090',
  devider_red_dark: '#F44336',
  boxShadow: Colors.rgba(0, 0, 0, 0.25),
  lightRed: '#E3CFD1',
  greyStar: Colors.rgba(60, 60, 67, 0.6),
  textBoxBorder: Colors.rgba(60, 60, 67, 0.3),
  searchGrey: '#7A7A7A',
  locationFill: '#383838',
  green: '#00814F',
  searchIconBlack: '#2C2C2C',
  cardBorder: '#DCDCDC',
  blackDark: '#2C2C2E',
  redDark: '#502022',
  notificationText: '#222222',
  notificationGrey: '#727272',
  progressBG: '#D9D9D9',
  greenProgress: '#5FAB89',
  progressText: '#646669',
  btnBackground: '#F5C343',
  btnBackground2: '#F2F2F7',
  homeCardDescriptoion: '#141A21',
  backGroundHome: '#EAF5FD',
  greenDone: '#34C759',
  formBGColor: Colors.rgba(244, 246, 246, 1),
  formBorderColor: Colors.rgba(197, 197, 199, 1),
  formCardTextFrey: '#646464',
  formBtnBG: 'red',
  cardSadowColor: '#171717',
  modalBG: Colors.rgba(115, 127, 234, 0.24),
  white2:'#F8F8F8',
  white3: '#F4F4F4',
  white4: '#F1F1F1',
  btnBGColor: '#F29727',
  formPlaceHolder: Colors.rgba(60, 60, 67, 0.33)
};

const themes: Record<Appearance, ThemeColors> = {
  system: {} as any,
  light: {
    textColor: "#252324",
    bgColor: colors._white,
    bg2Color: colors._white2,
    bg3Color:colors.white2,
    borderColor: Colors.getColorTint(colors._white, 20),
    textGrey: colors.grey,
    textDarkColor: colors.original_black,
    textGrey2: colors.searchGrey,
    textGrey3: colors.grey,
    textBlack1: colors.locationFill,
    searchBack: colors.searchBack,
    searchIcon: colors.searchIconBlack,
    headerText: colors.primary,
    cardTextGrey: colors._black4,
    cardHeaderDate: colors.blackDark,
    startColorGrey: colors.greyStar,
    notificationBlack: colors.notificationText,
    notificationGreyText: colors.notificationGrey,
    textBorder: colors.textBoxBorder,
    progressColor: colors.progressText,
    nextbtnBG: colors.btnBackground2,
    cardTextGreyHome: colors.homeCardDescriptoion,
    formBG: colors.formBGColor,
    imageSelectBG: colors.white3
  },
  dark: {
     textColor: "#252324",
    bgColor: colors._white,
    bg2Color: colors._white2,
    bg3Color:colors.white2,
    borderColor: Colors.getColorTint(colors._white, 20),
    textGrey: colors.grey,
    textDarkColor: colors.original_black,
    textGrey2: colors.searchGrey,
    textGrey3: colors.grey,
    textBlack1: colors.locationFill,
    searchBack: colors.searchBack,
    searchIcon: colors.searchIconBlack,
    headerText: colors.primary,
    cardTextGrey: colors._black4,
    cardHeaderDate: colors.blackDark,
    startColorGrey: colors.greyStar,
    notificationBlack: colors.notificationText,
    notificationGreyText: colors.notificationGrey,
    textBorder: colors.textBoxBorder,
    progressColor: colors.progressText,
    nextbtnBG: colors.btnBackground2,
    cardTextGreyHome: colors.homeCardDescriptoion,
    formBG: colors.formBGColor,
    imageSelectBG: colors.white3
    // textColor: colors._white,
    // bgColor: colors._black,
    // bg2Color: colors._black2,
    // borderColor: Colors.getColorTint(colors._black, 20),
    // textGrey: colors.grey,
    // bg3Color: colors.white2,
    // textDarkColor: colors.original_white,
    // textGrey2: colors.original_white,
    // textGrey3: colors.original_white,
    // textBlack1: colors.original_white,
    // searchBack: colors._black2,
    // searchIcon: colors.original_white,
    // headerText: colors.original_white,
    // cardTextGrey: colors.original_white,
    // cardHeaderDate: colors.original_white,
    // startColorGrey: colors.original_white,
    // notificationBlack: colors.original_white,
    // notificationGreyText: colors.notificationGrey,
    // textBorder: colors.original_white,
    // progressColor: colors.original_white,
    // nextbtnBG: colors._black2,
    // cardTextGreyHome: colors.original_white,
    // formBG: colors._black,
    // imageSelectBG: colors._black2
  },
};

// for more information - https://wix.github.io/react-native-ui-lib/foundation/style
export const configureDesignSystem = async (): PVoid => {

    Colors.loadSchemes({dark: {}, light: {}});

  Typography.loadTypographies({
    h1: {fontSize: 25, fontWeight: '800', lineHeight: 30},
    h2: {fontSize: 20, fontWeight: '600', lineHeight: 24},
    h3: {fontSize: 24, fontWeight: '600', lineHeight: 32},
    h4: {fontSize: 20, fontWeight: '600', lineHeight: 24},
    h5: {fontSize: 13, fontWeight: '600', lineHeight: 16},
    h6: {fontSize: 10, fontWeight: '400', lineHeight: 12},
    h7: {fontSize:17, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    h8: {fontSize:13},
    h9: {fontSize: 17, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextSemibold',},
    h10:{fontSize:15, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular',fontWeight: '400' },
    h11:{fontSize:22, fontWeight: '600', lineHeight: 28},
    h12:{fontSize:20},
    h28r: {fontSize: 30, fontWeight: '600', lineHeight: 34},
    section: {fontSize: 26, fontWeight: '600'},
    d15: {fontSize: 15, fontWeight: '400'},
    f15: {fontSize: 15, fontWeight: '400', lineHeight: 16},
    f15D: {fontSize: 15, fontWeight: '500', lineHeight: 16},
    f18: {fontSize: 18, fontWeight: '500', lineHeight: 18},
    f13: {fontSize: 13, fontWeight: '400', lineHeight: 16},
    f10: {fontSize: 10, fontWeight: '600', lineHeight: 12},
    f11: {fontSize: 11, fontWeight: '600', lineHeight: 13},
    f14: {fontSize: 14, fontWeight: '400', lineHeight: 17},
    f16: {fontSize: 16, fontWeight: '400', lineHeight: 16},
    f16l: {fontSize: 16, fontWeight: '300', lineHeight: 16},
    f14l: {fontSize: 14, fontWeight: '400', lineHeight: 14},

    f14MD: {fontSize: 14, fontWeight: '500', lineHeight: 17},
    f14D: {fontSize: 14, fontWeight: '600', lineHeight: 17},
    f24MD: {fontSize: 24, fontWeight: '500', lineHeight: 28},
    f12D: {fontSize: 12, fontWeight: '600', lineHeight: 16},
    f10D: {fontSize: 10, fontWeight: '400', lineHeight: 10},
    f12MD: {fontSize: 12, fontWeight: '400', lineHeight: 16, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextSemibold'},
    f16D: {fontSize: 16, fontWeight: Platform.OS === 'android' ? '600':'700', lineHeight: 16, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextSemibold'},
    f19D: {fontSize: 19, fontWeight: '700', lineHeight: 28},
    f20D: {fontSize:20, fontWeight: '600', lineHeight: 30, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextSemibold'},
    f16MD: {fontSize: 16, fontWeight: '400', lineHeight: 28, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    f16MD2: {fontSize: 16, fontWeight: '400', lineHeight: 24,fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    f20M: {fontSize: 20, fontWeight: '400', lineHeight: 26, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    f17MD: {fontSize: 17, fontWeight: '400', lineHeight: 22, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    f32MD: {fontSize: 32, fontWeight: '600', lineHeight: 35},
    f21MD: {fontSize: 21, fontWeight: '400', lineHeight: 27, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextRegular'},
    f14D2: {fontSize: 14, fontWeight: '700', lineHeight: 20, fontFamily:Platform.OS === 'android' ? 'Roboto' : 'SFProTextBold'},
    t14: {fontSize: 14},
    t15: {fontSize: 15},
    t16: {fontSize: 16},
    t17: {fontSize: 17},
    t18: {fontSize: 18},
    t20: {fontSize: 20},
    bold:{fontWeight:'500'}
  });
};

const setColorsScheme = (appearance: Appearance) => {
  if (appearance === 'system') Colors.setScheme('default');
  else Colors.setScheme(appearance);
};

// ==============
// | Navigation |
// ==============
export const getStatusBarStyle = (): StatusBarStyle => {

return 'auto';


};

export const getStatusBarBGColor = (): string => {
  const appearance = 'light';
  return themes['light'].bg2Color;
};

export const getNavigationTheme = (): Theme => {

  // for more information - https://reactnavigation.org/docs/themes
  const MyDefaultTheme: Theme = {
    dark: false,
    colors: {
      ...DefaultTheme.colors,
      primary: Colors.primary,
      background: Colors.bgColor,
      card: Colors.bgColor,
      text: Colors.textColor,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const MyDarkTheme: Theme = {
    dark: false,
    colors: {
      ...DarkTheme.colors,
      primary: Colors.primary,
      background: Colors.bgColor,
      card: Colors.bgColor,
      text: Colors.textColor,
      // border: Colors.grey30,
      // notification: Colors.primary,
    },
  };

  const appearance = 'light';
  switch (appearance) {
    case 'dark':
      return MyDarkTheme;
    case 'light':
      return MyDefaultTheme;
  }

};

export const getHeaderBlurEffect = (): 'regular' | 'light' | 'dark' => {

  return 'light';
};

// Default options
export const screenDefaultOptions = (): NativeStackNavigationOptions => ({
  headerShadowVisible: true,
  headerTintColor: Colors.black,
  headerBackTitleVisible: false,
  headerBackTitle: '',
  headerTitleStyle: {
    fontSize: 20, fontWeight: '500',
  },
  // this setup makes large title work on iOS
  ...Platform.select({
    ios: {
      headerLargeTitle: false,
      headerTransparent: false,
      headerBackTitleVisible: false,
      // if you'd like to have a solid color for a nav bar, then you should
      // set up `headerStyle: {backgroundColor: Colors.bg2Color}`
    },
  }),
});

export const tabDefaultOptions = (): BottomTabNavigationOptions => ({
  headerShown: false,
  tabBarActiveTintColor: Colors.primary,
  tabBarInactiveTintColor: Colors.grey30,
  tabBarStyle: {
    backgroundColor: Colors.bgColor,
    borderTopColor: Colors.grey50,
    borderTopWidth: 1,
    elevation: 0,
    
  },
  tabBarLabelStyle: {
    fontWeight: '400',
  },
});

export const getTabBarIcon =
  (tabName: string) =>
  ({focused, color, size}: {focused: boolean; color: string; size: number}) =>
    <Icon name={getTabIconName(tabName, focused)} size={size} color={color} />;

const getTabIconName = (tabName: string, focused: boolean): string => {
  if (tabName === 'MainTab') {
    return focused ? 'home' : 'home-outline';
  }
  if (tabName === 'PlaygroundTab') {
    return focused ? 'construct' : 'construct';
  }
  if (tabName === 'MoneyTab') {
    return focused ? 'wallet' : 'wallet';
  }
  if (tabName === 'SettingsTab') {
    return focused ? 'home' : 'home';
  }

  return 'list';
};
