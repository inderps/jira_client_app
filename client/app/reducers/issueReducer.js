import { Map, List } from 'immutable';
import { CREATE_ISSUE, RELOAD_ISSUES } from './../constants/action-constants';

const initialState = new Map({
  title: '',
  environment: '',
  shouldReloadIssues: false,
  issues: new List([]),
});

function createIssue() {

}

function reloadIssues() {

}

export default function (state = initialState, action) {
  switch (action.type) {
    case CREATE_ISSUE:
      return createIssue();
    case RELOAD_ISSUES:
      return reloadIssues();
    default:
      return state;
  }
}
