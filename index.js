    // programe for calculator
    
    let num_1= prompt("Please enter your number");
    let num_2 =prompt("Please enter your other number");
    num_1 = parseFloat(num_1);
    num_2 = parseFloat(num_2);
    let val = prompt("which oprator do you want to use (+, -, * or / ):");
    let result;
    if (val == "+"){
        result = (num_1 + num_2)
     
     document.write("your answer is "  + result)
    } 
    else if  (val == "-"){
        result = (num_1 - num_2) 
        document.write("your answer is "  + result)
    }
    else if (val == "*"){
        result = (num_1 * num_2) 
        document.write("your answer is "  + result);
    }
    else if (val == "/"){
        result = (num_1 / num_2) 
        document.write("your answer is "  + result);
    }
        
    
    
        
     

    

   

  
    


    
