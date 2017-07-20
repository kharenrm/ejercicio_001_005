function contadorLetras(cadena){
 var letras;
 var resultado = {
 	data: {},
 	error: ""
 };
 if(typeof(cadena)=="string") {
 	letras = cadena.split("");
	 for(var i=0;i<letras.length;i++){
	 	var letra = letras[i];

	 	if(resultado.data[letra]){
	 		resultado.data[letra]++;
	 	} else {
	 		resultado.data[letra]=1;
	 	}
	 }
} else {
	resultado.error="No has enviado un string";
}

 return resultado;

}

console.log(contadorLetras("aaaabbbbccddde"));
console.log(contadorLetras(2345556));
