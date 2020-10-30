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
                if ( (2+2) < x ) {
                    console.log("This message is logged on the console BECAUSE the condition 2+2 < 5 is true.")
                }

                // if the condition is not true: the lines of code inside de curly brackets will not be executed.

                if ( (2+2) > x ) {
                    console.log("This message is NOT logged on the console BECAUSE the condition 2+2 > 5 is NOT true.")
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
                if ( (2+2) > y ) {
                    console.log("This message is NOT logged on the console BECAUSE the condition 2+2 > 5 is NOT true.")
                } else {
                    console.log("This message is logged on the console BECAUSE the condition 2+2 > 5 is FALSE.")
                }

// ELSE IF :
        // Use else if to specify a new condition to test, if the first condition is false.
        // You can use as many 'else if' as the quantity of conditions you need to verify.
        // The first condition to become true will get excecuted, the rest will be ommited.


        // W O R K   I N   P R O G R E S S ....... 
 

// Use switch to select one of many blocks of code to be executed
