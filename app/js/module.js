export function convertDate(unixTimestamp){
 var months_arr = ['января','февраля','марта','апреля','мая','июня','июля','августа','сентября','октября','ноября','декабря'],
 	date = new Date(unixTimestamp * 1000),
	year = date.getFullYear(),
 	month = months_arr[date.getMonth()],
 	day = date.getDate(),
	convertDate = day + ' ' + month + ' ' + year;
 	return convertDate;
}
