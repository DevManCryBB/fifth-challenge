var saveButtons = $(".saveBtn");
var timeBlocks = $(".time-block");

function checkTime() {
  var currentTime = dayjs().format("HH");
  console.log(`The Current is: ${currentTime}`);

  for (let i = 0; i < timeBlocks.length; i++) {
    var currentBlock = timeBlocks[i];
    var time = parseInt(currentBlock.id);

    switch (true) {
      case time == currentTime:
        $(currentBlock).addClass("present");
        break;
      case currentTime < time:
        $(currentBlock).addClass("future");
        break;
      default:
        $(currentBlock).addClass("past");
    }
  }
}
console.log(timeBlocks);
checkTime();

// save Button

saveButtons.on("click", function (event) {
  event.preventDefault();
  console.log($(this));
  var blockHour = $(this).parent();
  var hour = blockHour[0].id;
  console.log(blockHour);
  var text = $(blockHour).children("textarea").val();
  localStorage.setItem(hour, JSON.stringify(text));
  console.log({ hour: hour, text: text });
});

$(document).ready(function () {
  for (let i = 0; i < timeBlocks.length; i++) {
    var block = timeBlocks[i];
    var id = timeBlocks[i].id;
    var text = localStorage.getItem(id);
    console.log({ id: id, text: text });
    $(block).children("textarea").val(JSON.parse(text));
  }
});