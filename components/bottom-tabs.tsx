import {
  createNativeBottomTabNavigator,
  // BottomSheetNavigationOptions,
} from "react-native-bottom-tabs/react-navigation";

import { withLayoutContext } from "expo-router";

const { Navigator } = createNativeBottomTabNavigator();

export const Tabs = withLayoutContext<any, typeof Navigator, any, any>(
  Navigator
);
