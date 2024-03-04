import { string } from "yup";

// `stores` layer
interface IStore {
  hydrate?: () => PVoid;
}

type StoreDefaultKeys = 'set' | 'setMany' | 'hydrate';
type StoreKeysOf<S> = keyof Omit<S, StoreDefaultKeys>;

// `services` layer
interface IService {
  init: () => PVoid;
}

// System
type PVoid = Promise<void>;
type AnyObj = Record<string, unknown>;
type PureFunc = () => void;
type PureFuncAsync = () => PVoid;
type PureFuncArg<T> = (value?: T) => void;

// Design system
type ThemeColors = {
  textColor: string;
  bgColor: string;
  bg2Color: string;
  bg3Color:string;
  borderColor: string;
  textGrey2: string;
  textBlack1: string;
  textGrey: string;
  textDarkColor: string;  
  searchBack: string;
  searchIcon: string;
  headerText: string;
  cardTextGrey: string;
  textGrey3: string;
  cardHeaderDate: string;
  startColorGrey: string;
  notificationBlack: string;
  notificationGreyText: string;
  textBorder: string;
  progressColor: string;
  nextbtnBG: string;
  cardTextGreyHome: string;
  formBG: string;
  imageSelectBG: string;
};
