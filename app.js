import React from 'react';
import {ScrollView} from 'react-native';
import Boat from './components/boat';

const AllBoats = () => {
  return (
    <ScrollView>
      <Boat name="SEA RAY 500 SUNDANCER" description= "Contoured lines and dramatic styling reveal a refined and powerful presence that will take your breath away" boat_image={require('./img/sea_ray.jpg')} icon_name="skull"/>
      <Boat name="FOUR WINNS HORIZON 180" description="A sporty look and refined details truly set the Horizon 180 above all others." boat_image={require('./img/four_winns.jpg')} icon_name="skull"/>

      <Boat name="FLIPPER 640 ST" description="A modern take on the classic, traditional hardtop and perfect for a family picnic." boat_image={require('./img/flipper.jpg')} icon_name="skull"/>

      <Boat name="PRINCESS V48" description="There is the option for an open design with a full-length cockpit and sunroof, or the enclosed deck saloon model, available with the option of a climate controlled interior." boat_image={require('./img/princess.jpg')} icon_name="skull"/>

      <Boat name="BAYLINER 175 BOWRIDER" description="Its outboard power gives you increased cockpit space and quiet, fuel-efficient performance." boat_image={require('./img/bayliner.jpg')} icon_name="skull"/>

      <Boat name="FAIRLINE TARGA 47" description="Stretch out on the large sun bed aft while friends lounge in the generously appointed cockpit." boat_image={require('./img/fairline.jpg')} icon_name="skull"/>
    </ScrollView>
  );
};

export default AllBoats;
