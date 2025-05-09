import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "June - August 2025",
      title: "Johns Hopkins University Applied Physics Laboratory | Software Engineer Intern",
      description: [
        "Incoming Software Engineer Intern for Summer 2025"
      ],
      expanded: false,

    },
    {
      date: "January - April 2025",
      title: "NYC Administration for Children's Services | Wireless Asset Management Intern",
      description: [
        "Automated inventory reports by integrating <b>Excel</b>, <b>Outlook</b>/<b>Exchange</b>, and asset management systems, improving tracking accuracy and reducing administrative workload by <b>25%</b>",
        "Administered an inventory of <b>100+ wireless assets</b> as part of the mobile technology team, overseeing device assignments, returns, and lifecycle management, minimizing discrepancies by <b>30%</b> through targeted data-driven updates"
      ],
      expanded: false,

    },
    {
      date: "June - August 2024",
      title: "Consolidated Edison | Network Engineer Intern",
      description: [
        "Selected from a pool of <b>50+</b> individuals as <b>Harlem YMCA Bai</b> intern for Con Edison",
        "Architected and crafted a <b>Clipboard API</b> using <b>JavaScript, HTML,</b> and <b>CSS</b>, eliminating manual copying tasks and conserving about <b>20 minutes</b> daily for team members",
        "Developed a <b>PowerShell</b> script to check for <b>100+</b> broken links and created a detailed <b>CSV report</b> with <b>Excel</b>, refining site navigation and saving <b>15 hours</b> of maintenance time monthly",
        "Facilitated the identification of unlabeled circuits, applying <b>OSI model</b> principles to streamline network troubleshooting and reducing <b>12 hours</b> of team effort during critical issues",
        "Applied <b>Git</b> protocols for <b>version control</b> and <b>code updates</b>, minimizing integration errors and avoiding <b>$1,000</b> in annual costs by preventing costly deployment mistakes"
      ],
      expanded: false,
    },
    {
      date: "June - August 2023",
      title: "NYC Department of Social Services | IT Help Desk",
      description: [
        "Spearheaded a team of <b>10+</b> employees to train new hires in on-site analysis and corrective measures, maximizing team capabilities by accelerating task completion time by <b>15 minutes per task</b>",
        "Resolved <b>200+</b> customer inquiries by managing inbound calls and deploying solutions, attaining a <b>95% satisfaction rate</b>",
        "Collaborated with cross-functional teams to meet and exceed critical document deadlines, expediting document completion speed by <b>2 hours per project</b>",
        "Leveraged <b>Salesforce</b> and <b>Excel</b> to ameliorate operations, cutting <b>$10,000</b> in annual costs and reinforcing workflow competency"
      ],
      expanded: false,
    },
    {
      date: "June - August 2022",
      title: "The Salvation Army Astoria Corps Community Center | Tech Analyst",
      description: [
        "Optimized document duplication protocols, securing <b>100+</b> client signatures and raised organizational productivity by processing documents <b>30%</b> faster",
        "Revamped operational procedures to elevate customer service, producing <b>50+</b> additional satisfied members per month",
        "Addressed <b>300+</b> technical queries with swift support, generating <b>$5,000</b> in annual savings and improving customer service ratings by <b>10%</b>",
        "Managed appointment scheduling and client interactions, shortening wait times by <b>20 minutes</b> per appointment and upgrading effectiveness",
      ],
      expanded: false,
    },
    {
      date: "June - August 2021",
      title: "Hellenic American Neighborhood Action Committee | Associate",
      description: [
        "Won a stock market simulation contest with a <b>36% ROI</b>, achieving a top performance among <b>25+</b> participants",
        "Transformed company branding, boosting customer engagement through <b>strategic positioning</b> and <b>market outreach</b>, adding <b>150+</b> new clients</b>",
        "Directed financial management, navigating complex challenges and making decisions that augmented financial performance, increasing profit by <b>$15,000</b> annually",
        "Executed <b>robust business plans</b> and <b>marketing strategies</b>, resulting in a <b>40%</b> expansion in market share and a <b>30%</b> growth in revenue"
      ],
      expanded: false,
    },
    {
      date: "June - August 2020",
      title: "Hellenic American Neighborhood Action Committee | Intern",
      description: [
        "Implemented multiple pandemic-related client storyboards and identified solutions that advanced client satisfaction by <b>20%</b> and incremented client engagement by <b>30%</b>",
        "Introduced technology solutions to revitalize team processes, reinvigorating overall efficiency, liberating <b>20 hours per month</b>",
        "Administered group projects, driving timely completion and amplifying teamwork, culminating in a <b>25%</b> improvement in productivity",
        "Trained coworkers to enhance their knowledge and conflict resolution skills, which led to a <b>20%</b> rise in team collaboration",
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
