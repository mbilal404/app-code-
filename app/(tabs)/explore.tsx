import { View, Text, TouchableOpacity} from 'react-native'
import React from 'react'

const explore = () => {
  return (
   <View style={{ flex: 1,  justifyContent: "center", flexDirection: "row", gap: 50, backgroundColor: "#f9c711ff", }}>

      <View style={{ backgroundColor: "#5ba99c", width: 200, height: 200, }}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti facilis magnam incidunt distinctio sunt! Voluptatum accusamus minus exercitationem architecto, delectus eveniet sequi quos eum ratione, ullam voluptas iusto iure nihil?</Text> 
        <button>Explore</button>

        <TouchableOpacity style={{ backgroundColor: "#c30000ff", padding: 50, borderRadius: 50, marginTop: 120, }}>
          <Text>Explore</Text>
        </TouchableOpacity>
        
        </View>



      <View style={{ backgroundColor: "#a96b5bff", width: 200, height: 200, }}> </View>
</View>
   
  )
}

export default explore