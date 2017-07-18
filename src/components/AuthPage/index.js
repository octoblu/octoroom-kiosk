import PropTypes from "prop-types"
import React from "react"
import ErrorState from "zooid-error-state"
import Spinner from "zooid-spinner"

import styles from "./styles.css"

const propTypes = {
  error: PropTypes.object,
}

const RoomPage = ({ error }) => {
  if (error)
    return (
      <div className={styles.root}>
        <ErrorState
          title="Error"
          description={error.message}
          className={styles.errorstate}
        />
      </div>
    )

  return (
    <div className={styles.root}>
      <Spinner size="large" className={styles.spinner} />
    </div>
  )
}

RoomPage.propTypes = propTypes

export default RoomPage
