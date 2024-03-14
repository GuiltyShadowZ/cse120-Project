import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    FlatList,
    Image,
    ScrollView,
    StyleSheet,
    StatusBar,
} from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { AntDesign, Ionicons } from '@expo/vector-icons'
import { contacts } from '../constants/data'
import { Chats } from '../screens/Chats'

const Contacts = ({ navigation }) => {
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
                navigation.navigate('PersonalChat', {
                    userName: item.userName,
                })
            }
            style={[
                {
                    width: '100%',
                    flexDirection: 'row',
                    alignItems: 'center',
                    paddingHorizontal: 22,
                    borderBottomColor: COLORS.secondaryWhite,
                    borderBottomWidth: 1,
                },
                index % 2 !== 0
                    ? {
                          backgroundColor: COLORS.aquamarine,
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
                        <Text style={{ ...FONTS.h4 }}>Home</Text>
                        
                        
                        

                    </View>

                    <View className="space-x-1">


</View>


                  
                <ScrollView style={styles.scrollView}>
                     
                     
                     <Image source={require('../assets/images/clogo.webp')} style={{width: 350, height: 200, alignSelf: 'center'}}/> 
                     
                     <Text></Text> 

                     <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts')}
                        >
                     
                     <Image source={require('../assets/images/f2.jpg')} style={{width: 350, height: 200, alignSelf: 'center'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts')}
                        >
                     
                     <Image source={require('../assets/images/f3.jpg')} style={{width: 350, height: 200, alignSelf: 'center'}}/>
                     </TouchableOpacity>
                     <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts')}
                        >
                     
                     <Image source={require('../assets/images/f4.jpg')} style={{width: 350, height: 200, alignSelf: 'center'}}/>
                     
                     </TouchableOpacity>
                     <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts')}
                        >
                     
                     <Image source={require('../assets/images/f5.jpg')} style={{width: 350, height: 200, alignSelf: 'center'}}/>
                     
                     </TouchableOpacity>
                     <TouchableOpacity
                            onPress={() => navigation.navigate('Contacts')}
                        >
                     
                     <Image source={require('../assets/images/f6.jpg')} style={{width: 350, height: 200, alignSelf: 'center'}}/>
                     
                     </TouchableOpacity>
                </ScrollView>
                     
                     
                     

                </View>
                
            </PageContainer>
        </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        container: {
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        },
        scrollView: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        },
        text: {
        fontSize: 42,
        },
    });

export default Contacts
