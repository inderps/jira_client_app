import { SET_TITLE, SET_ENVIORNMENT,
         CLEAR_FIELDS, RELOAD_ISSUES } from './../constants/action-constants';

export function setTitle(title) {
  return {
    type: SET_TITLE,
    title,
  };
}

export function setEnvironment(environment) {
  return {
    type: SET_ENVIORNMENT,
    environment,
  };
}

export function clearFields() {
  return {
    type: CLEAR_FIELDS,
  };
}

export function createIssue() {
  return (dispatch, getState) => {
    fetch('/issues', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: getState().get('title'),
        environment: getState().get('environment'),
      }),
    }).then(response => response.json()).then(data => {
      dispatch({
        type: RELOAD_ISSUES,
        issues: data.issues,
        autoRefreshFlag: data.auto_refresh_flag,
      });
    });
    dispatch(clearFields());
  };
}

export function reloadIssues() {
  return (dispatch) => {
    fetch('/issues').then(response => response.json()).then(data => {
      dispatch({
        type: RELOAD_ISSUES,
        issues: data.issues,
        autoRefreshFlag: data.auto_refresh_flag,
      });
    });
  };
}
