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
import { TabNavigatorApp } from './apps/navigation/tab/TabNavigatorApp'
import { TabInStackNavigatorApp } from './apps/navigation/tab/TabInStackNavigatorApp'
import { NavigationInComponentApp } from './apps/navigation/tab/NavigationInComponentApp'
import FadeInViewApp from './apps/animate/FadeInViewApp'
import PressApp from './apps/animate/PressApp'

//components example
import AccessibilityInfoExample from './apps/components/AccessibilityInfoExample'
import ActivityIndicatorExample from './apps/components/ActivityIndicatorExample'
import ButtonExample from './apps/components/ButtonExample'
import DatePickerIOSExample from './apps/components/DatePickerIOSExample'
import FlatListExample from './apps/components/FlatListExample'
import ImageExample from './apps/components/image/ImageExample'

AppRegistry.registerComponent('AwesomeNative', () => ImageExample);
