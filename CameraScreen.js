import React, { useRef } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { RNCamera } from 'react-native-camera';

function CameraScreen() {
  const cameraRef = useRef(null);

  const handleCapture = async () => {
    if (cameraRef.current) {
      const options = { quality: 0.5, base64: true };
      const data = await cameraRef.current.takePictureAsync(options);
      console.log('Captured photo data:', data.base64);
      // You can send the captured image data to a server or save it locally as needed.
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <RNCamera
        style={{ flex: 1 }}
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
      >
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end' }}>
          <TouchableOpacity onPress={handleCapture} style={{ marginBottom: 20 }}>
            <Text style={{ fontSize: 20, color: 'white' }}>Capture Photo</Text>
          </TouchableOpacity>
        </View>
      </RNCamera>
    </View>
  );
}

export default CameraScreen;
