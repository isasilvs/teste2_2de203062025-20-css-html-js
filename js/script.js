function mostraResultado(){
    var dim = Number(document.getElementById('dinheiro').value);
    var prod1 = Number(document.getElementById('dinheiro1').value);
    var prod2 = Number(document.getElementById('dinheiro2').value);
    var result = prod1 + prod2;
    var result2= dim - result;




    console.log(`voce comprou 2 produtos que custaram ${result}reais e sobrou ${result2}reais`);

   if (dim , prod1, prod2 == ""){
    document.getElementById('mensagem').innerHTML =('Formulario não preenchido');
    } else{
        document.getElementById('mensagem').innerHTML = (`voce comprou 2 produtos que custaram ${result} reais e sobrou ${result2}reais`);
    };
}