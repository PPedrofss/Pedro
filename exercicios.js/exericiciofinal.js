// receber uma string e remover todas as vogais

function removerVogais(texto){
    texto = texto.replaceAll( 'a', '')
     texto = texto.replaceAll( 'e', '')
    texto = texto.replaceAll( 'i', '')
    texto = texto.replaceAll( 'o','')
    texto = texto.replaceAll( 'u', '')
    console.log(texto)
}

removerVogais("oi joao")
removervogais(' kjh')