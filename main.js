// var listaFilmes = ["Filme1", "Filme2", "Filme3"];

// listaFilmes.push("Harry Potte 2");

// listaFilmes.push("Harry Potte 3");

// // document.write("<p>" + listaFilmes[0] + "<p>");
// // document.write("<p>" + listaFilmes[1] + "<p>");
// // document.write("<p>" + listaFilmes[2] + "<p>");
// // document.write("<p>" + listaFilmes[3] + "<p>");

// for (var indice = 0; indice < listaFilmes.length; indice = indice++) {
//   document.write("<p>" + listaFilmes[indice] + "<p>");
// }
// exemplos acima

var listaFilmes = [
  "https://lojasaraiva.vteximg.com.br/arquivos/ids/12109083/1006637057.jpg?v=637142248087230000",
  "https://images-na.ssl-images-amazon.com/images/I/81arD48HpRL.jpg",
  "http://2.bp.blogspot.com/-s8xhAIXb_eo/ToXjH5eI4kI/AAAAAAAABe8/JMzttgsIdBU/s1600/Harry+Potter+e+as+Rel%25C3%25ADquias+da+Morte+Parte+2+Capa+Harry.jpg"
];

for (var i = 0; i < listaFilmes.length; i++) {
  document.write("<img src=" + listaFilmes[i] + ">");
}
