// Switch case

// It is used to perform different actions based on diffrent condition.
// The objective of a switch statement is to give an expression to evaluate and several different statements to execute based on the value of the expression.
// The interpreter checks each case against the value of the expression until a match is found. If nothing matches, a default condition will be used.

// syntax
switch (expression) {
    case condition 1:
        statement(s)
        break; // The break statements indicate the end of a particular case.

    case condition 2:
        statement(s)
        break;

    case condition n:
        statement(s)
        break;

    default:
        statement(s)
}

// Example
var grade = 'A';
document.write("Entering switch block");
switch (grade) {
    case 'A':
        document.write("Good job");
        break;

    case 'B':
        document.write("Passed");
        break;

    case 'C':
        document.write("Failed");
        break;

    default:
        document.write("Unknown grade")
}