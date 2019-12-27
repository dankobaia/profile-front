import { createReducer, createActions } from "reduxsauce";

export const { Types, Creators } = createActions({
  unlockScroll: [],
  fixMenu: []
});

const INITIAL_STATE = {
  scrollLocked: true,
  fixedMenu: false
};

const unlockScroll = (state = INITIAL_STATE, action) => {
  document.getElementsByTagName("body")[0].style.overflow = "auto";
  return { ...state, scrollLocked: false };
};

const fixMenu = (state = INITIAL_STATE, action) => {
  return { ...state, fixedMenu: true };
};

export default createReducer(INITIAL_STATE, {
  [Types.UNLOCK_SCROLL]: unlockScroll,
  [Types.FIX_MENU]: fixMenu
});
