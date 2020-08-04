import { createSelector } from "reselect";

const selectUser = (state) => state.user;

export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);

const selectLoggedIn = (state) => state.user;

export const selectSuccessLog = createSelector(
  [selectLoggedIn],
  (user) => user.loggedInSuccess
);
