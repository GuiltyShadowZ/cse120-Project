import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { contacts } from '../constants/data'

import {
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
} from '@expo/vector-icons'

const More = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginHorizontal: 22,
                            marginTop: 22,
                        }}
                    >
                 <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
        
                    <Text style={{ ...FONTS.h4, marginLeft: 8 }}>
                        Profile
                        
                    </Text>
                
                    
                   
                </View>

                    </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 22,
                        marginVertical: 20,
                    }}
                >
                    <View
                        style={{
                            height: 60,
                            width: 60,
                            borderRadius: 30,
                            backgroundColor: COLORS.secondaryWhite,
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                    >
                        <AntDesign name="user" size={24} color={COLORS.black} />
                    </View>
                    <View
                        style={{
                            flexDirection: 'column',
                            marginHorizontal: 22,
                        }}
                    >
                        <Text style={{ ...FONTS.h4, marginVertical: 6 }}>
                            Christian Gallien
                        </Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.gray }}>
                            {' '}
                            +1 -619-###-####
                        </Text>
                    </View>
                    <TouchableOpacity
                        onPress={() => {
                            console.log('pressed')
                        }}
                    >
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        marginTop: 32,
                    }}
                >
                    <TouchableOpacity
                       onPress={() => navigation.navigate('MoreP')}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <AntDesign
                                name="user"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Account Settings
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

            



                    


                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="notifications-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Notifications
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                   

                    <TouchableOpacity
                        onPress={() => navigation.navigate('Login')}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            <Ionicons
                                name="help-circle-outline"
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                Help
                            </Text>
                        </View>
                        <MaterialIcons
                            name="keyboard-arrow-right"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        onPress={() => {
                            console.log('Pressed')
                        }}
                        style={{
                            flexDirection: 'row',
                            justifyContent: 'space-between',
                            marginHorizontal: 22,
                            paddingVertical: 12,
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                            }}
                        >
                            
               
                        </View>

                    </TouchableOpacity>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default More
