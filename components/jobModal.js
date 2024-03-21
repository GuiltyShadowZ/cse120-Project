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




const JobModal = (props) => {



    return (
        <View style={styles.container}>
          
            <View  style={styles.header}>
                <TouchableOpacity onPress={props.closeModal}>
                    <Icon name="keyboard-arrow-left" size={35} color={theme.colors.black} />
                    
                </TouchableOpacity>

                <Text style={styles.headerTitle}>{props.item.company}</Text>
<               View style={{padding: 20}}></View>

                
                
            </View>

        
            <View style={styles.body}>
                <ScrollView showsVerticalScrollIndicator={false}>
               
                    <View style={styles.companyContainer}>
                        <Image 
                            style={{width: 100, height: 100, borderRadius: 20}}
                            source={props.item.logo} />
                        <Text style={styles.jobTitle}>{props.item.job}</Text>
                        <Text style={styles.jobSalary}>{props.item.salary}</Text>
                       
                    </View>
              
                    <View >
                        <Text style={styles.jobTitle}>Description:</Text>
                        <Text style={styles.descriptionText}>{props.item.opportunity}</Text>
                        <Text style={styles.jobTitle}>Responsabilities:</Text>
                        <View style={{flexDirection: 'row', marginTop: 7}}>
                         
                            <Text style={[styles.descriptionText, {marginTop: 0}]}>{props.item.responsabilities.first}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 7}}>
                           
                            <Text style={[styles.descriptionText, {marginTop: 0}]}>{props.item.responsabilities.second}</Text>
                        </View>
                    </View>
                </ScrollView>
                




           
                <View style={{flexDirection: 'row'}}>

                <TouchableOpacity>
                    <View style={[styles.btnContainer, {backgroundColor: theme.colors.white, borderWidth: 1, borderColor: theme.colors.silver}]}>
                        <Icon name="bookmark-outline" size={30} color={theme.colors.blue} />
                    </View>
                </TouchableOpacity>
                    
                    
                    
                    <TouchableOpacity>
                    <View style={[styles.btnContainer, {flex: 1,backgroundColor: theme.colors.blue, marginLeft: 70}]}>
                        <Text style={[styles.jobTitle, {color: theme.colors.white, marginTop: 0}]}>Apply Now</Text>    
                                
                    </View>
                    </TouchableOpacity>
                   

                </View>
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
        marginTop: 10,
        fontSize: theme.sizes.h3
    },
    btnContainer: {
        padding: 15,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default JobModal;