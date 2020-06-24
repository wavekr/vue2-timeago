export default {
  short: {
    now: '조금전',
    sec:'초',
    min: '분',
    hour: '시간',
    day: '일',
  },
  long: {
    now: '조금전',
    sec: time => formatToLongString(time, '초전'),
    min: time => formatToLongString(time, '분전'),
    hour: time => formatToLongString(time, '시간전'),
    day: time => formatToLongString(time, '일전'),
  }
}
