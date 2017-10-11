import { TabNavigator } from 'react-navigation';
import RecentChatsScreen from './RecentChatsScreen';
import AllContactsScreen from './AllContactsScreen';

export const TabScreen = TabNavigator({
  Recent: { screen: RecentChatsScreen },
  All: { screen: AllContactsScreen },
});
