/*
	capstone.js
	Stephen Noble
	March 16, 2018
	
	This code in the file is created to shorten the main HTML code.
	This file contains a code that will be integrated with the main website.
*/
//Placeholder variables for easier replacement of values.
var p = "<p>This project is part of a major project course, and this is still being built by a team of 4 people. The objective of this software to provide an easier Student Management System for the clients. The clients are Toronto-based and Brampton-Based churches who have students who attend weekly activities from JK-Grade 12.</p>";
p += "<p>This project also uses Google Calendar's API services to be able to manage the system in a very efficient way possible.</p>"
var title = "<h2>Student Management Software - Capstone Project <br/>(Church Centre)</h2>";

var subtitle = "<p class='item-intro text-muted'>Created using Node.js, MongoDB, JavaScript, and Handlebars</p>";
var lnk = "				<br/><li><a href='https://github.com/hsnoble/BTSwebsite' target ='_blank' '><i class='fab fa-github fa-2x' style='margin-top: 10px;'></i></a></li> ";
var date = "   <li>Date: April 2017</li> " ;

//writes the code in HTML
document.write("<div class='portfolio-modal modal fade' id='portfolioModal3' tabindex='-1' role='dialog' aria-hidden='true'>" + 
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
                                "<img class='img-responsive img-centered' src='img/portfolio/att.jpg' alt=''>" +
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