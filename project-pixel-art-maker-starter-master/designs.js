//global variables
var colorPicker = $('#colorPicker');
var pixelCanvas = $('#pixelCanvas');
var Height = $('#inputHeight');
var Width = $('#inputWidth');

//set values for grid (x, y)
$('#sizePicker').submit( event => {
    event.preventDefault();
    let x = Height.val();
    let y = Width.val();
    pixelCanvas.html('');
    makeGrid(x, y);
    colorSelector();
});

//makes grid
function makeGrid(x, y) {
    for (let i = 0; i < x; i++) {
        pixelCanvas.append('<tr></tr>');
    };
    for (let i = 0; i < y; i++) {
        $('tr').append('<td></td>');
    };
};

//selects color from #colorPicker
function colorSelector() {
    $('td').click( event => {
        let color = colorPicker.val();
        $(event.currentTarget).css("background-color", color)
    });
};
