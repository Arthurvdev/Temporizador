var data = new Date('jan 25 2024 00:00').getTime();


var x = setInterval(function(){
    var data_atual = new Date().getTime();
    var tempo = data - data_atual;
    var dias= Math.floor(tempo/1000/60/60/24);
    var horas= Math.floor(tempo/1000/60/60)%24;
    var minutos= Math.floor(tempo/1000/60)%60;
    var segundos= Math.floor(tempo/1000)%60;

    document.getElementById('dias').innerHTML = dias;
    document.getElementById('horas').innerHTML = horas;
    document.getElementById('minutos').innerHTML = minutos;
    document.getElementById('segundos').innerHTML = segundos;

    if (tempo < 0){
        surpresa();
        clearInterval(x)
        document.getElementById('dias').innerHTML = "00";
        document.getElementById('horas').innerHTML = "00";
        document.getElementById('minutos').innerHTML = "00";
        document.getElementById('segundos').innerHTML = "00";
        
    }

    console.log(dias, horas, minutos, segundos)

},1000);


function surpresa(){
    var musica = document.querySelector('audio')
    document.querySelector("h1").innerHTML = "FELIZ ANIVERSÁRIO DE NAMORO"
    document.querySelector("h4").innerHTML = "Feliz 2 anos e 5 meses amor! Obrigado por me fazer feliz todos os dias! reconhece essa música? É a nossa música :)"
    document.querySelector("body").classList.add('alert')
    musica.play();
}










