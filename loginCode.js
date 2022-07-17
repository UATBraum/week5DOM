function checkCreds(){
    //Troubleshooting
    console.log("checkCreds() started");
    //create three variables for login credentials
    var firstName;
    var lastName;
    var badgeNumber;
    //Variable for merge
    var fullName;
    //Test valid creditials
    var fullNameLength;

    //store creditials and log for testing
    firstName = document.getElementById("fName").value;
    console.log("First name: " + firstName);
    lastName = document.getElementById("lName").value;
    console.log("Last name: " + lastName);
    badgeNumber = document.getElementById("badgeID").value;
    console.log("Badge Number: " + badgeNumber);

    //combine to form full name and log for testing
    fullName = firstName + " " + lastName;
    console.log("Full Name: " + fullName);
    //check full name length
    fullNameLength =fullName.length;
    console.log("Full Name Length: " + fullNameLength + "characters");

    //Check if credtial are vaild Name length and badge number within ranges
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML = "Invalid Name, Please Try Again.";
    }
    else if(badgeNumber > 999 || badgeNumber < 100){
        document.getElementById("loginStatus").innerHTML = "Invalid Badge Number, Please Try Again.";
    }
    else{
        //push user forward if login is valid
       location.replace("./uatSpace.html");
    }
}