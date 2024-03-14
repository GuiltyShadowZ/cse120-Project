import { View, Text, TouchableOpacity, Image, TextInput, ScrollView, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS, FONTS } from '../constants'
import { contacts } from '../constants/data'
import React, { useState } from 'react'

import {
    AntDesign,
    MaterialIcons,
    MaterialCommunityIcons,
    Ionicons,
    Entypo,
    
} from '@expo/vector-icons'

const More = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)

    const handleSearch = (text) => {
        setSearch(text)
        const filteredData = contacts.filter((user) =>
            user.userName.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredUsers(filteredData)
    }

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
                    <TouchableOpacity
                        onPress={() => navigation.navigate('More')}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={24}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8, marginVertical: 12}}>
                        Account Settings
                        
                    </Text>
                
                    
                   
                </View>

                    </View>
                <View
                    style={{
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginHorizontal: 22,
                        marginVertical: 10,
                    }}
                >
                    

                         
                    
                    <TouchableOpacity onPress={() => navigation.navigate('MoreP')}  > 
                    <Image source={require('../assets/images/pficon.png')} style={{marginVertical: 5,  width: 100, height: 100, borderRadius: 25, resizeMode:"contain"}}/>  
                    </TouchableOpacity>

                   
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={40}
                            color={COLORS.black}
                        />
                 
                    
                    <Text style={{ ...FONTS.h4, marginLeft: 4, marginVertical: 12}}>
                        Change Profile Picture
                    
                        
                    </Text>
                    
                  


              
                    
                   
                </View>
              

                <ScrollView
                
                    style={{
                        marginTop: 0,
                    }}
                >

                    
                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Email
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                            placeholder=""
                        />
                    </View>

                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Password
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                           
                        />
                    </View>

                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                First Name
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                         
                        />
                    </View>

                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Last Name
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                            
                        />
                    </View>

                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                School Year
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                            
                        />
                    </View>

                    <View
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
                                name=""
                                size={24}
                                color={COLORS.black}
                            />
                            <Text style={{ ...FONTS.h4, marginLeft: 12 }}>
                                {' '}
                                Race and Ethnicity
                            </Text>
                        </View>
                        <MaterialIcons
                            name=""
                            size={24}
                            color={COLORS.black}
                        />
                    </View>

                    <View
                        style={{
                            marginHorizontal: 22,
                            flexDirection: 'row',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray,
                            height: 48,
                            marginVertical: 5,
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
                            
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('More')} style={styles.button}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={styles.button}>
                        <Text style={styles.buttonText}>Log out</Text>
                    </TouchableOpacity>

                    

                    
                            
               
                  

                
                </ScrollView>
            </PageContainer>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
   
    button: {
        width: '40%',
        backgroundColor: '#323d7b',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 18,
    },
    button2: {
        width: '40%',
        backgroundColor: '#20b2aa',
        borderRadius: 10,
        padding: 15,
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 20,
        marginVertical: 20,
    },
    buttonText2: {
        color: 'red',
        fontWeight: 'bold',
        fontSize: 18,
    },
  
  
});

export default More
