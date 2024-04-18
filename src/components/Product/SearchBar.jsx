// Sidebar.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Sidebar = () => {
  return (
    <View style={styles.container}>
      <View style={styles.sidebarHeader}>
        <Text style={styles.sidebarHeaderText}>My Sidebar</Text>
      </View>
      <View style={styles.sidebarLinks}>
        <Text style={styles.sidebarLink}>Home</Text>
        <Text style={styles.sidebarLink}>About</Text>
        <Text style={styles.sidebarLink}>Services</Text>
        <Text style={styles.sidebarLink}>Contact</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#333',
    flex: 1,
  },
  sidebarHeader: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderColor: '#555',
  },
  sidebarHeaderText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
  },
  sidebarLinks: {
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
  sidebarLink: {
    fontSize: 18,
    color: 'white',
    paddingVertical: 10,
  },
});

export default Sidebar;
