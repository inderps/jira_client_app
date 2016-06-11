import React, { PropTypes } from 'react';
import './CreateIssueForm.css';

function CreateIssueForm() {
  return (<div className="row create-issue-form">
    <div className="col-md-12">
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only">Title</label>
          <input type="text" className="form-control" ref="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <label className="sr-only">Environment</label>
          <input type="text" className="form-control" ref="environment"
            placeholder="Environment"
          />
        </div>
        <button type="submit" className="btn btn-default">Create Issue</button>
      </form>
    </div>
  </div>);
}

CreateIssueForm.propTypes = {
  actions: PropTypes.object,
};

export default CreateIssueForm;
