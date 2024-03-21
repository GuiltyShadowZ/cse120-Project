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

import * as theme from '../constants/theme'
import * as company from '../constants/mainData';
import Company from '../components/company';
import Jobs from '../components/jobs';
import Icon from 'react-native-vector-icons/MaterialIcons';

const VirtualizedScrollView = props => {
    return (
      <FlatList
        {...props}
        data={[]}
        keyExtractor={(e, i) => 'dom' + i.toString()}
        ListEmptyComponent={null}
        renderItem={null}
        ListHeaderComponent={() => (
          <>{props.children}</>
        )}
      />
    );
  };

const Contacts = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(contacts)

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
           
                    
                     <Image source={require('../assets/images/clogo.webp')} style={{width: 350, height: 200, alignSelf: 'center'}}/> 
                     <VirtualizedScrollView>

                      
                 
                    <View style={styles.searchContainer}>
                        <View style={styles.searchInputContainer}>
                            <Icon name="" size={30} color={theme.colors.blue} />
                            <TextInput 
                                placeholder='  Search for an opportunitie...' />
                        </View>
                        <TouchableOpacity style={styles.searchIconContainer}>
                            <Icon name="list" size={30} color={theme.colors.white} />
                        </TouchableOpacity>
                    </View>
                      
                   
                    <View style={styles.popularContainer}>
                        <Text style={[styles.popularText, {marginLeft: 20}]}>Recommended Opportunities</Text>
                        <FlatList 
                            data={company.companies}
                            horizontal={true}
                            showsHorizontalScrollIndicator={false}
                            keyExtractor={item => item.id}
                            renderItem={({ item }) => {
                                return (
                                    <TouchableOpacity
                                        activeOpacity={1}
                                        style={{flex: 1}} >
                                        <Company item={item} />
                                    </TouchableOpacity>
                                )
                            }} />
                    </View>
    

                  
                        <View style={[styles.popularContainer, {marginRight: 20, marginLeft: 20, marginBottom: 70}]}>
                            <Text style={styles.popularText}>Recent </Text>
                            <FlatList 
                                data={company.companies2}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                    <TouchableOpacity>
                                        <Jobs item={item} />
                                    </TouchableOpacity>
                                    )
                                }} />
                
                        </View>
                     
                     <Text></Text> 

                     </VirtualizedScrollView>                   
                </View>
                
                
            </PageContainer>
        </SafeAreaView>
    )
}

    const styles = StyleSheet.create({
        header: {
            padding: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            backgroundColor: theme.colors.lightWhite
        },
        container: {
            backgroundColor: theme.colors.lightWhite
        },
        title: {
            marginLeft: 20,
            fontWeight: 'bold',
            fontSize: theme.sizes.h6,
            color: theme.colors.black
        },
        searchContainer: {
            marginTop: 15,
            marginLeft: 20,
            paddingRight: 20,
            flexDirection: 'row',
            justifyContent: 'flex-start'
            
        },
        searchInputContainer: {
            flex: 1,
            padding: 5,
            borderRadius: 5,
            alignItems: 'center',
            flexDirection: 'row',
            backgroundColor: theme.colors.gray
        },
        searchIconContainer: {
            padding: 12,
            marginLeft: 10,
            borderRadius: 5,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: theme.colors.blue
        },
        popularContainer: {
            paddingTop: 20,
        },
        popularText: {
            marginBottom: 15,
            fontWeight: 'bold',
            fontSize: theme.sizes.h3,
            color: theme.colors.black
        }
    });

export default Contacts
