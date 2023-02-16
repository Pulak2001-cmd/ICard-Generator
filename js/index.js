/**
 * Function to populate values in card from form input
 */
function generateCard() {
    var regexp=/^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/;
    var x=document.getElementById("Aadhar").value;
    
    if(regexp.test(x)){
        document.getElementById("aadharno").innerHTML = x.slice(0, 4)+"-"+x.slice(4, 8)+"-"+x.slice(8);
        // Get value of Student name from form input 
        const nameElement = document.getElementById("name");
        const nameValue = nameElement.value; 
        // Assign the value of student name to generated card
        const cardNameElement = document.getElementById("cardName");
        cardNameElement.innerHTML = nameValue;

        const fatherName = document.getElementById("father").value;
        document.getElementById("cardfatherName").innerHTML = fatherName;

        const dobValue = document.getElementById("dob").value;
        document.getElementById("dobin").innerHTML = dobValue;

        // Get value of college name from form input 
        const collegeNameValue = document.getElementById("collegeName").value;
        // Assign the value of college name to generated card
        document.getElementById("cardCollegeName").innerHTML = collegeNameValue;

        // Get value of location name from form input 
        const locationValue = document.getElementById("location").value;
        // Assign the value of location name to generated card
        document.getElementById("cardLocation").innerHTML = locationValue;

        // Get value of location name from form input 
        const classValue = document.getElementById("class").value;
        // Assign the value of location name to generated card
        document.getElementById("cardClass").innerHTML = classValue;


        // Display final generated card to user     
        document.getElementById("collegeCard").style.display = "block";
    } else{ 
        window.alert("Invalid Aadhar no.");
    }
}
