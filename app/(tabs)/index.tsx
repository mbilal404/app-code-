
import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const index = () => {
// const time = 12 

  const [time, setTime] =useState(12);

  const changeTime = () => {
    setTime(time + 1);
  }



  const [minute, setMinute] = useState(1);
  const changeMinute = () => {
    setMinute(minute + 5); 
  }


  
  return (
    <View style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.time}>{time}:{minute}</Text>

      </View>
      

        <TouchableOpacity style={styles.button} onPress={changeTime}>
          <Text style={styles.buttonText}>Get Started</Text>
        </TouchableOpacity>
         
         <TouchableOpacity style={{ backgroundColor: "#c30000ff", padding: 50, borderRadius: 50, marginTop: 120, }} onPress={changeMinute}>

          <Text style={{ color: "#fff", fontWeight: "bold" }}>Explore</Text>
        
         </TouchableOpacity>


    
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
  header: {
    backgroundColor: "#5ba99c",
    paddingTop: 40,
    paddingLeft: 20,
    paddingBottom: 60,
    borderBottomRightRadius: 50,
  },
  time: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  // content: {
  //   flex: 1,
  //   paddingHorizontal: 20,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // illustration: {
  //   height: 200,
  //   marginBottom: 30,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  // illustrationText: {
  //   fontSize: 60,
  // },
  // title: {
  //   fontSize: 24,
  //   fontWeight: "bold",
  //   color: "#333",
  //   marginBottom: 15,
  //   textAlign: "center",
  // },
  // description: {
  //   fontSize: 14,
  //   color: "#666",
  //   textAlign: "center",
  //   marginBottom: 30,
  //   lineHeight: 20,
  // },
  button: {
    backgroundColor: "#5ba99c",
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 8,
    width: "100%",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
  },
});

export default index;
