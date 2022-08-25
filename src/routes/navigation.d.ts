import { AppScreens } from './app.routes';
import { AuthScreens } from './auth.routes';

declare global {
  namespace ReactNavigation {
    interface RootParamList extends AuthScreens, AppScreens {}
  }
}
