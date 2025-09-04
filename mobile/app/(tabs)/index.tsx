import React, { useState } from 'react';
import { 
  StyleSheet, 
  Text, 
  View, 
  SafeAreaView, 
  useWindowDimensions, 
  Alert,
  Platform,
  Modal,
  Pressable
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Button } from '../../components/ui/button';
import { getColor } from '../../lib/utils';

export default function HomeScreen() {
  const { height } = useWindowDimensions();
  const [modalVisible, setModalVisible] = useState(false);
  
  const showHelloZhen = () => {
    if (Platform.OS === 'web') {
      // For web, use modal component
      setModalVisible(true);
    } else {
      // For mobile, use native Alert
      Alert.alert('Hello zhen');
    }
  };
  
  return (
    <SafeAreaView style={styles.safeArea}>
      <LinearGradient
        colors={[getColor('background'), getColor('muted')]}
        style={[styles.gradient, { minHeight: height }]}
      >
        <View style={styles.container}>
          <View style={styles.content}>
            <Text style={styles.heading}>
              Hello World!
            </Text>
            <Text style={styles.paragraph}>
              Welcome to your new React Native application built with Expo and TypeScript.
            </Text>
            <View style={styles.buttonContainer}>
              <Button 
                size="lg" 
                style={styles.button} 
                textStyle={styles.buttonText}
                onPress={() => showHelloZhen()}
              >
                Click Me
              </Button>
            </View>
            
            {/* Get Started button */}
            <View style={[styles.buttonContainer, { marginTop: 12 }]}>
              <Button size="lg" style={styles.button} textStyle={styles.buttonText}>
                Get Started
              </Button>
            </View>
          </View>
        </View>
        
        {/* Modal for web platform */}
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(false);
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Hello zhen</Text>
              <Pressable
                style={[styles.modalButton]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalButtonText}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </LinearGradient>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  content: {
    maxWidth: 600,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  heading: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 24,
    textAlign: 'center',
    color: getColor('foreground'),
  },
  paragraph: {
    fontSize: 18,
    marginBottom: 32,
    textAlign: 'center',
    color: getColor('mutedForeground'),
  },
  buttonContainer: {
    // For animation in future if needed
  },
  button: {
    paddingVertical: 12,
  },
  buttonText: {
    fontSize: 18,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    minWidth: 250,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '500',
  },
  modalButton: {
    backgroundColor: getColor('primary'),
    borderRadius: 8,
    padding: 10,
    elevation: 2,
    minWidth: 100,
  },
  modalButtonText: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});