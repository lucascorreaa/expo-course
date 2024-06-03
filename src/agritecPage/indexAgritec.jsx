import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const InsereLocal = () => {
  const [text, setText] = useState('');

  const handleChangeText = newText => {
    setText(newText);
  };

  const handlePressButton = () => {
    // Faça algo com o texto inserido
    console.log('Texto inserido:', text);
  };

  return (
    <View>
      <TextInput
        style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
        onChangeText={handleChangeText}
        value={text}
        placeholder="Digite o local..."
      />
      <Button
        title="Enviar"
        onPress={handlePressButton}
      />
    </View>
  );



  
};

const InsereCultivar = () => {
    const [text, setText] = useState('');
  
    const handleChangeText = newText => {
      setText(newText);
    };
  
    const handlePressButton = () => {
      // Faça algo com o texto inserido
      console.log('Texto inserido:', text);
    };
  
    return (
      <View>
        <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={handleChangeText}
          value={text}
          placeholder="Digite o cultivar..."
        />
        <Button
          title="Enviar"
          onPress={handlePressButton}
        />
      </View>
    );
  
  
  
    
  };



export default InsereLocal; InsereCultivar;

