import isEmpty from "lodash/isEmpty"
import moment from "moment"
import PropTypes from "prop-types"
import React from "react"

const propTypes = {
  timestamp: PropTypes.string,
  className: PropTypes.string,
}

const FormattedTime = ({ timestamp }) => {
  if (isEmpty(timestamp)) return null

  const formattedTime = moment(timestamp).format("h:mm A")

  return <span>{formattedTime}</span>
}

FormattedTime.propTypes = propTypes

export default FormattedTime
