import moment from 'moment';
import { currencySymbols, TOKEN_KEY } from 'services/constants';

const dateFormat = (date, format) => {
  if (date && format) {
    if (date?.lastIndexOf?.('/') === 5) {
      const splitedDate = date.split('/');
      date = `${splitedDate[2]}-${splitedDate[1]}-${splitedDate[0]}`;
    }
    const newDate = new Date(date);
    if (newDate instanceof Date && !isNaN(newDate)) {
      let dateString = moment(newDate).format(format);
      return dateString;
    }
  }
  return '-';
};
const validateEmail = (email) => {
  const pattern = new RegExp(
    /^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
  );
  return pattern.test(email);
};

const formatNumber = (num, currency = 'INR') => {
  if (num) {
    num = parseFloat(num);
    if (parseInt((num + '').split('.')[1])) {
      return (
        <>
          <span style={{ fontFamily: 'Verdana' }}>
            {currencySymbols[currency]}
          </span>
          {parseFloat(num.toFixed(2)).toLocaleString?.()}
        </>
      );
    }
  }
  return (
    <>
      <span style={{ fontFamily: 'Verdana' }}>{currencySymbols[currency]}</span>{' '}
      {(num || 0).toLocaleString?.()}
    </>
  );
};

const setToken = (value) => {
  sessionStorage.setItem(TOKEN_KEY, value);
};

const getToken = () => {
  return sessionStorage.getItem(TOKEN_KEY);
};

export { dateFormat, validateEmail, formatNumber, setToken, getToken };
