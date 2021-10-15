/*
 * This function returns time in mins:seconds format.
 * @param _time is of type number.
 */
export const calculateTime = (_time) => {
  let mins = 0;
  let seconds = 0;
  mins = parseInt(_time / 60, 10);
  seconds = ("0" + (parseInt(_time) % 60)).slice(-2);
  return `${mins}:${seconds}`;
};
