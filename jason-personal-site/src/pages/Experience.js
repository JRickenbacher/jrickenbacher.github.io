import React from 'react'
import {VerticalTimeline, VerticalTimelineElement} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from "@material-ui/icons/Work";

function Experience() {
  const eduBackgroundColor = "#3e497a";
  const eduIconcolor = "#fff";
  const workBackgroundColor = "#e9d35b";
  const workIconcolor = "#fff";

  return (
    <div className='experience'>
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2015 - 2019'
          iconStyle={{background: eduBackgroundColor, color: eduIconcolor}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>South Windsor High School, CT</h3>
          <p> Valedictorian</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: workBackgroundColor, color: workIconcolor }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">4H Camp Staff Member</h3>
          <h4 className="vertical-timeline-element-subtitle">Marlborough, CT</h4>
          <p>Led gymnastics and tennis classes.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2019 - 2023'
          iconStyle={{background: eduBackgroundColor, color: eduIconcolor}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>First Year at Middlebury College, VT</h3>
          <h4 className='vertical-timeline-element-subtitle'>Candidate for Bachelors of Arts</h4>
          <p> Double Major in Math and Computer Science</p>
          <p> Expected Graduation: 2023</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2019"
          iconStyle={{ background: workBackgroundColor, color: workIconcolor }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Schroth Systems Consulting, Inc</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Systems Intern</h4>
          <p>Interfaced directly with clients, building custom database applications.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='2022'
          iconStyle={{background: eduBackgroundColor, color: eduIconcolor}}
          icon={<SchoolIcon />}
        >
          <h3 className='vertical-timeline-element-title'>First Year at Dartmouth College, NH</h3>
          <h4 className='vertical-timeline-element-subtitle'>Candidate for Bachelors of Engineering</h4>
          <p> Dual Degree, Electrical Engineering</p>
          <p> Expected Graduation: 2024</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2022"
          iconStyle={{ background: workBackgroundColor, color: workIconcolor }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Tomtom</h3>
          <h4 className="vertical-timeline-element-subtitle">Software Engineering Intern</h4>
          <p>Created data pipeline for analyzing Tweets live using Twitter's PowerTrack API.</p>
          <p>Developed proof-of-concept weather-alert system.</p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="2023"
          iconStyle={{ background: workBackgroundColor, color: workIconcolor }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Johns Hopkins Applied Physics Laboratory</h3>
          <h4 className="vertical-timeline-element-subtitle">Computer Systems Intern</h4>
          <p>Automated information assurance procedure</p> 
          <p>Began data catalog for searching on handwritten documents.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience