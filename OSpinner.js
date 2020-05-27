/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import {ActivityIndicator} from 'react-native'
import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import {Image, Card, Text, Overlay} from 'react-native-elements'
import PropTypes from 'prop-types'
export default class OSpinner extends Component {
  constructor (props) {
    super(props)
  }

  static propTypes = {
    message: PropTypes.string,
    closeOverlay: PropTypes.func,
  }
  static defaultProps = {
    message: 'Please wait ...',
    isLoading: false,
  }
  closeOverlay = () => {
    this.props.closeOverlay()
  }

  render () {
    return (
      <Overlay
        isVisible={this.props.isLoading}
        onBackdropPress={() => this.closeOverlay()}>
        <View style={styles.overlayContainerStyle}>
          <Image
            source={require('../assets/spinner.gif')}
            style={styles.image}
            transition
          />
          <Text style={styles.textStyle}>{this.props.message}</Text>
        </View>
      </Overlay>
    )
  }
}

const styles = StyleSheet.create({
  image: {
    width: 60,
    height: 60,
  },
  textStyle: {
    fontSize: 16,
    fontFamily: 'CaviarDreams-Bold',
  },
  overlayContainerStyle: {
    width: 250,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
