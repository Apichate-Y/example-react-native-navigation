import React from "react";
import { StyleSheet, SafeAreaView, Button, View } from "react-native";

class Home extends React.Component {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.buttonView}>
          <Button
            title="ไปที่หน้า 1"
            color="#2e8b57"
            onPress={() => this.props.navigation.navigate("Page1")}
          />
          <Button
            title="ไปที่หน้า 2"
            color="#ff6347"
            onPress={() => this.props.navigation.navigate("Page2")}
          />
          <Button
            title="ไปที่หน้า 3"
            color="#4682b4"
            onPress={() => this.props.navigation.navigate("Page3")}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonView: {
    width: "50%",
    flex: 0.25,
    flexDirection: "column",
    justifyContent: "space-around",
  },
});

export default Home;
