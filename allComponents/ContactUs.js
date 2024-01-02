
import { View, Text, TextInput, Button } from 'react-native';
import React, { useState } from 'react';

const ContactUs = () => {

  const [data, setData] = useState('');
  
  const [response, setResponse] = useState('');

  const handleFormSubmit = () => {
    setResponse('Soon after you will receive a response');
  };

  

  return (


    //
    <View sty
    //
    
    le={{ flex: 1, padding: 15, }}>


      <View style={{ backgroundColor: '#1890ff', padding: 20 ,alignItems: 'center'}}>
        <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>Contact us</Text>
        <Text style={{color: 'black', fontSize: 20, }}> Do you have any other questions for us ? Please do not hesitate to contact us directly and to say the query. Our best team will come back to you within a matter of hours to help you to find the solution .</Text>
      </View>
      <View style={{ marginVertical: 18 }}>


        <TextInput
          placeholder="Your name please sir"
          value={data}
          onChangeText={(text) => setData(text)}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}

        />
         <TextInput
          placeholder="Your message please"
          multiline
          numberOfLines={4}
          style={{ borderBottomWidth: 1, marginBottom: 10 }}

          

        />
        
        <TextInput
          placeholder="Your email address "
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />


        <TextInput
          placeholder="Subject please  sir"
          style={{ borderBottomWidth: 1, marginBottom: 10 }}
        />
       
        <Button title="Send" onPress={handleFormSubmit} />
      </View>
      <View style={{ alignItems: 'center' }}>
        <Text>{response}</Text>
      </View>
    </View>
  );
};



export default ContactUs;
