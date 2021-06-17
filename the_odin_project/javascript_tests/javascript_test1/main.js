function begin_button() {
    first_answer();
}

function first_answer() {
answer = prompt("Who's there?");
    if (answer == "Admin") {
        second_answer();
    }   else if (answer == null || answer == "") {
        alert("Canceled");
    }   else {
        alert("I don't know you");
    }
}

function second_answer() {
    answer = prompt("Password?");
        if (answer == "TheMaster") {
            alert("Welcome!")
        }   else if (answer == null || answer == "") {
            alert("Canceled");
        }   else {
            alert("Wrong password");
        }
    }
    

