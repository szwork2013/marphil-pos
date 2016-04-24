import { HANDLE_NAV, TAB_INDEX } from '../actions/navigation';

const init = {
  tabIndex: 0,
  isNavOpen: false
};

export default function navigation(state = init, action) {
  switch (action.type) {
    case HANDLE_NAV:
      return {
        tabIndex: state.tabIndex,
        isNavOpen: !state.isNavOpen
      };
    case TAB_INDEX:
      return {
        tabIndex: action.index,
        isNavOpen: state.isNavOpen
      };
    default:
      return state;
  }
}
