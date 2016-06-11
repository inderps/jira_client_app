import React, { PropTypes } from 'react';

function IssuesList() {
  return (<div className="row issue-list">
    <div className="col-md-12">
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Title</th>
            <th>Environment</th>
            <th>Status</th>
            <th>Jira Issue Id</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Title</td>
            <td>Title</td>
            <td><span className="label label-primary">New</span></td>
            <td>Title</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>);
}

IssuesList.propTypes = {
  actions: PropTypes.object,
};

export default IssuesList;
