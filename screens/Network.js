import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { MaterialCommunityIcons, AntDesign, Ionicons } from '@expo/vector-icons'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { FONTS, COLORS } from '../constants'
import { contacts } from '../constants/datan'

const Network = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)

    const handleSearch = (text) => {
        setSearch(text)
        const filteredData = contacts.filter((user) =>
            user.userName.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredUsers(filteredData)
    }

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            key={index}
            onPress={() =>
                navigation.navigate('Network', {
                    userName: item.userName,
                })

            }
            
            style={[
                {
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderBottomColor: COLORS.blue,
                    borderBottomWidth: 2,
                },
                index % 2 !== 0
                    ? {
                          backgroundColor: COLORS.white,
                      }
                    : null,
            ]}
        >
            <View
                style={{
                    paddingVertical: 15,
                    marginRight: 22,
                }}
            >
                {item.isOnline && item.isOnline == true && (
                    <View
                        style={{
                            height: 14,
                            width: 14,
                            borderRadius: 7,
                            backgroundColor: COLORS.green,
                            borderColor: COLORS.white,
                            borderWidth: 2,
                            position: 'absolute',
                            top: 14,
                            right: 2,
                            zIndex: 1000,
                        }}
                    ></View>
                )}

                <Image
                    source={item.userImg}
                    resizeMode="contain"
                    style={{
                        height: 50,
                        width: 50,
                        borderRadius: 25,
                    }}
                />
            </View>
            <View
                style={{
                    flexDirection: 'column',
                }}
            >
                <Text style={{ ...FONTS.h4, marginBottom: 4 }}>
                    {item.userName}
                </Text>
                <Text style={{ fontSize: 14, color: COLORS.secondaryGray }}>
                    {item.lastSeen}
                </Text>
                <Text style={{ fontSize: 0, color: COLORS.secondaryGray }}>
                    {item.lastMessage}
                </Text>
            </View>
        </TouchableOpacity>

        
    )
    
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <View style={{ flex: 1 }}>

                    
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
                   
                    <Text style={{ ...FONTS.h4, marginLeft: 8, marginVertical: 12}}>
                        Network
                        
                    </Text>

                    
                </View>

                <TouchableOpacity
                        onPress={() => navigation.navigate('Chats')}
                        style={{
                            marginRight: 8,
                        }}
                    >
                        <MaterialIcons
                            name="chat"
                            size={30}
                            color={COLORS.blue}
                        />
                    </TouchableOpacity>
                    </View>

                    

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}
                    >
                       

                        
                    </View>
                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 22,
                            paddingHorizontal: 12,
                            borderRadius: 20,
                        }}
                    >


                        <TextInput
                            style={{
                                width: '100%',
                                height: '100%',
                                marginHorizontal: 12,
                            }}
                            value={search}
                            onChangeText={handleSearch}
                            placeholder="Search user..."
                        />
                    </View>

                    <View
                        style={{
                            paddingBottom: 100,
                        }}
                    >
                        <FlatList
                            data={filteredUsers}
                            renderItem={renderItem}
                            keyExtractor={(item) => item.id.toString()}
                        />
                    </View>
                </View>
            </PageContainer>
        </SafeAreaView>
    )
}

export default Network
