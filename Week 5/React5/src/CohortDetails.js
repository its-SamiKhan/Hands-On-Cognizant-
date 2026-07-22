import React from 'react';
import styles from './CohortDetails.module.css';

const cohorts = [
  {
    id: 1,
    title: "INTADMDF10 -.NET FSD",
    startDate: "22-Feb-2022",
    status: "Scheduled",
    coach: "Aathma",
    trainer: "Jojo Jose"
  },
  {
    id: 2,
    title: "ADM21JF014 -Java FSD",
    startDate: "10-Sep-2021",
    status: "Ongoing",
    coach: "Apoorv",
    trainer: "Elisa Smith"
  },
  {
    id: 3,
    title: "CDBJF21025 -Java FSD",
    startDate: "24-Dec-2021",
    status: "Ongoing",
    coach: "Aathma",
    trainer: "John Doe"
  }
];

function CohortDetails() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>Cohorts Details</h1>
      <div>
        {cohorts.map(cohort => {
          const isOngoing = cohort.status.toLowerCase() === 'ongoing';
          const titleColor = isOngoing ? 'green' : 'blue';
          return (
            <div key={cohort.id} className={styles.box}>
              <h3 style={{ color: titleColor }}>{cohort.title}</h3>
              <dl>
                <dt>Started On</dt>
                <dd>{cohort.startDate}</dd>
                <dt>Current Status</dt>
                <dd>{cohort.status}</dd>
                <dt>Coach</dt>
                <dd>{cohort.coach}</dd>
                <dt>Trainer</dt>
                <dd>{cohort.trainer}</dd>
              </dl>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CohortDetails;
