import { Card, Button } from 'react-native-paper';
import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
//
const AboutUs = () => {
  
  //fvhjjgdskal
  return (

    <View style={styles.container}>
      <View style={styles.header}>    



        <Text style={styles.name}> Some text about who we are and what we do. Resize the browser window to see that this page is responsive by the way.</Text>
      </View>





      <Text style={styles.teamHeader}>Our Team</Text>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.cardContainer}>
          <View style={styles.card}>
          


            <View style={styles.cardContent}>
              <Text style={styles.name}>Same Doe</Text>
              <Text style={styles.role}>COO & Founder</Text>
        

              <Text>Text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>
       


          <View style={styles.card}>
           
            <View style={styles.cardContent}>
              <Text style={styles.name}>Roxk Ross</Text>
              <Text style={styles.role}>Art Director</Text>
              <Text>Text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>



          <View style={styles.card}>
          
            <View style={styles.cardContent}>
              <Text style={styles.name}>Wdir Doe</Text>
              <Text style={styles.role}>Designe</Text>
              <Text>Text that describes me lorem ipsum ipsum lorem.</Text>
              <Text>jane@example.com</Text>
              <Button mode="contained" style={styles.button}>Contact</Button>
            </View>
          </View>

          
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: 'pink',
    padding: 20,
    alignItems: 'center',
  },
// Adjust the width as per your preference
//

  teamHeader: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },

  //
  scrollContainer: {
    flexDirection: 'column', 
    alignItems: 'center', 
  },
  cardContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    padding: 10,
  },
  card: {
    width: '80%', 
    marginBottom: 20,
    borderWidth: 2,
     borderColor: 'black',
     borderRadius: 10,
  },
  image: {
    width: '100%',
    height: 150,
    resizeMode: 'cover',
  },
  cardContent: {
    padding: 10,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 5,
  },
  role: {
    textAlign: 'center',
    fontWeight: '500'
  },
});

export default AboutUs;
