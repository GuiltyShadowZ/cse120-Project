import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { COLORS, FONTS } from '../constants'
import { Contacts, Chats, More, MoreP, Feed, Network, MUser } from '../screens'
import { FontAwesome, Feather, Ionicons, Entypo, AntDesign } from '@expo/vector-icons'

const Tab = createBottomTabNavigator()

const BottomTabNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarShowLabel: false,
                headerShown: false,
                tabBarHideOnKeyboard: true,
                tabBarStyle: {
                    position: 'absolute',
                    backgroundColor: COLORS.blue,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    elevation: 0,
                    height: 60,
                },
            }}
        >
            <Tab.Screen
                name="Contacts"
                component={Contacts}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.white,
                                            }}
                                        >
                                            Home
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={12}
                                            color={COLORS.white}
                                        />
                                    </>
                                ) : (
                                    <Feather
                                        name="home"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Network"
                component={Network}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.white,
                                            }}
                                        >
                                            Network
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={12}
                                            color={COLORS.white}
                                        />
                                        
                                    </>
                                ) : (
                                    <Ionicons
                                        name="people-outline"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />

            <Tab.Screen
                name="Feed"
                component={Feed}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.white,
                                            }}
                                        >
                                            Backpack
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={12}
                                            color={COLORS.white}
                                        />
                                        
                                    </>
                                ) : (
                                    <Ionicons
                                        name="bookmarks-outline"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />


        
            

            

            <Tab.Screen
                name="More"
                component={More}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                }}
                            >
                                {focused ? (
                                    <>
                                        <Text
                                            style={{
                                                ...FONTS.body3,
                                                color: COLORS.white,
                                            }}
                                        >
                                            Profile
                                        </Text>
                                        <FontAwesome
                                            name="circle"
                                            size={12}
                                            color={COLORS.white}
                                        />
                                    </>
                                ) : (
                                    <Feather
                                        name="user"
                                        size={24}
                                        color={COLORS.white}
                                    />
                                )}
                            </View>
                        )
                    },
                }}
            />


        </Tab.Navigator>
    )
}

export default BottomTabNavigation
