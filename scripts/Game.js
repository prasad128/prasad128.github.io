let restart = document.querySelector('button');
let squares = document.querySelectorAll('td');

for(let i=0; i<squares.length; i++){
    squares[i].style.backgroundColor = 'white'; 
}
function clearAll(){
    for(let i = 0; i < squares.length; i++){
        squares[i].textContent = '';
        
    }
}

restart.addEventListener('click',clearAll);

function changeMarker(){
    if(this.textContent === ''){
        this.textContent = 'X';
    }else if(this.textContent === 'X'){
        this.textContent = 'O';
    }else{
        this.textContent = '';
    }
}

function getColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6; i++){
        color += letters[Math.floor(Math.random()*16)]
    }
    return color;
}

function changeColor(){
    let newColor = getColor();
    this.style.backgroundColor = newColor;
}

for(let i=0; i<squares.length; i++){
    squares[i].addEventListener('click',changeMarker);
    //squares[i].addEventListener('click',changeColor);
}
function random(){
    let num = Math.floor(Math.random()*256);
    return num;
}
let body= document.querySelector('body');
let html = document.querySelector('html');
function changeColo(){
    for(let i= 0; i < squares.length; i++){
    squares[i].style.borderColor = 'rgb' + '(' + random() + ',' + random() + ',' + random() + ')';
    //squares[i].style.color = 'rgb' + '(' + random() + ',' + random() + ',' + random() + ')';
    //restart.style.backgroundColor = 'rgb' + '(' + random() + ',' + random() + ',' + random() + ')';
   // html.style.backgroundColor = 'rgb' + '(' + random() + ',' + random() + ',' + random() + ')';
    }
}

setInterval('changeColo()', 500);
