import React, { PropTypes } from 'react'

import FormattedEndTime from '../FormattedEndTime'
import MeetingUrl from '../MeetingUrl'
import StateHeading from '../StateHeading'
import StateWrapper from '../StateWrapper'

const propTypes = {
  endTime: PropTypes.string,
  meetingUrl: PropTypes.string,
  subject: PropTypes.string.isRequired,
}

const Booked = ({ endTime, meetingUrl, subject }) => {
  return (
    <StateWrapper booked>
      <FormattedEndTime endTime={endTime} />
      <StateHeading>{subject}</StateHeading>
      <MeetingUrl meetingUrl={meetingUrl} />
    </StateWrapper>
  )
}

Booked.propTypes = propTypes

export default Booked
