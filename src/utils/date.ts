export default function normalDate(){
  let today = new Date();
  let dd = today.getDate();
  let mm = today.getMonth() + 1;
  let yyyy = today.getFullYear();
  let day = '';
  let month = '';
  let fullDay = '';
  if (dd < 10) {
    day = '0' + dd;
  } else {
    day = String(dd);
  }
  if (mm < 10) {
    month = '0' + mm;
  } 
  fullDay = day + '-' + month + '-' + yyyy;
  return fullDay;
}