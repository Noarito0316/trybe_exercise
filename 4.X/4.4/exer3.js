let info = {
    personagem: "Margarida",
    origem: "Pato Donald",
    nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
    recorrente: 'sim'
  };
let info2 = {
    personagem: "Tio patinhas",
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: "O último MacPatinhas",
    recorrente: 'sim'
  };


for (i in info){
  console.log (info[i] + ' e ' + info2[i])
}