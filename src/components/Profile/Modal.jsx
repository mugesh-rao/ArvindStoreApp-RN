import React from 'react';
import {View, Modal, TouchableWithoutFeedback} from 'react-native';
import tw from 'twrnc';

const Modals = ({visible, onClose, children}) => {
  return (
    <Modal visible={visible} animationType="fade" transparent>
      <TouchableWithoutFeedback onPress={onClose}>
        <View  
          style={tw`flex-1 justify-center items-center bg-opacity-50 bg-gray-900`}>
          <View
            style={tw`bg-gray-900 border border-red-600 rounded-lg p-10 border-red-600`}>
            {children}
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

export default Modals;
