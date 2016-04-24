export const HANDLE_NAV = 'HANDLE_NAV';
export const TAB_INDEX = 'TAB_INDEX';

export function handleNav() {
  return {
    type: HANDLE_NAV
  };
}

export function changeTabIndex(index) {
  return {
    type: TAB_INDEX,
    index
  };
}
