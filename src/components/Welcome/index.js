import React from 'react'
import Flexbox from 'react-flexbox'

import Heading from '../Heading/'
import BookingIndicator from'../BookingIndicator/'

import styles from './styles.css'

const Welcome = () => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>Welcome!</Heading>
      <BookingIndicator />
    </Flexbox>
  )
}

export default Welcome
