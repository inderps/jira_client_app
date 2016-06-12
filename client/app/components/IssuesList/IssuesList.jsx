import React, { PropTypes } from 'react';
import classNames from 'classnames';

function IssuesList(props) {
  function labelClass(status) {
    if (status === 'completed') {
      return 'label-success';
    }
    return 'label-warning';
  }

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
          {
            props.issues.toJS().map((issue, index) =>
              (
                  <tr key={index}>
                    <td>{issue.title}</td>
                    <td>{issue.environment}</td>
                    <td>
                      <span className={classNames('label', labelClass(issue.status))}>
                        {issue.status}
                      </span></td>
                    <td>{issue.jira_issue_id}</td>
                  </tr>
              )
            )
          }
        </tbody>
      </table>
    </div>
  </div>);
}

IssuesList.propTypes = {
  issues: PropTypes.object,
};

export default IssuesList;
