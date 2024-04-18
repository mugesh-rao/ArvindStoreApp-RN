import React from 'react';
import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native';
import tw from 'twrnc';

const products = [
  {
    id: 1,
    name: 'Polo Shirt For Men',
    color: 'Red',
    price: 30,
    quantity: 1,
    image: require('../../assets/adaptive-icon.png'), // Replace with your image path
  },
  {
    id: 2,
    name: 'Scott Bag',
    color: 'Black',
    price: 42,
    quantity: 1,
    image: require('../../assets/adaptive-icon.png'), // Replace with your image path
  },
  // ... other products
];

const CartScreen = () => {
  // Calculate the total
  const total = products.reduce((acc, product) => acc + product.price * product.quantity, 0);

  // Placeholder function to modify quantity
  const handleQuantityChange = (id, delta) => {
    // Logic to handle quantity changes
  };
  const summaryDetails = {
    totalAmount: '₹6,694',
    gst: '₹1,205',
    shipping: '₹49',
    couponDiscount: '-₹0',
    amountPayable: '₹7,948',
  };
  return (
    <ScrollView style={tw`flex-1 bg-gray-100 p-4`}>
      <View style={tw`flex-row items-center justify-between`}>
        <TouchableOpacity onPress={() => {}}>
          <Text style={tw`text-lg`}>{"<"}</Text> {/* Replace with an icon */}
        </TouchableOpacity>
        <Text style={tw`text-lg font-bold`}>My Cart</Text>
        <View style={tw`w-5`} /> {/* Adjust width as needed */}
      </View>

      <View style={tw`mt-4`}>
        {products.map((product) => (
          <View key={product.id} style={tw`flex-row items-center justify-between mb-4 p-3 rounded-lg bg-white`}>
            <Image source={product.image} style={tw`w-16 h-16 rounded-full`} />
            <View style={tw`flex-1 ml-4`}>
              <Text style={tw`text-lg font-semibold`}>{product.name}</Text>
              <Text style={tw`text-sm text-gray-500`}>Color: {product.color}</Text>
              <Text style={tw`text-lg font-bold`}>${product.price}</Text>
            </View>
            <View style={tw`flex-row items-center`}>
              <TouchableOpacity onPress={() => handleQuantityChange(product.id, -1)} style={tw`mx-2`}>
                <Text style={tw`text-lg font-bold`}>-</Text>
              </TouchableOpacity>
              <Text style={tw`text-lg`}>{product.quantity}</Text>
              <TouchableOpacity onPress={() => handleQuantityChange(product.id, 1)} style={tw`mx-2`}>
                <Text style={tw`text-lg font-bold`}>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
      <View style={tw`bg-white p-4 rounded-lg`}>
      <Text style={tw`text-sm text-green-500 mb-4`}>
        Pay online & save EXTRA ₹100 OFF on this order.
      </Text>
      <View style={tw`flex-row justify-between`}>        <Text style={tw`text-xl font-bold`}>Payment Summary</Text>
      </View>
      <View style={tw`flex-row justify-between`}>        <Text>Total Amount (1 Item)</Text>
        <Text style={tw`font-bold`}>{summaryDetails.totalAmount}</Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <Text>Total GST</Text>
        <Text style={tw`font-bold`}>{summaryDetails.gst}</Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <Text>Total Shipping</Text>
        <Text style={tw`font-bold`}>{summaryDetails.shipping}</Text>
      </View>
      <View style={tw`flex-row justify-between`}>
        <Text>Total Coupon Discount</Text>
        <Text style={tw`font-bold`}>{summaryDetails.couponDiscount}</Text>
      </View>
      <View style={tw`border-t border-gray-200 my-4`}></View>
      <View style={tw`flex-row justify-between`}>
          <Text style={tw`text-lg font-bold`}>Total</Text>
          <Text style={tw`text-lg font-bold`}>${total}</Text>
        </View>
      <TouchableOpacity style={tw`mt-4 bg-purple-600 p-4 rounded-lg`}>
          <Text style={tw`text-lg font-bold text-center text-white`}>Order Now</Text>
        </TouchableOpacity>
    </View>
     
    </ScrollView>
  );
};

export default CartScreen;
