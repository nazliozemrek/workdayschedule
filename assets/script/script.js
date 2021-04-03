
//by using moment and format get the todays date and put the text in header
const today = moment().format("ddd,MMMM Do YYYY");;
const CurrentDate = $('#currentDay');
CurrentDate.text(today);

// start to timeShower function when the document is ready
$(document).ready(function () {
    //add event listener to saveBtn
$(".saveBtn").on("click",function(){
    const text = $(this).siblings(".description").val();
    const time =$(this).parent().attr("id");
    // store the input value by user
    localStorage.setItem(time,text);
})

function timeShower (){
    // get currenthour value with moment().hour();
    const currentHour = moment().hour();
    
    $(".time-block").each(function(){
    // by spilitting id attribute and turning to string in to integer appoint a value to calendarHour
    const calendarHour= parseInt($(this).attr("id").split("hour")[1]);
    // compare the currenthour and calendar hour and color code the time blocks
    if(calendarHour < currentHour){
        $(this).removeClass("future"); 
        $(this).removeClass("present");
        $(this).addClass("past");
    }else if(calendarHour===currentHour){
        $(this).removeClass("future"); 
        $(this).removeClass("past");
        $(this).addClass("present");
    }else {
        $(this).removeClass("present"); 
        $(this).removeClass("past");
        $(this).addClass("future");
    }
    
    })
}
// to get the items from localstorage;

$("#hour8 .description").val(localStorage.getItem("hour8"));
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));
//call the timeShower function
timeShower();
})

    
