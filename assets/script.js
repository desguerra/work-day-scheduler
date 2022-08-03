/* display current day at top of page */

var currentDate = moment().day(0).utcOffset(7 * 60).format("dddd, MMMM D, YYYY");

$("#currentDay").text(currentDate);

/* FUNCTIONS */

// create task elements
var createTasks = function(taskText) {
    // create elements that make up task item
    var taskP = $("<p>")
        .addClass("m-1")
        .text(taskText);

    $("#task-box").append(taskP);
};

// when we click on a task
$(".task-box").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("form-control")
        .val(text);

    // replace <p> element with <textarea> element created above
    $(this).replaceWith(textInput);
    // auto focus textInput
    textInput.trigger("focus");

});

// blur event will trigger as soon as the user interacts with 
// anything other than the <textarea> element
$(".task-box").on("blur", "textarea", function() {
    // get the textarea's current value/text
    var text = $(this)
        .val()
        .trim();

    // recreate p element to convert back to p element
    var taskP = $("<p>")
    .addClass("m-1")
    .text(text);

    // replace textarea with p element
    $(this).replaceWith(taskP);
});

// when user clicks the save button
$("#save-btn").on("click", function() {
    saveTasks();
});

// save task function
var saveTasks = function() {
    console.log("saveTasks was called");
};

//// TESTING createTask ////
createTasks("hello");