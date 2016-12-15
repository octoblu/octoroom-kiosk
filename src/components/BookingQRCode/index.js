import _ from 'lodash'
import React, { PropTypes } from 'react'
import QRCode from 'rc-qrcode'
import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
}

const BookingQRCode = ({ clientUrl }) => {
  if (_.isEmpty(clientUrl)) return null

  return (
    <div className={styles.root}>
      <QRCode
        renderer="auto"
        content={clientUrl}
        scale="5"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

BookingQRCode.propTypes = propTypes

export default BookingQRCode
