import { View, Text, TouchableOpacity } from 'react-native'
import React, { useEffect, useState, useCallback } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { COLORS, SIZES, FONTS } from '../constants'
import { StatusBar } from 'expo-status-bar'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { GiftedChat, Send, Bubble } from 'react-native-gifted-chat'

const PersonalChat2 = ({ navigation }) => {
    const [messages, setMessages] = useState([])

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: 'Hello',
                createdAt: new Date(),
                user: {
                    _id: 2,
                    name: 'React Native',
                    avatar: 'https://placeimg.com/140/140/any',
                },
            },


         

        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages((previousMessages) =>
            GiftedChat.append(previousMessages, messages)
        )
    }, [])

    
    const renderSend = (props) => {
        return (
            <Send {...props}>
                <View
                    style={{
                        height: 36,
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: 36,
                        borderRadius: 18,
                        backgroundColor: COLORS.blue,
                        marginRight: 20,
                        marginLeft: 1,
                        marginTop: 5,
                        marginBottom: 5,
                    }}
                >
                    <FontAwesome name="send" size={12} color={COLORS.white} />
                </View>

                
            </Send>
        )
    }

   
    const renderBubble = (props) => {
        return (
            <Bubble
                {...props}
                wrapperStyle={{
                    right: {
                        backgroundColor: COLORS.blue,
                    },
                }}
                textStyle={{
                    right: {
                        color: COLORS.white,
                    },
                }}
            />

            
        )
    }
    return (
        <SafeAreaView style={{ flex: 1, color: COLORS.secondaryWhite }}>
            <StatusBar style="light" backgroundColor={COLORS.black} />
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    paddingHorizontal: 22,
                    backgroundColor: COLORS.white,
                    height: 60,
                }}
            >
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    
                    <TouchableOpacity
                        onPress={() => navigation.navigate('ProfilePage')}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={35}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8 }}>
                        Chat
                    </Text>
                </View>

                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                    }}
                >
                    

                    
                </View>

                

                
            </View>

            

            

            <GiftedChat
                messages={messages}
                onSend={(messages) => onSend(messages)}
                user={{
                    _id: 1,
                }}
                
                renderBubble={renderBubble}
                
                
                
                alwaysShowSend
                renderSend={renderSend}
                scrollToBottom
                textInputStyle={{
                    borderRadius: 22,
                    borderWidth: 2,
                    borderColor: COLORS.black,
                    marginRight: 20,
                    marginLeft: 20,
                    paddingHorizontal: 12,
                    marginTop: 5,
                    marginBottom: 5,
                }}

                
            />


            

            
        </SafeAreaView>

        
    )
}

export default PersonalChat2