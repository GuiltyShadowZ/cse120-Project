import React from 'react';
import { 
    View,  
    Text,
    Image,
    StyleSheet,
    Linking,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import * as theme from '../constants/theme'
import { MaterialIcons, FontAwesome } from '@expo/vector-icons' 
import { COLORS, FONTS } from '../constants'






const UsersModal = (props) => {

    



    return (
        <View style={styles.container}>
       
            <View  style={styles.header}>
                <TouchableOpacity onPress={props.closeModal}>
                    <Icon name="keyboard-arrow-left" size={35} color={theme.colors.black} />
                </TouchableOpacity>

               
                
                
                
            </View>

       
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
              
                    <View style={styles.companyContainer}>
                        <Image 
                            style={{width: 200, height: 200, borderRadius: 20}}
                            source={props.item.logo} />
                        <Text style={styles.jobTitle}>{props.item.name}</Text>
                       
                       
                    </View>
             
                    <View >
                        <Text style={styles.jobTitle}>Description:</Text>
                        <Text style={styles.descriptionText}>{props.item.description}</Text>
                        <Text style={styles.jobTitle}>Degree:</Text>
                        <Text style={styles.descriptionText}>{props.item.degree}</Text>
                        <View style={{flexDirection: 'row', marginTop: 7}}>
                         
                            
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 7}}>

         
                           
                            
                        </View>
                    </View>
                </ScrollView>
                


                   

               
            </View>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: theme.colors.lightWhite
    },
    header: {
        height: 70,
        padding: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.lightWhite
    },
    headerTitle: {
        fontWeight: 'bold',
        fontSize: theme.sizes.h4
    },
    body: {
        flex: 1, 
        padding : 20,
        paddingTop: 0,
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
        backgroundColor: theme.colors.white
    },
    companyContainer: {
        padding: 30,
        alignItems: 'center'
    },
    jobTitle: {
        marginTop: 10,
        marginBottom: 20,
        fontWeight: 'bold',
        fontSize: theme.sizes.h4
    },
    jobSalary: {
        marginTop: 5,
        fontWeight: '900',
        fontSize: theme.sizes.h3
    },
    tag: {
        padding: 7,
        marginTop: 10,
        borderRadius: 5,
        alignItems: 'center',
        borderWidth: 1,
        borderColor: theme.colors.silver
    },
    descriptionText: {
        marginTop: 20,
        marginBottom: 20,
        fontSize: theme.sizes.h3
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default UsersModal;