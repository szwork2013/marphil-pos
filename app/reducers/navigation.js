import { HANDLE_NAV, TAB_INDEX } from '../actions/navigation';

const init = {
  tabindex: 0,
  leftnav: false
}

export default function navigation(state = init, action) {
  switch (action.type) {
    case HANDLE_NAV:
      return {
        tabindex: state.tabindex,
        leftnav: !state.leftnav 
      };
    case TAB_INDEX:
      return {
        tabindex: action.index,
        leftnav: state.leftnav 
      };
    default:
      return state;
  }
}