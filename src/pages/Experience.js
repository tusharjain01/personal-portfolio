import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon  from '@mui/icons-material/School';
function Experience() {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          date='2011-2017'
          iconStyle={{background:'#3e497a',color : "#fff" }}
          icon={<SchoolIcon/>}
        >
        <h3 className='verttical-timeline-element-title'>Modern Public School, Koderma, Jharkhand</h3>
        <p>Completed High School , Scored 10CGPA</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          date='2017-2019'
          iconStyle={{background:'#3e497a',color : "#fff" }}
          icon={<SchoolIcon/>}
        >
        <h3 className='verttical-timeline-element-title'>PVSS DAV Public School, Koderma, Jharkhand</h3>
        <p>Completed Secondary High School , Scored 84%</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement 
          className='vertical-timeline-element-education'
          date='2020-2024'
          iconStyle={{background:'#3e497a',color : "#fff" }}
          icon={<SchoolIcon/>}
        >
        <h3 className='verttical-timeline-element-title'>Teerthankar Mahaveer University , Moradabad,Uttar Pradesh</h3>
        <p>Pursuing Bachelor's In Technology , Computer Science, Aggregated 80%</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience