import React from "react";
import students from "./students";
import Flag from "./Flag";

function SectionStudents(props) {
  return (
    <div className="SectionStudents">
      <h2>Students</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
            <th>GitHub</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, i) => (
            <tr key={student.githubUsername}>
              <td style={{ color: student.gender === "male" ? "blue" : "red" }}>
                {student.firstName}
              </td>
              <td>
                {/* Render the component Flag with a props.country */}
                <Flag country={student.country} />
              </td>
              <td>
                <a
                  href={"http://github.com/" + student.githubUsername}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {student.githubUsername}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SectionStudents;
