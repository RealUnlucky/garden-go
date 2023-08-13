import { View, Text, TouchableOpacity, Pressable } from 'react-native';
import { Link } from 'expo-router';



const index = () => {
    return (
        <View>
            <Text>Home</Text>
            <Link href="/DifferentPage">
                Test
            </Link>
        </View>
    )
}


export default index;