var contactList = [];

function Conatct(name, phoneNo, email){

    this.name = name;
    this.phoneNo = phoneNo;
    this.email = email;

    this.display = function(){
        alert(this);
    }
}

var contact1 = new Conatct("John Smith", "5546546546", "adsa@gmail.com");
var contact2 = new Conatct("Alan Smith", "2454656545", "asdsa@gmail.com");
var contactList = [contact1, contact2];

$(document).ready(function() { // do this when the document is loaded
	dialarTabClicked();

    for(var i = 0; i < contactList.length; i++) {
      var newNodeContainer = "<div class='contactObject'><b>" + contactList[i].name + 
                            "</b><br>" + contactList[i].phoneNo + "<br>" + contactList[i].email + "<br><br>";
      var divClose = "</div>";
      $('.contactList').append(newNodeContainer + divClose);
    }
});


$("#tabButtonDialar").click(function(){
    dialarTabClicked();
});

$("#tabButtonContactList").click(function(){
    contactListTabClicked();
});

$("#tabButtonAddContact").click(function(){
    addContactTabClicked();
});

$("#tabButtonGesture").click(function(){
    gestureTabClicked();
});

function dialarTabClicked(){
    $(".tabContentDialar").show(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"
    $(".tabContentGesture").hide();
}

function contactListTabClicked(){
    $(".tabContentDialar").hide(); // show the element with ID "element"
    $(".tabContentContactList").show(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"
    $(".tabContentGesture").hide();
}

function addContactTabClicked(){
    $(".tabContentDialar").hide(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").show();// hide the element with ID "otherElement"
    $(".tabContentGesture").hide();
}

function gestureTabClicked(){
    $(".tabContentDialar").hide(); // show the element with ID "element"
    $(".tabContentContactList").hide(); 
    $(".tabContentAddContact").hide();// hide the element with ID "otherElement"
    $(".tabContentGesture").show();
}

$(".dialarButton").click(function() {
    var text = $(this).val();
    //console.log(this);

    var length = $("#phoneNumber").val().length;

    console.log(text);
    if (length == 12){
        alert("Maximum no of input is reached");
    } else {
        $("#phoneNumber").val($("#phoneNumber").val()+text);
        //console.log("Clicked");
    }
    
});

$("#clearButton").click(function() {
    $("#phoneNumber").val("");
});

$("#dialButton").click(function() {
    var phoneNumber = $("#phoneNumber").val();
});

$("#deleteButton").click(function() {
    var text = $("#phoneNumber").val();
	$("#phoneNumber").val(text.substring(0,text.length -1));
});

$("#contactClear").click(function() {
    $("#contactName").val("");
    $("#contactNo").val("");
    $("#contactEmail").val("");
});

$("#addContact").click(function (e) {

    //e.preventDefault();
    if(contactForm.checkValidity()) {

        var newContact = new Conatct($("#contactName").val(), $("#contactNo").val(), $("#contactEmail").val());
        contactList.push(newContact);

        console.log(contactList.length);
        console.log(newContact);

        var newNodeContainer = "<div class='contactObject'><b>" + newContact.name + 
                            "</b><br>" + newContact.phoneNo + "<br>" + newContact.email + "<br><br>";
        var divClose = "</div>";
        $('.contactList').append(newNodeContainer + divClose);

        
        alert("Contact added successfully. You can see new contact in the contact list");
        
    } 

    return false;
});


//Gesture 

var downX=0;
var downY=0;
var upX=0;
var upY=0;
var countTab=1;
		
$('.gestureSwipe').mousedown(
	function(e){
		$("#gesture_output").val("Mouse Down");
		 downX = e.pageX;
		 downY = e.pageY;
		 console.log(downX +" " + downY);
		
		 
	});
	
$('.gestureSwipe').mouseup(
	function(e){
		
		 upX = e.pageX;
		 upY = e.pageY;
		 console.log(upX +" " + upY);
		   if (upY<downY ){$("#gestureOutput").val("Swipe Up");}
		 else if (upY>downY ){$("#gestureOutput").val("Swipe Down");}
		 else if (upX<downX ){$("#gestureOutput").val("Swipe Left");}
		 else if (upX>downX ){$("#gestureOutput").val("Swipe Right");}
		 else if ((upX==downX)&&  (upY==downY)) {$("#gestureOutput").val("Mouse Up");}
		 
		
		 
	});
	
$('.gestureSwipe').mouseleave(function() {
	$("#gestureOutput").val(" ");
});


$(document).keydown(function(e) { 
console.log(countTab);
 if (e.keyCode == '39' && countTab < 4)
	{
		
		countTab++;
		console.log("Check");
		console.log(countTab);
		
		if(countTab ==2){
			contactListTabClicked();
		}
		else if(countTab ==3){
			addContactTabClicked();
		}else if(countTab ==4){
			gestureTabClicked();
		}
	}
	else if (e.keyCode == '37' && countTab>1) {
		
		countTab--;
		console.log("Check");
		console.log(countTab);
		if(countTab==1){
			dialarTabClicked();
		}
		else if(countTab ==2){
			contactListTabClicked();
		}
		else if(countTab ==3){
			addContactTabClicked();
		}else if(countTab ==4){
			gestureTabClicked();
		}
	}
});