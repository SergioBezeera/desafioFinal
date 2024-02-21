class dadosPessoais{
    constructor(nome,idade){
        this._nome=nome
        this._idade=idade
    }

    toString(){
        console.log(`o(a) ${this._nome} tem ${this._idade} vamos saber que tipo de
         \n ser mistico você nesse mundo mágico !!!`)
    }

}

class serMistico{
    constructor(serMistico,nome,poder){
        this._serMistico=serMistico
        this._nome=nome
        this._poder=poder
    }

    escrever(){
        console.log(`${this._serMistico} ${this._nome} você ${this._poder}`)
    }
}

let nome=prompt("Informe seu nome:")
let idade=prompt(nome + "informe sua idade:")
let motivos=alert("esses dados serão guardados,OK :)") 

const juntarTudo= new dadosPessoais (nome,idade)
juntarTudo.toString()

let serMisticos=prompt(nome+"informe que ser mágico você é :\n1. Guerreiro,2. Mago,3. Monge,4. Ninja")

const juntarTudo2= new serMistico(serMisticos,nome,poder="fogo")
juntarTudo2.escrever()


// class dadosPessoais {
//     constructor(nome, idade) {
//       this._nome = nome;
//       this._idade = idade;
//     }
  
//     toString() {
//       console.log(`o(a) ${this._nome} tem ${this._idade} vamos saber que tipo de\nser mistico você nesse mundo mágico !!!`);
//     }
//   }
  
//   class serMistico {
//     constructor(serMistico, nome, poder) {
//       this._serMistico = serMistico;
//       this._nome = nome; // Adicionando o nome aqui
//       this._poder = poder;
//     }
  
//     escrever() {
//       console.log(`${this._serMistico} ${this._nome}, você tem o poder do ${this._poder}`);
//     }
//   }
  
// //   let nome = prompt("Informe seu nome:");
// //   let idade = prompt(nome + ", informe sua idade:");
// //   let motivos = alert("Esses dados serão guardados, OK :)");
  
// //   const juntarTudo = new dadosPessoais(nome, idade);
// //   juntarTudo.toString();
  
// //   let serMisticos = prompt(nome + ", informe que ser mágico você é:\n1. Guerreiro, 2. Mago, 3. Monge, 4. Ninja");
  
// //   const juntarTudo2 = new serMistico(serMisticos, nome, poder = "fogo");
// //   juntarTudo2.escrever();
  