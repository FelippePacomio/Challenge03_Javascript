const hobbies = ['Treinar', 'Jogar', 'Correr', 'Andar de bicicleta', 'Passear', 'Comer'];
const hobbiesDoAmigo = ['Surfar', 'Maratonar', 'Brigar', 'Tocar violão'];
const hobbiesMusicais = ['Cantar', 'Tocar piano', 'Escutar música'];
const hobbiesEsportivos = ['Nadar', 'Correr', 'Esquiar'];
const hobbiesAcademicos = ['Estudar Javascript', 'Ler registros', 'Ensinar'];
const categoriaDeHobbies = [hobbiesMusicais, hobbiesEsportivos, hobbiesAcademicos];
const todosOsHobbies = hobbies.concat(hobbiesDoAmigo);

console.log("Esses são os meus hobbies: ");
for(let i = 0; i < 6; i++){
    console.log(hobbies[i]);
}

hobbies[3] = 'Pescar';
console.log("--------------------------------------------------------");
console.log(`Mais do que andar de bicicleta, eu prefiro ` + hobbies[3]);
console.log(`Eu tenho um total de ` + hobbies.length + ` hobbies!`);
console.log("--------------------------------------------------------");

hobbies.push('Viajar', 'Estudar', 'Lutar');
console.log(`Lembrei de mais alguns! Agora eu tenho um total de ` + hobbies.length + ` hobbies!`);

hobbies.pop();
console.log(`Meus novos hobbies agora são: ` + hobbies);

let posicao = hobbies.indexOf('Jogar');
hobbies.splice(posicao, 1);
console.log(`Meus novos hobbies agora são: ` + hobbies);
console.log("--------------------------------------------------------");
console.log(`Estes são os meus hobbies e os do meu amigo: ` + todosOsHobbies);
console.log("--------------------------------------------------------");
console.log(categoriaDeHobbies[1]);
console.log(categoriaDeHobbies[1][2]);

