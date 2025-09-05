import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: "June - August 2025",
      title: "Johns Hopkins Applied Physics Laboratory | Software Engineer Intern",
      description: [
        "Engineered <b>GitLab</b> <b>CI/CD</b> pipelines using <b>Node.js</b> with integrated <b>Fortify</b> <b>SAST</b> and <b>DAST</b> scans, cutting manual build time by <b>65%</b> while enforcing secure, production-ready deployments",
        "Implemented <b>25+</b> frontend unit and integration tests for a <b>Vue.js</b> GUI integrated with <b>RESTful backend APIs</b> using <b>TypeScript</b>, <b>Jest</b>, and <b>AstroUX</b>, boosting UI code coverage by <b>40%</b> and enabling rapid regression detection",
        "Developed a <b>Python</b> tool leveraging <b>NetworkX</b>, <b>graph algorithms</b>, <b>YAML</b>-defined scenarios, and <b>Docker</b>-based <b>GNS3</b> with <b>iPerf</b> traffic simulation, validated using <b>Wireshark</b>, to optimize mission-critical <b>C3 network topologies</b>, improving performance by <b>50%</b>",
        "Validated telemetry dashboards for <b>RF signal processing</b>, increasing observability by <b>45%</b> and reducing diagnosis time by <b>35%</b>"
      ],
      expanded: false,

    },
    {
      date: "January - April 2025",
      title: "NYC Administration for Children's Services | Wireless Asset Management Intern",
      description: [
        "Automated reporting pipelines with <b>Excel</b> and <b>Exchange</b> integrations, increasing inventory data accuracy by <b>25%</b> and reducing manual reporting time by <b>20 hours</b> monthly",
        "Orchestrated lifecycle tracking for <b>100+ wireless devices</b> using <b>Excel</b> and asset management tools, improving data integrity by <b>28%</b> through automated validation workflows and structured audits"
      ],
      expanded: false,

    },
    {
      date: "June - August 2024",
      title: "Consolidated Edison | Network Engineer Intern",
      description: [
        "Designed a <b>Clipboard API</b> using <b>JavaScript, HTML,</b> and <b>CSS</b>, eliminating manual copying tasks for internal network documentation and conserving <b>80+ hours</b> per year for team members",
        "Developed a <b>PowerShell</b> script to check for <b>100+</b> broken links and created a detailed <b>CSV report</b> with <b>Excel</b>, refining site navigation and saving <b>150+ hours</b> of maintenance time annually",
        "Applied <b>Git</b> protocols for <b>version control</b> and <b>code updates</b>, preventing <b>$1,000</b> in annual costs by avoiding deployment mistakes",
        "Streamlined network troubleshooting by reducing <b>12 hours</b> of team effort on critical issues through identifying and labeling unlabeled circuits, configuring <b>Cisco routers</b> and <b>static routing</b> using <b>PuTTY</b>, and applying <b>OSI model principles</b>",
        "Selected from a pool of <b>50+</b> individuals as <b>Harlem YMCA Bai</b> intern for Con Edison"
      ],
      expanded: false,
    },
    {
      date: "June - August 2023",
      title: "NYC Department of Social Services | Software Engineer Intern",
      description: [
        "Enhanced <b>Salesforce</b> and <b>Excel</b> workflows, cutting <b>$10,000</b> in annual costs and elevating data accuracy by <b>60%</b> across departments",
        "Resolved <b>200+</b> technical issues for end-users, including software installation and configuration, achieving a <b>95% satisfaction rate</b>",
        "Revamped ticketing systems to track <b>120+</b> incidents, accelerating resolution time by <b>15 minutes</b> and supporting IT infrastructure",
        "Collaborated with engineering and product teams to optimize document systems, expediting document processing by <b>2 hours per project</b>"
      ],
      expanded: false,
    },
    {
      date: "June - August 2022",
      title: "The Salvation Army Astoria Corps Community Center | Tech Analyst",
      description: [
        "Optimized document duplication protocols, securing <b>100+</b> client signatures, and raised organizational productivity by processing documents <b>30%</b> faster",
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
