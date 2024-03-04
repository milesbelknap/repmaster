import * as Font from 'expo-font';
import {IconComponent} from '../components/icon';
import { IService, PVoid } from '../utils/types';

export class OnStartService implements IService {
  private inited = false;

  init = async (): PVoid => {
    if (!this.inited) {
      this.incAppLaunches();

      await this.loadAssets();

      this.inited = true;
    }
  };

  private loadAssets = async () => {
    const fonts = [IconComponent.font];

    const fontAssets = fonts.map(font => Font.loadAsync(font));

    await Promise.all([...fontAssets]);
  };

  private incAppLaunches() {

  }
}
