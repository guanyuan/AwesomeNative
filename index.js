import { AppRegistry } from 'react-native';
import Greeting from './apps/greeting/Greeting'
import BlinkApp from './apps/blink/BlinkApp'
import Styles from './apps/styles/LotsOfStyles'
import FlexDirectionBasics from './apps/flex/FlexDirectionBasics'
import JustifyContentBasics from './apps/flex/JustifyContentBasics'
import AlignItemsBasics from './apps/flex/AlignItemsBasics'
import PizzaTranslator from './apps/text-input/PizzaTranslator'
import IScrolledDownAndWhatHappenedNextShockedMe from './apps/view/IScrolledDownAndWhatHappenedNextShockedMe'
import FlatListBasics from './apps/view/FlatListBasics'
import SectionListBasics from './apps/view/SectionListBasics'
import { StackNavigatorApp } from './apps/navigation/stack/StackNavigatorApp'

AppRegistry.registerComponent('AwesomeNative', () => StackNavigatorApp);
