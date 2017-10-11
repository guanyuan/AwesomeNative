import { StackNavigator } from 'react-navigation';

import { TabScreen } from './screen/TabScreen';
import ProfileScreen from '../stack/ProfileScreen';

export const TabInStackNavigatorApp = StackNavigator({
  Main: {
    screen: TabScreen,
    navigationOptions: {
        title: 'My Chats',
      },
    },
  Profile: {screen: ProfileScreen},
});
