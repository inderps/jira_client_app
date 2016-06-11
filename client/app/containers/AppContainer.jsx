import React, { PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as IssueActions from './../actions/IssueActions';
import './AppContainer.css';

export default function AppContainer(props) {
  console.log(props);
  return (
    <div className="app-container">
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
