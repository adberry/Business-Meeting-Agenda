/**
 * Created by Adam Berry on 11/5/2015.
 */

var x = document.getElementById("form_sample");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var heading = document.createElement('h2'); // Heading of Form
heading.innerHTML = "Make a New Meeting";
createform.appendChild(heading);

var line = document.createElement('hr'); // Giving Horizontal Row After Heading
createform.appendChild(line);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var namelabel = document.createElement('label'); // Create Label for Name Field
namelabel.innerHTML = "Name: "; // Set Field Labels
createform.appendChild(namelabel);

var inputelement = document.createElement('input'); // Create Input Field for Name
inputelement.setAttribute("type", "text");
inputelement.setAttribute("name", "dname");
createform.appendChild(inputelement);

//var linebreak = document.createElement('br');
//createform.appendChild(linebreak);

var titlelabel = document.createElement('label'); // Create Label for Title Field
titlelabel.innerHTML = "Title: ";
createform.appendChild(titlelabel);

var titleelement = document.createElement('input'); // Create Input Field for Title
titleelement.setAttribute("type", "text");
titleelement.setAttribute("name", "dtitle");
createform.appendChild(titleelement);

var titlebreak = document.createElement('br');
createform.appendChild(titlebreak);

var locationlabel = document.createElement('label'); // Create a Label for Location
locationlabel.innerHTML = "Location: ";
createform.appendChild(locationlabel);

var locationelement = document.createElement('input'); // Create Input Field for Location
locationelement.setAttribute("type", "text");
locationelement.setAttribute("name", "dlocation");
createform.appendChild(locationelement);

var locationbreak = document.createElement('br');
createform.appendChild(locationbreak);

var linebreak = document.createElement('br');   // This is where the drop down boxes will show up for
createform.appendChild(linebreak);              // Meeting Duration, Proposed Date, and the Itemized Agenda Items

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);              // Finish the line spacing

var desclabel = document.createElement('label'); // Create a Label for a Meeting Description
desclabel.innerHTML = "Meeting Description: ";
createform.appendChild(desclabel);

var descelement = document.createElement('textarea'); // Create Input Field for Meeting Description
descelement.setAttribute("name", "desc");
createform.appendChild(descelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

var attlabel = document.createElement('label'); // Create a Label for a Meeting Attendees
attlabel.innerHTML = "Suggested Attendees: ";
createform.appendChild(attlabel);

var attelement = document.createElement('textarea'); // Create Input Field for Meeting Attendees
attelement.setAttribute("name", "att");
createform.appendChild(attelement);

var linebreak = document.createElement('br');
createform.appendChild(linebreak);

// Make the first Meeting Duration Box
var myDiv = document.getElementById("durationbox1");

//Create array of options to be added
var array1 = ["6 am","7 am","8 am","9 am","10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm"];

//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options

for (var i = 0; i < array1.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array1[i]);
    option.text = array1[i];
    selectList.appendChild(option);
}

// Make the second duration box for Meeting Duration

var myDiv = document.getElementById("durationbox2");

//Create array of options to be added
var array = ["7 am","8 am","9 am","10 am", "11 am", "12 pm", "1 pm", "2 pm", "3 pm", "4 pm", "5 pm", "6 pm"];

//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < array.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", array[i]);
    option.text = array[i];
    selectList.appendChild(option);
}

// Ends the second duration box for Meeting Duration

// Make the Proposed Date  with the drop boxes in mm/dd/yr order

var myDiv = document.getElementById("month");

var montharray = ["January", "February", "March", "April", "May", "June", "July", "August", "September",
"October", "November", "December"];
//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < montharray.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", montharray[i]);
    option.text = montharray[i];
    selectList.appendChild(option);
}
// end the month drop down box

// start the day drop box
var myDiv = document.getElementById("day");

var dayarray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17", "18",
"19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < dayarray.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", dayarray[i]);
    option.text = dayarray[i];
    selectList.appendChild(option);
}  // end the day drop box

// start the year drop box
var myDiv = document.getElementById("year");

var yeararray = ["2015", "2016", "2017", "2018", "2019", "2020", "2021", "2022", "2023", "2024", "2025"];
//Create and append select list
var selectList = document.createElement("select");
selectList.setAttribute("id", "mySelect");
myDiv.appendChild(selectList);

//Create and append the options
for (var i = 0; i < yeararray.length; i++) {
    var option = document.createElement("option");
    option.setAttribute("value", yeararray[i]);
    option.text = yeararray[i];
    selectList.appendChild(option);
}

// Make the itemized agenda list and duration list
var myDiv = document.getElementById("agendaitem");
//Create a table element dynamically
var table = document.createElement("table");

//Create a select element dynamically
var select = document.createElement("select");

//Create a option element dynamically
var option = document.createElement("option");

function addCombo() {
    var textb = document.getElementById("txtCombo");
    var combo = document.getElementById("combo");

    var option = document.createElement("option");
    option.text = textb.value;
    option.value = textb.value;
    try {
        combo.add(option, null); //Standard
    }catch(error) {
        combo.add(option); // IE only
    }
    textb.value = "";
}

var submitelement = document.createElement('input'); // Make a Submit Button
submitelement.setAttribute("type", "submit");
submitelement.setAttribute("name", "dsubmit");
submitelement.setAttribute("value", "Submit");
createform.appendChild(submitelement);



var clearbutton = document.createElement('input');   // Make a button that will clear the fields
clearbutton.setAttribute("type", "submit");
clearbutton.setAttribute("name", "dclear");
clearbutton.setAttribute("value", "Clear");
createform.appendChild(clearbutton);