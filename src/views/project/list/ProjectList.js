import React, { useState } from "react";
import { Card, CardBody, CardHeader, CardTitle, Table } from "reactstrap";
import { project } from "../../../fackdb/ProjectDb";
const ProjectList = () => {
  const [state, setState] = useState("");
  const [tableData, setTableData] = useState(project);
  return (
    <Card className="m-3 p-2">
      <CardHeader>
        <CardTitle className="text-center">My Project</CardTitle>
      </CardHeader>
      <CardBody>
        <Table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Github/Bitbucket/GitLab Link</th>
              <th>Technology</th>
            </tr>
          </thead>
          <tbody>
            {tableData?.map((project, index) => (
              <tr key={index}>
                <td>{project.name}</td>
                <td>{project.description}</td> <td>{project.projectLink}</td>
                <td>{project.technology.map((i) => i).toString(" , ")}</td>
              </tr>
            ))}
            {/* <tr>
              <td>Project</td>
              <td>Project</td>
              <td>Project</td>
              <td>Project</td>
            </tr> */}
          </tbody>
        </Table>
      </CardBody>
    </Card>
  );
};

export default ProjectList;
