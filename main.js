
function submit(){
    document.getElementById("success-msg").classList.add('visible');
    document.getElementById("reset").classList.add('visible');
}

function reset(){
    document.getElementById("success-msg").classList.remove('visible');
    document.getElementById("success-msg").classList.add('invisible');


    document.getElementById("reset").classList.remove('visible');
    document.getElementById("reset").classList.add('invisible');
}