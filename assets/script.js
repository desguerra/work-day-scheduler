var currentDate = moment().day(0).utcOffset(7 * 60).format("dddd, MMMM D, YYYY");

$("#currentDay").text(currentDate);