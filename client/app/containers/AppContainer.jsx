import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as IssueActions from './../actions/IssueActions';
import CreateIssueForm from './../components/CreateIssueForm/CreateIssueForm';
import IssuesList from './../components/IssuesList/IssuesList';
import './AppContainer.css';

export default function AppContainer(props) {
  return (
    <div className="main-container container">
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Jira Client App</a>
          </div>
        </div>
      </nav>
      <CreateIssueForm
        actions={props.actions}
        title={props.issueStore.get('title')}
        environment={props.issueStore.get('environment')}
      />
      <IssuesList issues={props.issueStore.get('issues')} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    issueStore: state,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(IssueActions, dispatch),
  };
}

AppContainer.propTypes = {
  issueStore: PropTypes.object,
  actions: PropTypes.object,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
