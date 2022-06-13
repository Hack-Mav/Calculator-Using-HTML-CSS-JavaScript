let string = "";
let mem = 0;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
  button.addEventListener('click', (e)=>{
    if(e.target.innerHTML == '='){
      string = eval(string);
      document.querySelector('input').value = string;
    }
    else if(e.target.innerHTML == 'C'){
      string = "";
      document.querySelector('input').value = string;
    }  
    else if(e.target.innerHTML == 'M+'){
      mem = mem + int(string);
      document.querySelectorAll('input').value = string(mem);
    }
    else if(e.target.innerHTML == 'M-'){
      mem = mem - int(string);
      document.querySelectorAll('input').value = string(mem);
    }  
    else{
    console.log(e.target)
    string = string + e.target.innerHTML;
    document.querySelector('input').value = string;
    }  
  })
})
