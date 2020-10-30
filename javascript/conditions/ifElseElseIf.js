// By NeryCaballero Oct30,2020.

// In JavaScript we have the following conditional statements:

// IF : 

        // Use if to specify a block of code to be executed, if a specified condition is true.

        // Syntax : 

        //      if (condition) {
        //          block of code to be executed if the condition is true
        //      }

        // Example :

                let x = 5;
                if ( 4 < x ) {
                    console.log("This message is logged on the console BECAUSE the condition 4 < 5 is true.")
                }

                // if the condition is not true: the lines of code inside de curly brackets will not be executed.

                if ( 4 > x ) {
                    console.log("This message is NOT logged on the console BECAUSE the condition 4 > 5 is NOT true.")
                }

// ELSE : 
        // 'else' is used AFTER 'if' 
        // Use else to specify a block of code to be executed, if the SAME CONDITION is FALSE.

        // Syntax :

        //      if (condition) {
        //          block of code to be executed if the condition is TRUE
        //      } else {
        //          block of code to be executed if the condition is false
        //       }

        // Example :

                let y = 5;
                if ( 4 > y ) {
                    console.log("This message is NOT logged on the console BECAUSE the condition 4 > 5 is NOT true.")
                } else {
                    console.log("This message is logged on the console BECAUSE the condition 4 > 5 is FALSE.")
                }

// ELSE IF :

        // Use else if to specify a new condition to test, if the first condition is false.
        // You can use as many 'else if' as the quantity of conditions you need to verify.
        // The first condition to become true will get excecuted, the rest will be ommited.

        // Syntax :
        
        //    if (condition1) {
        //          block of code to be executed if condition1 is true
        //    } else if (condition2) {
        //          block of code to be executed if the condition1 is false and condition2 is true
        //    } else if (condition3) {
        //          block of code to be executed if the condition2 is false and condition3 is true
        //    } else {
        //         block of code to be executed if the condition1, condition2 and condition3 are false
        //    }
        
        // Example :

                let a = 5;
                if ( 4 > a ) {
                    console.log("This message is NOT logged on the console BECAUSE the condition 4 > 5 is NOT true.");
                } else if ( 5 > a){
                    console.log("This message is NOT logged on the console BECAUSE the condition 5 > 5 is FALSE.");
                } else if ( 5 == a ){
                    console.log("This message IS logged on the console BECAUSE the condition 5 == 5 is TRUE.");
                } else {
                    console.log("This message is NOT logged on the console BECAUSE a previous condition was TRUE");
                }
                
        // it is not necessary to end the chain of condition by an "else", it can finish by an "else if"
 

// SWITCH :        
        // Use switch to select one of many blocks of code to be executed.
        
        // This is how it works:

        // The switch expression is evaluated once.
        // The value of the expression is compared with the values of each case.
        // If there is a match, the associated block of code is executed.
        // If there is no match, the default code block is executed. The default case does not have to be the last case in a switch block.
        // When JavaScript reaches a break keyword, it breaks out of the switch block. This will stop the execution of inside the block. It is not necessary to break the last case in a switch block. The block breaks (ends) there anyway.

        // Syntax :
        //      switch(expression) {
        //          case x:
        //            code of block to be executed
        //            break;
        //          case y:
        //            code of block to be executed
        //            break;
        //          default:
        //            code of block to be executed
        //      }

        // Example :
            
            let day; 
            
            switch ( new Date().getDay() ) {                    // The getDay() method returns the weekday as a number between 0 and 6.
                                                                // This example uses the weekday number to calculate the weekday name.                                                               
                    case 0:
                        day = "Sunday";
                        break;
                    case 1:
                        day = "Monday";
                        break;
                    case 2:
                        day = "Tuesday";
                        break;
                    case 3:
                        day = "Wednesday";
                        break;
                    case 4:
                        day = "Thursday";
                        break;
                    case 5:
                        day = "Friday";
                        break;
                    case 6:
                        day = "Saturday";
            }

            console.log(`Today is ${day});
