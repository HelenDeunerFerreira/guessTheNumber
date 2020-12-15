<input/>
<button>Compare com o meu segredo</button>

<script>
//var segredo = Math.round(Math.random() * 10);

function sorteia(){
	return Math.round(Math.random() * 10);
}

function sorteiaNumeros(quantidade){
	var segredos = [];
	var numero = 1;

	while (numero <= quantidade){
		var numeroAleatorio = sorteia();

		if(numeroAleatorio !== 0){
		var achou = false;
			for(var posicao = 0; posicao < segredos.length; posicao++){
				if(segredos[posicao] == numeroAleatorio) {
					achou = true;
					break;
				}
			}

			if(achou == false){
			segredos.push(numeroAleatorio);
			}

			numero++;
		}

		}

	return segredos;
}

var segredos = sorteiaNumeros(5);

var input = document.querySelector("input");
input.focus();
var achou = false;
var button = document.querySelector("button");
button.onclick = verifica;

function verifica() {

	for(var posicao = 0; posicao < segredos.length; posicao++) {

		var achou = false;

		if(input.value == segredos[posicao]){
			alert("Você acertou!");
			achou = true;
			break;
		}

		if(achou == false){
		alert("Você errou!")
		break;
		}

	input.value = "";
	input.focus();

	}
}

</script>
