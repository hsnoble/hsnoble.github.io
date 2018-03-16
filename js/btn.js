/*
	btn.js
	Stephen Noble
	March 16, 2018
	
	This code in the file is created to shorten the main HTML code.
	This file contains a code that will be integrated with the main website.
*/
//Placeholder variables for easier replacement of values.
var p = "<p>This project is a final project created for the course BTN415, a C++ communications course. This group project allows a computer to control a VEX Robot using commands sent by the computer using the TCP/IP Protocol</p>";
var title = "<h2>Decepticon Communication Software</h2>";
var subtitle = "<p class='item-intro text-muted'>Programmed in C++</p>";
var lnk = "				<br/><li><a href='https://github.com/hsnoble/Decepticon-Communication-Software'><i class='fab fa-github fa-2x' style='margin-top: 10px;'></i></a></li> ";
var date = "   <li>Date: April 2017</li> " ;

//writes the code in HTML
document.write("<div class='portfolio-modal modal fade' id='portfolioModal2' tabindex='-1' role='dialog' aria-hidden='true'>" + 
        "<div class='modal-dialog'>" + 
            "<div class='modal-content'> " + 
                "<div class='close-modal' data-dismiss='modal'>" +
                    "<div class='lr'>" +
                        "<div class='rl'>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
                "<div class='container'>" +
                    "<div class='row'>" +
                        "<div class='col-lg-8 col-lg-offset-2'>" +
                            "<div class='modal-body'>" +
                                "<!-- Project Details Go Here -->" +
                                title +
                                subtitle +
                                "<img class='img-responsive img-centered' src='img/portfolio/vex.jpg' alt='Vex Robot'>" +
                                p +
                                "<ul class='list-inline'>" +
                                date +
                                "</ul>" +
								"<!-- GIT BUTTON (Allows users to open github page for the project) --> " +
								 " <div class='text-center'> " +
								"	<div class='col-lg-12'> " +
								"		<span style='font-family: 'Righteous', cursive; font-size: 20px;'>Open Project on GitHub</span> " +
								"		<ul class='list-inline social-buttons center-block'> " +
								lnk +
								"		</ul> " +
								"	</div> " +
								"</div>" +
								"<!--End of Git button section -->" + 
                                "<button type='button' class='btn btn-primary' data-dismiss='modal'><i class='fas fa-times'></i> Close Project</button>" +
                            "</div>" +
                        "</div>" +
                    "</div>" +
                "</div>" +
            "</div>" +
        "</div>" +
    "</div>"); 