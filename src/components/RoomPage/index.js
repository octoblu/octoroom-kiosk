import _ from 'lodash'
import React, { PropTypes } from 'react'

import BackgroundVideo from '../../components/BackgroundVideo/'
import DashboardFooter from '../../components/DashboardFooter/'
import DashboardHeader from '../../components/DashboardHeader/'
import RoomState from '../../components/RoomState/'

import ZooidSpinner from 'zooid-spinner'

import styles from './styles.css'

const propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundVideoUrl: PropTypes.string,
  currentMeeting: PropTypes.object,
  currentTime: PropTypes.string,
  nextMeeting: PropTypes.object,
  name: PropTypes.string,
  loading: PropTypes.bool,
}

const defaultProps = {}

const Loading = ({loading}) => {
  const classes = [ styles.spinner ]
  if(!loading) classes.push(styles.hidden)

  return <ZooidSpinner className={classes.join(' ')} />
}

const RoomPage = (props) => {
  const {
    backgroundImageUrl,
    backgroundVideoUrl,
    currentMeeting,
    currentTime,
    nextMeeting,
    name,
    loading,
  } = props

  if (_.isEmpty(currentTime)) return null

  return (
    <div className={styles.root}>
      <DashboardHeader name={name} />
      <BackgroundVideo imageUrl={backgroundImageUrl} videourl={backgroundVideoUrl} />
      <div>
        <RoomState currentMeeting={currentMeeting} nextMeeting={nextMeeting} />
        <Loading loading={loading} />
      </div>
      <DashboardFooter currentTime={currentTime} url={_.get(currentMeeting, 'meetingUrl')}/>
    </div>
  )
}

RoomPage.propTypes    = propTypes
RoomPage.defaultProps = defaultProps

export default RoomPage
