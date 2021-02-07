import { useState } from 'react'

const Table = () => {
    const [applications, setApplications] = useState([
        {
            id: "1278463",
            jobTitle: "Frontend Engineer",
            company: "Figma",
            applicationDate: new Date('05 October 2011 14:48 UTC').toISOString(),
            link: "http://www.figma.com",
            companyResponse: "rejected",
            followedUp: false,
            connection: "Cam Stoney",
            notes: "hiring manager is Dan Clevenger, dan@figma.com"
        },
        {
            id: "8478455",
            jobTitle: "Mentor",
            company: "The Collab Lab",
            applicationDate: new Date('05 October 2018 3:05 UTC').toISOString(),
            link: "https://the-collab-lab.codes/",
            companyResponse: null,
            followedUp: true,
            connection: null,
            notes: "job posting places heavy focus on UX"
        }
    ])

    return (
        <table>
            <tr>
                <th>Title</th>
                <th>Company</th>
                <th>Date</th>
                <th>Link</th>
                <th>Response</th>
                <th>Followed Up</th>
                <th>Connection</th>
                <th>Notes</th>
            </tr>
            {applications.map(app => {
                return (
                    <tr key={app.id}>
                        <td>{app.jobTitle}</td>
                        <td>{app.company}</td>
                        <td>{app.applicationDate}</td>
                        <td>{app.link}</td>
                        <td>{app.companyResponse}</td>
                        <td>{app.followedUp}</td>
                        <td>{app.connection}</td>
                        <td>{app.notes}</td>
                    </tr>
                )
            })}
        </table>
    )
}

export default Table;