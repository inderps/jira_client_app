import React, { PropTypes } from 'react';
import classNames from 'classnames';
import './CreateIssueForm.css';

function CreateIssueForm(props) {
  const disabledBtn = props.title === '' || props.environment === '';
  return (<div className="row create-issue-form">
    <div className="col-md-12">
      <form className="form-inline">
        <div className="form-group">
          <label className="sr-only">Title</label>
          <input type="text" className="form-control"
            onChange={event => props.actions.setTitle(event.target.value)}
            placeholder="Title"
            value={props.title}
          />
        </div>
        <div className="form-group">
          <label className="sr-only">Environment</label>
          <input type="text" className="form-control"
            onChange={event => props.actions.setEnvironment(event.target.value)}
            placeholder="Environment"
            value={props.environment}
          />
        </div>
        <button type="submit"
          className={classNames('btn', 'btn-default', { disabled: disabledBtn })}
          onClick={(ev) => {ev.preventDefault(); props.actions.createIssue();}}
        >
          Create Issue
        </button>
      </form>
    </div>
  </div>);
}

CreateIssueForm.propTypes = {
  actions: PropTypes.object,
  title: PropTypes.string,
  environment: PropTypes.string,
};

export default CreateIssueForm;
