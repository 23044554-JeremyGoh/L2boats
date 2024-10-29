import React from 'react';
import { View, Text, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';

const Boat = ({ name, description, icon_name, boat_image }) => {
  return (
    <View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={icon_name} size={20} color="grey" />
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'grey', marginLeft: 5 }}>
          {name}
        </Text>
      </View>
      <Text style={{ color: 'grey' }}>{description}</Text>
      <Image source={boat_image} style={{ width: 400, height: 500 }} />
    </View>
  );
};

export default Boat;
