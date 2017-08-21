function pokaz() {
    console.log('słowo');
}

function yes() {
    console.log('znasz odpowiedz');
}

function no(){
    console.log('nie znasz odpowiedzi');
}

window.onload=function(){
    const nacisnij = document.getElementsByClassName('word')[0];
    nacisnij.addEventListener('click', pokaz);
}

