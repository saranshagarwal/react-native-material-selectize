'use strict';

import React from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

export default class ReactNativeChip extends React.PureComponent {
  static defaultProps = {
    onClose: () => {},
    text: ''
  };

  constructor(props) {
    super(props);
    this.isIOS = Platform.OS === 'ios';
  }

  render() {
    const { iconStyle, onClose, style, text } = this.props;

    return (
        <View style={[styles.root, style]}>
          <View style={styles.container}>
            <Text style={styles.text} numberOfLines={1}>
              {text}
            </Text>
            <TouchableOpacity
                style={[styles.iconWrapper, iconStyle]}
                onPress={onClose}>
              <Image style={[
                styles.icon,
                this.isIOS ? styles.iconIOS : styles.iconAndroid
              ]} source={require('./images/Close.png')}/>

            </TouchableOpacity>
          </View>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderWidth:1,
    borderColor: '#ADADAD',
    height: 32,
    marginRight: 8,
    paddingRight:4,

  },
  container: {
    flexDirection: 'row',
    overflow: 'hidden',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  text: {
    color: 'rgba(0, 0, 0, 0.87)'
  },
  iconWrapper: {

    marginLeft: 4,
    justifyContent: 'center',
    alignItems: 'center'
  },
  icon: {
    textAlign: 'center',
    color: '#e0e0e0'
  },
  iconIOS: {
    fontSize: 14
  },
  iconAndroid: {
    fontSize: 13,
    lineHeight: 15
  }
});
