import React, {useCallback, useRef} from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';

import BottonSheet from '../components/BottonSheet';

export default function BottomSheetTutorialScreen({navigation}) {
  const ref = useRef(null);
  const onPress = useCallback(() => {
    const isActive = ref.current.isActive();
    if (isActive) {
      ref.current.scrollTo(0);
    } else {
      ref.current.scrollTo(-200);
    }
  }, []);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onPress} />
      <BottonSheet ref={ref}>
        <View style={{flex: 1, backgroundColor: 'orange'}} />
      </BottonSheet>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    borderRadius: 25,
    aspectRatio: 1,
    backgroundColor: 'white',
    opacity: 0.6,
  },
});
