function calculate(x) {
    // document.querySelector("#display").value=  document.write(x[0]);
    if(x=='='){
        document.querySelector("#display").value = eval(document.querySelector("#display").value);
    }
    else{
        if(x=='C')
    {
        document.querySelector("#display").value= '';
    }
    else{
        document.querySelector("#display").value = document.querySelector("#display").value + x;
    }
    }
    
    
}