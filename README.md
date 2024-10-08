# Expo Router + Native bottom tabs

> This project requires a custom dev client and does not run in Expo Go.

This is an example of using [`react-native-bottom-tabs`](https://github.com/okwasniewski/react-native-bottom-tabs) with Expo Router to use Apple's built-in native bottom tabs component. The minimum iOS version had to be bumped to 14.0 (which will be the default in SDK 52).

First, create a custom layout adapter for the native bottom tabs:

```js
import {
  createNativeBottomTabNavigator,
  // BottomSheetNavigationOptions,
} from "react-native-bottom-tabs/react-navigation";

import { withLayoutContext } from "expo-router";

const { Navigator } = createNativeBottomTabNavigator();

export const Tabs = withLayoutContext<any, typeof Navigator, any, any>(
  Navigator
);
```

Then, use the `Tabs` component in your app:

```js
import { Tabs } from "@/components/bottom-tabs";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: () => ({ sfSymbol: "house" }),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: "Explore",
          tabBarIcon: () => ({ sfSymbol: "person" }),
        }}
      />
    </Tabs>
  );
}
```
