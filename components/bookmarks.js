import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity, Modal, View, Text, Image, ScrollView} from 'react-native'
import * as theme from '../constants/theme'
import BookmarksModal from './bookmarksModal'
import Icon from 'react-native-vector-icons/MaterialIcons';
import { COLORS, FONTS } from '../constants'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons'




const Bookmarks = ({item}) => {
    const id = parseInt(item.id)
    const [jobVisible, setJobVisible] = useState(false)

    const ToggleJobVisible = () => {
        setJobVisible(!jobVisible)
    }
    return(
     
        <TouchableOpacity 
            onPress={() => ToggleJobVisible()}
            >
            
            <Modal 
                animationType="slide" 
                visible={jobVisible}
                onRequestClose={() => ToggleJobVisible()}>
                    <BookmarksModal closeModal={() => ToggleJobVisible()} item={item} />
            </Modal>
            
            
            <View style={styles.container}>
           <Image
               source={item.logo}
               borderRadius={10}
               style={{width: 40, height: 40}} />

                    
               
               
           <View style={styles.textContainer}>
               <Text style={styles.jobTitle}>{item.job}</Text>
               <Text style={styles.jobLocation}>{item.location}</Text>
           </View>

                        <MaterialIcons
                            name="bookmark"
                            size={40}
                            color={COLORS.blue}
                         
                            
                        />
          
         
           
       </View>
      
        </TouchableOpacity>
      
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 40,
        borderBottomColor: COLORS.blue,
        borderBottomWidth: 2,
    },
    textContainer: {
        flex: 1,
        marginLeft: 10
    },
    iconContainer: {
        padding: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    jobTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h3,
        color: theme.colors.black
    },
    jobLocation: {
        fontSize: theme.sizes.h2,
        color: theme.colors.silver
    },
})



export default Bookmarks