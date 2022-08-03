/* display current day at top of page */

var currentDate = moment().day(0).utcOffset(7 * 60).format("dddd, MMMM D, YYYY");

$("#currentDay").text(currentDate);

/* FUNCTIONS */

// create time block row elements
var createRows = function() {
    // create elements that make up task item
    for (var i=9; i<18; i++) {
        var newRow = $("<div>")
            .addClass("row");

        var hourDiv = $("<div>")
            .addClass("col-2");
        
        var timeH5 = $("<h5>")
            .addClass("text-right p-1 hour")
            .text(i + ":00");

        var textareaDiv = $("<div>")
            .addClass("col-8");

        var textArea = $("<textarea>")
            .addClass("task-box");

        var btnDiv = $("<div>")
            .addClass("col-2");

        var saveBtn = $("<button>")
            .addClass("saveBtn");

        var saveIcon = $("<span>")
            .addClass("oi oi-pin");

        hourDiv.append(timeH5);
        textareaDiv.append(textArea);
        saveBtn.append(saveIcon);
        btnDiv.append(saveBtn);
        newRow.append(hourDiv);
        newRow.append(textareaDiv);
        newRow.append(btnDiv);
        $(".container").append(newRow);
    };

};

// create task elements
// var createTasks = function() {
//     // create elements that make up task item
//     var taskP = $("<p>")
//         .addClass("m-1")
//         .text();

//     $(".task-box").append(taskP);
// };

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
$(".saveBtn").on("click", function() {
    saveTasks();
});

// save task function
var saveTasks = function() {
    console.log("saveTasks was called");
};

/* CALL FUNCTIONS */

// create initial time block rows
createRows();


//// TESTING createTask ////
// createTasks();