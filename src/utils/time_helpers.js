import moment from 'moment';

const time_helpers = {
  formatTime: (time) => {
    return moment(time).format('LT')
  }
}

export default time_helpers;
