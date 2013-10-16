// JavaScript Document

var myToDo = ['Laundry', 'Cooking', 'Cleaning out The Car', 'Grocery', 'Workout'];

var numbers = ['1', '2', '3', '4', '5'];

//Listings all of my tasks for today

document.write('<p>To Do List</p>');
document.write('<ul>');
for(var i = 0; i < numbers.length;  i++){
for(var i = 0; i < myToDo.length;  i++){
	document.write('<li>' + numbers[i] +' '+ myToDo[i] + '.</li>');
}
}
document.write('</ul>');