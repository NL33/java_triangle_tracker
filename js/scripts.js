
$(document).ready(function() {
$("form#triangle-info").submit(function(event) {

	var entrySide1 = parseInt($("input#side1").val());
	var entrySide2 = parseInt($("input#side2").val());
	var entrySide3 = parseInt($("input#side3").val());

	 var triangle = {
		side1: entrySide1,
	    side2: entrySide2,
	    side3: entrySide3,
	    type: function(){
			if (((this.side1 + this.side2) <= this.side3) || ((this.side1 + this.side3) <= this.side2) || ((this.side2 + this.side3) <= this.side1)){
				return "notTriangle";
			}

			else if ((this.side1 === this.side2) && (this.side1 === this.side2) && (this.side2 === this.side3)){
				return "equilateral"; 
			} 

			else if ((this.side1 === this.side2 && this.side1 !== this.side3) || (this.side2 === this.side3 && this.side2 !== this.side1) || (this.side3 === this.side1 && this.side3 !== this.side2)) {
				return "isosceles";
			}

			else if ((this.side1 !== this.side2) && (this.side2 !== this.side3) && (this.side1 !== this.side3)) {
				return "scalene";
			}	
		}
	 };

	if (triangle.type() === "notTriangle") {
		alert("These sides do not equal a triangle");
	}

	if (triangle.type() === "equilateral"){
		$("ul#equilateralentries").append("<li>" + entrySide1 + "," + entrySide2 + "," + entrySide3 + "</li>");
	}

	if (triangle.type() === "isosceles"){
		$("ul#isoscelesentries").append("<li>" + entrySide1 + "," + entrySide2 + "," + entrySide3 + "</li>");
	}

	if (triangle.type() === "scalene"){
		$("ul#scaleneentries").append("<li>" + entrySide1 + "," + entrySide2 + "," + entrySide3 + "</li>");
	}

event.preventDefault();
  });

});


