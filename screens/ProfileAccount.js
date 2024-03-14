import { View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import PageContainer from '../components/PageContainer'
import { COLORS } from '../constants'
import { AntDesign } from '@expo/vector-icons'
import Input from '../components/Input'
import Button from '../components/Button'
import PageTitle from '../components/PageTitle'

const ProfileAccount = ({ navigation }) => {
    return (
        
        <SafeAreaView style={{ flex: 1 }}>
            <PageContainer>
                <PageTitle
                    title=""
                    onPress={() => navigation.navigate('Verification')}
                    
                />
                
                
                
                <View style={{ flex: 1, alignItems: 'center' }}>

                    
                    

                    
             

                    <View style={{ width: '100%', paddingHorizontal: 22 }}>
                        <Input
                            id="firstName"
                            placeholder="Email"
                        />
                        <Input
                            id="lastName"
                            placeholder="Password"
                        />

                        <Button
                            title="Log in"
                            style={{
                                width: '100%',
                                paddingVertical: 12,
                                marginBottom: 48,
                            }}
                            onPress={() =>
                                navigation.navigate('BottomTabNavigation')
                            }
                        />
                    </View>
                    
                </View>

                

                
               
            </PageContainer>
        </SafeAreaView>
    )
}

export default ProfileAccount
