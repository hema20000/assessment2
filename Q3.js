var text, array_length, i;
var name_array = ["Amar", "Raja", "Rani"];
var place_array = ["chennai", "delhi", "banglore"];
array_length = name_array.length;
text = '<table border="1" cellspacing="0" cellpadding="5">';
text += "<tr><th>Name</th><th>Place</th></tr>";
for (i = 0; i < array_length; i++) {
    text += "<tr><td>" + name_array[i] + "</td><td>" + place_array[i] + "</td></tr>";
}
text += "</table> ";
document.getElementById("div1").innerHTML = text;