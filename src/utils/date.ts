// export default function normalDate(index:number){
//   let curr = new Date;
//   let first = curr.getDate();
//   let lastDay = first - index; 
//   let day = new Date(curr.setDate(lastDay));
//   let dd = day.getDate();
//   let mm = day.getMonth() + 1;
//   let yyyy = day.getFullYear();
//   if (dd < 10) {
//     dd = '0' + dd;
//   }
//   if (mm < 10) {
//     mm = '0' + mm;
//   }
//   return day = dd + '-' + mm + '-' + yyyy;
// }