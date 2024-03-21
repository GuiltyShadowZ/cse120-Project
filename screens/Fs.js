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
import Bookmarks from '../components/bookmarks';
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


    


const Fs = ({ navigation }) => {
    const [search, setSearch] = useState('')
    const [filteredUsers, setFilteredUsers] = useState(company.backpack)

    const handleSearch = (text) => {
        setSearch(text)
        const filteredData = company.backpack.filter((company) =>
            company.job.toLowerCase().includes(text.toLowerCase())
        )
        setFilteredUsers(filteredData)
    }

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
                        <Text style={{ ...FONTS.h4 }}>Backpack</Text>
                        
                        
                        

                    </View>

                    <View className="space-x-1">


</View>
           
                    

                
                      
                    <VirtualizedScrollView>
                  
    

                    
                        <View style={[styles.popularContainer, {marginRight: 20, marginLeft: 20, marginBottom: 70}]}>
                            
                            <FlatList 
                                data={company.backpack}
                                keyExtractor={item => item.id}
                                renderItem={({ item }) => {
                                    return (
                                    <TouchableOpacity>
                                        <Bookmarks item={item} />
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
    
  
        popularContainer: {
            paddingTop: 20,  
         
        },
    });

export default Fs