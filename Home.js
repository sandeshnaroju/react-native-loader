/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {Component} from 'react'
import {View, StyleSheet, ScrollView} from 'react-native'
import {Button, Text, Overlay, Image} from 'react-native-elements'
import Header from '../../components/Header'
import OSpinner from '../../components/OSpinner'
export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: false,
    }
  }

  showSpinner = () => {
    this.setState({
      isLoading: true,
    })
  }
  closeOverlay = () => this.setState({isLoading: false})

  render () {
    return (
      <View style={styles.container}>
        <Header title='Home' icon='home' navigation={this.props.navigation} />
        <Text style={styles.textStyle}>This is Done</Text>
        <Button title='loading' onPress={() => this.showSpinner()} />
        <OSpinner
          isLoading={this.state.isLoading}
          closeOverlay={() => this.closeOverlay()}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },

  textStyle: {fontSize: 20, margin: 30, color: '#800460'},
  image: {
    width: 100,
    height: 100,
  },
})
