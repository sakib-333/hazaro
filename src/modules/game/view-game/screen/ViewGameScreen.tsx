import { Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const ViewGameScreen = () => {
  return (
    <SafeAreaView
      edges={["left", "right"]}
      className="flex-1 bg-background px-5"
    >
      <View>
        <Text className='text-foreground'>ViewGameScreen</Text>
      </View>
    </SafeAreaView>
  )
}

export default ViewGameScreen