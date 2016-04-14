export const INITIAL_DATA = 'INITIAL_DATA';

export function getInitialData(init) {
  return {
    type: INITIAL_DATA,
    init
  };
}