/* display current day at top of page */

var currentDate = moment().utcOffset(-7).format("dddd, MMMM D, YYYY");

$("#currentDay").text(currentDate);

/* FUNCTIONS */

// make sure rows gen before get storage - put inside create rows

// create time block row elements
var createRows = function() {
    // create elements that make up task item
    for (var i=9; i<18; i++) {
        var newRow = $("<div>")
            .addClass("row");

        var hourDiv = $("<div>")
            .addClass("col-2 hrDiv");
        
        var timeH5 = $("<h5>")
            .addClass("text-right p-1 hour")
            .text(i + ":00");

        var textareaDiv = $("<div>")
            .addClass("col-8");

        var textArea = $("<textarea>")
            .addClass("task-box")
            .attr("id", "text-" + i); // add unique id

        var btnDiv = $("<div>")
            .addClass("col-2 btnDiv");

        var saveBtn = $("<button>")
            .addClass("saveBtn")
            .attr("id", "btn-" + i); // add unique id

        var saveIcon = $("<span>")
            .addClass("oi oi-pin");

        colorTask(textArea, i);

        hourDiv.append(timeH5);
        textareaDiv.append(textArea);
        saveBtn.append(saveIcon);
        btnDiv.append(saveBtn);
        newRow.append(hourDiv);
        newRow.append(textareaDiv);
        newRow.append(btnDiv);
        $(".container").append(newRow);

        // load saved tasks
        loadTask(textArea, i);

    };

};

// change bg color based on time
var colorTask = function(textBox, index) {

    var time = moment().utcOffset(-7).format("H");

    $(textBox).removeClass("past present future");

    if (index == time) {
        $(textBox).addClass("present");
    }
    else if (index > time) {
        $(textBox).addClass("future");
    }
    else if (index < time) {
        $(textBox).addClass("past");
    }
    else {
        console.log("color coding testing...");
    }
};

// load / get from storage function
var loadTask = function(textArea, index) {

    textArea.val(localStorage.getItem("hour" + index));

};

// save tasks function
var saveTask = function(thisBtn) {
    var taskText = $(thisBtn).parent('.btnDiv').parent('.row').children('.col-8').children('.task-box').val();
    var taskTime = $(thisBtn).parent('.btnDiv').parent('.row').children('.hrDiv').children('.hour').text();

    if (taskTime.length === 5) {
        var newTime = taskTime[0] + taskTime[1];
    }
    else {
        var newTime = taskTime[0];
    }

    localStorage.setItem("hour" + newTime, taskText);
    
};

// when we click on a task
$(".task-box").on("click", "p", function() {
    var text = $(this)
        .text()
        .trim();

    var textInput = $("<textarea>")
        .addClass("task-box")
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
for (var i=9; i<18; i++) {
    $(".container").on("click", "#btn-" + i, function() {
        saveTask(this);
    });
};

/* CALL FUNCTIONS */

// create initial time block rows
createRows();

// call coloring tasks after rows are created
colorTask();