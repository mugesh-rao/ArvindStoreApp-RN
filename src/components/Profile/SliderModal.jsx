import React, {useState, useEffect} from 'react';
import {Animated, View, TouchableWithoutFeedback, Image} from 'react-native';
import tw from 'twrnc';

const SliderModal = ({visible, onClose, children}) => {
  const [slideAnimation] = useState(new Animated.Value(0));

  useEffect(() => {
    if (visible) {
      slideIn();
    }
  }, [visible]);

  const slideIn = () => {
    Animated.timing(slideAnimation, {
      toValue: 1,
      duration: 400,
      useNativeDriver: true,
      friction: 8, // Adjust the friction value for smoother animation
    }).start();
  };

  const slideOut = () => {
    Animated.timing(slideAnimation, {
      toValue: 0,
      duration: 400,
      useNativeDriver: true,
      friction: 8, // Adjust the friction value for smoother animation
    }).start(() => {
      onClose(); // Call onClose callback after animation completes
    });
  };

  return (
    <Animated.View
      style={[
        tw`absolute bottom-0 left-0 right-0 bg-gray-900 p-4 rounded-t-3xl border-red-600 border mx-1`,
        {
          transform: [
            {
              translateY: slideAnimation.interpolate({
                inputRange: [0, 1],
                outputRange: [400, 0],
              }),
            },
          ],
        },
      ]}>
      <View style={tw`p-4 justify-center items-center`}>
        {children}
        <TouchableWithoutFeedback onPress={slideOut}>
          <View style={tw`w-10 h-10 bg-red-600 rounded-full items-center flex`}>
            <Image
              source={require('../../asset/Icons/close.png')}
              style={tw`w-4 h-4 mt-3 `}
            />
          </View>
        </TouchableWithoutFeedback>
      </View>
    </Animated.View>
  );
};

export default SliderModal;
