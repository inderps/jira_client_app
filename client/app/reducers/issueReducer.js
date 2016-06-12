import { Map, List } from 'immutable';
import { SET_TITLE, SET_ENVIORNMENT,
         CLEAR_FIELDS, RELOAD_ISSUES } from './../constants/action-constants';

const initialState = new Map({
  autoRefreshFlag: false,
  title: '',
  environment: '',
  issues: new List([]),
});

function reloadIssues(state, issues, autoRefreshFlag) {
  return state.set('issues', new List(issues)).set('autoRefreshFlag', autoRefreshFlag);
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_TITLE:
      return state.set('title', action.title);
    case SET_ENVIORNMENT:
      return state.set('environment', action.environment);
    case CLEAR_FIELDS:
      return state.set('title', '').set('environment', '');
    case RELOAD_ISSUES:
      return reloadIssues(state, action.issues, action.autoRefreshFlag);
    default:
      return state;
  }
}
