import React, { useState } from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator, TransitionPresets, TransitionSpecs, HeaderStyleInterpolators } from '@react-navigation/stack';
import Home from './appcode/presentation/home/Home';
import { navigationRef } from './appcode/utils/navigation/NavigationService';
import FoodListContainer from './appcode/presentation/FoodList/FoodListContainer';

const Stack = createStackNavigator();

const appTheme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        background: 'white'
    },
};

const rightToLeft = {
    gestureDirection: 'horizontal',
    transitionSpec: {
        open: TransitionSpecs.TransitionIOSSpec,
        close: TransitionSpecs.TransitionIOSSpec,
    },
    headerStyleInterpolator: HeaderStyleInterpolators.forFade,
    cardStyleInterpolator: ({ current, next, layouts }) => {
        return {
            cardStyle: {
                transform: [
                    {
                        translateX: current.progress.interpolate({
                            inputRange: [0, 1],
                            outputRange: [layouts.screen.width, 0],
                        }),
                    },
                ],
            },
        };
    },
}

const AppNavigator = (props) => {
    return (
        <NavigationContainer ref={navigationRef} theme={appTheme}>
            <Stack.Navigator initialRouteName="home" screenOptions={{ headerShown: false }}>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="foodlist" component={FoodListContainer} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator;
