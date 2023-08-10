




var number = Math.floor(Math. random() * 100) + 1;

console.log(number)

var x = parseInt("2");

console.log(x);

$("#rev").fadeOut(1,function(){
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

var name
var id

// function createNewCheckboxt(name, id){
//     var checkbox = document.createElement('input'); 
//     checkbox.type= 'checkbox';
//     checkbox.name = name;
//     checkbox.id = id;
//     return checkbox;
// }

// $("#checkboxes").append(createNewCheckboxt('theName', 'theID'));

var textid = "";
textid = (document.getElementById("toodo").value); 

var checkid = "";
var spanid = "";

spanid += 'b';
checkid += 'a';



function newCheckbox(){
    textid = (document.getElementById("toodo").value); 
    $("#checkboxes").append('<input type = "checkbox" id ="' + checkid + '"/><span id = "'+spanid+'">'+textid+'</span>')
    spanid += 'b';
    checkid += 'a';
}

console.log(checkid)
console.log(spanid)

$(function(){

$(document).on('click', "[type=checkbox]", function(event){  /* looks for a click on a button with an id of my-button */
    if($(event.target).is(':checked')) {
        alert("Good job! You have completed one! Now do the rest. ");
        $(event.target).fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
        $(event.target).next().fadeOut(1000,function(){    //theres also slideDown and slideUp.//
        })
}
});

$('checkbox').siblings();
})


$(function(){
    $("#boxcool").on('click',function(event) {  /* looks for a click on a button with an id of my-button */


    $("#id").css({
        'font-size' : '10px',
        'width' : '30px',
        'height' : '10px',
        'animation-name': 'example',
        'animation-duration': '4s'
     });

        
    });
    });


$(function(){
    $("#go").on('click',function(event) {  /* looks for a click on a button with an id of my-button */

      newCheckbox()
      console.log(checkid)
      console.log(spanid)
      execute()

        
    });
    });





$(function() {
    $('.greeting').animate(
        {backgroundColor: 'red'},
        500,
        function() {
            alert("its red mo");

        }

    );
});






$(function() {

$(document).on("click", "[type=checkbox]", function(event){
$('#checkbox').click(function(event){
    if($(event.target).is(':checked')) {
        alert("Good job! You have completed one! Now do the rest.");
        $(event.target).fadeOut(100,function(){
        })
        
}
});

$('#checkbox').siblings();
})
});




var count

count = 0

$(function(){
    $("#guess").on('click',function(event) {  /* looks for a click on a button with an id of my-button */
        num = parseInt(document.getElementById("num").value); 
    if(num > number) { 
            alert("Too big, try again");  
            count += 1
    }
    
    if(num < number) {
            alert("Too small, try again")
            count += 1

    }

    if(num == number) {
        alert("YOU GOT IT YAY")
        alert("You got it in "+count+" attemps!")
        count = 0

    }

        
    });
    });








    $(function(){
        $('#second-parent').click(function(){
            e1 = $('#first-child');
            e1.addClass('animate');
            e1.one('webkitAnimationEnd oanimationend msAnimationEnd animationend',
            function (e) {
                e1.removeClass('animate');
            });
        });
    });