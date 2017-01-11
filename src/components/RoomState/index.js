import _ from 'lodash'
import React, { PropTypes } from 'react'

import Available from '../Available'
import Booked from '../Booked'

const propTypes = {
  currentMeeting: PropTypes.object,
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  currentMeeting: null,
  nextMeeting: null,
}

const RoomState = ({ currentMeeting, nextMeeting }) => {
  if (_.isEmpty(currentMeeting)) return <Available nextMeeting={nextMeeting} />

  let {endTime, meetingUrl, subject} = currentMeeting
  if (_.isEmpty(subject)) subject = 'Meeting'

  return (
    <Booked
      endTime={endTime}
      meetingUrl={meetingUrl}
      subject={subject}
    />
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
