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




	
const Chats = ({ navigation }) => {
    const [text, onChangeText] = React.useState('Useless Text');
    const [number, onChangeNumber] = React.useState('');
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)
    this.state = {
        text: ''
    }

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
                        onPress={() => navigation.navigate('Chats')}
                    >
                        <MaterialIcons
                            name="keyboard-arrow-left"
                            size={35}
                            color={COLORS.black}
                        />
                    </TouchableOpacity>
                    <Text style={{ ...FONTS.h4, marginLeft: 8, marginVertical: 12}}>
                        Add Message
                        
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
                                Username
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
                            height: 40,
                            margin: 20,
                            borderWidth: 1,
                            padding: 10,
                            marginVertical: 5,
                        }}
                    >


                        
                        
                        <TextInput 

                        
                        
                            style={{
                    
                                width: '100%',
                                height: '100%',
                                marginHorizontal: 12,
                            }}
                            
                            
                            label="Email"
                            ariant="outlined"
                            placeholder="To:"
                            editable
                            multiline={true} 
                     
                            numberOfLines={2}
                            maxLength={40}
                            
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
                                Message
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
                            
                            height: 100,
                            margin: 20,
                            borderWidth: 1,
                            padding: 10,
                            marginVertical: 5,
                          
                        }}
                    >


                        <TextInput
                            style={{
                                width: '100%',
                                height: '100%',
                                marginHorizontal: 12,
                            }}
                            placeholder="Write your message..."
                            multiline={true} 
                            numberOfLines={40}
                            
                        />
                    </View>

                    <TouchableOpacity onPress={() => navigation.navigate('Chats')} style={styles.button}>
                        <Text style={styles.buttonText}>Send</Text>
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

export default Chats
