$(document).ready(function(){
    
    var myTodo = [{'name':'Laundry','complete':true}, 
    {'name': 'Clean the Fridge','complete': false}, 
    {'name': 'Grocery Shopping','complete': true},
    {'name': 'Workout',	'complete': true}];

    var html ='';// = '<p> To Do List</p>';
        //html += '<ol>';

//document.write('<p>To Do List</p>');
//document.write('<ul>');
   
    $ ("<ul class ='list-group'>").appendTo(".panel-body");
    for(var i = 0; i < myTodo.length; i++) {
        try {
         // print(myTasks[i]);
            html += print(myTodo[i]);
         } catch (error) {
    
            console.log('There is a problem:' + error);
         }
    }
    $('ul.list-group').append(html);
    
    //html+='</ol>';
    
    //$('</ul').appendTo(".panel-body");
});
    
//document.write('</ul>');


    function print(theTask) {
	    if(typeof theTask.name === 'undefined') {
            throw 'The task name is missing!';
        } else if (typeof theTask.complete === 'undefined') {
            throw 'The task status is missing!';
        } 
			if(theTask.complete) {
                return "<li class='list-group-item complete'>" + theTask.name + '</li>';
       		// document.write('<li class="complete">' + theTask.name + '</li>');
    		} else {
        		//	document.write('<li>' + theTask.name + '</li>'); 
                return "<li class='list-group-item'>" + theTask.name + '</li>';
               
         }
      }

function removeCompleted() {
    $('.complete').remove();
}
