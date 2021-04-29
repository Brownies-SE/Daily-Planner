$("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

// $(".btn").on("click", function () {
//   var id = $(this).attr("data-id");
//   var text = $("#" + id).val();
//   localStorage.setItem(id, text);
// });

$(".btn").on("click", function () {
  var text = $(this).siblings(".id").val();
  var time = $(this).parent().attr("id");
  localStorage.setItem(time, text);
});

$("#hour-09 .id").val(localStorage.getItem("hour-09"));
$("#hour-10 .id").val(localStorage.getItem("hour-10"));
$("#hour-11 .id").val(localStorage.getItem("hour-11"));
$("#hour-12 .id").val(localStorage.getItem("hour-12"));
$("#hour-01 .id").val(localStorage.getItem("hour-01"));
$("#hour-02 .id").val(localStorage.getItem("hour-02"));
$("#hour-03 .id").val(localStorage.getItem("hour-03"));
$("#hour-04 .id").val(localStorage.getItem("hour-04"));
$("#hour-05 .id").val(localStorage.getItem("hour-05"));

var currentHour = moment().hour();

var time = [9, 10, 11, 12, 13, 14, 15, 16, 17];

for (i = 0; i < time.length; i++) {
  if (currentHour < time[i]) {
    $("#" + i).addClass("future");
  } else if (currentHour > time[i]) {
    $("#" + i).addClass("past");
  } else {
    $("#" + i).addClass("present");
  }
}
