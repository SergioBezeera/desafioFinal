do{
    let nome
    let idade
    let motivos
    let serMisticos
    let function1
    let juntarTudo
    let repetir
    
    //classe para dados
    class dadosPessoais{
        constructor(nome,idade){
            this._nome=nome
            this._idade=idade
        }
    
        toString(){
            alert(`o(a) ${this._nome} tem ${this._idade} vamos saber que tipo de
             \n ser mistico você nesse mundo mágico !!!`)
        }
    
    }
    
    //classe para o ser mistico
    class serMistico{
        constructor(serMistico,nome){
            this._serMistico=serMistico
            this._nome=nome
        
        }
    }
    
    class magoMagia{
        constructor(serMistico,nome,magia="magia"){
            this._serMistico=serMistico
            this._nome=nome
            this._magia=magia
        }
    
          escrever(){
            console.log(`${this._serMistico} ${this._nome} atacou usando ${this._magia}`)
        }
        
    }
    
    class guerreiroEspada{
        constructor(serMistico,nome,espada="espada"){
            this._serMistico=serMistico
            this._nome=nome
            this._espada=espada
        }
    
          escrever(){
            console.log(`${this._serMistico} ${this._nome} atacou usando ${this._espada}`)
        }
        
    }
    
    class mongeArtesMarcias{
        constructor(serMistico,nome,artesMarcias="artes marcias"){
            this._serMistico=serMistico
            this._nome=nome
            this._artesMarcias=artesMarcias
        }
    
          escrever(){
            console.log(`${this._serMistico} ${this._nome} atacou usando  ${this._artesMarcias}`)
        }
        
    }
    
    class ninjaShuriken{
        constructor(serMistico,nome,ninjaShuriken="shuriken"){
            this._serMistico=serMistico
            this._nome=nome
            this._shuriken=ninjaShuriken
        }
    
          escrever(){
            console.log(`${this._serMistico} ${this._nome} atacou usando ${this._shuriken}`)
        }
        
    }
    
    do{
        nome=prompt("Informe seu nome:")
    }while(!nome);
    
    do{
        idade=prompt(nome + " informe sua idade:")
    }while(!idade)
    
    juntarTudo= new dadosPessoais (nome,idade)
    juntarTudo.toString()
    motivos=alert("esses dados serão guardados,OK :)") 
    
    do {
        serMisticos = prompt(nome + " informe que ser mágico você é:\n1. Guerreiro, 2. Mago, 3. Monge, 4. Ninja");
        serMisticos = serMisticos.charAt(0).toUpperCase() + serMisticos.slice(1).toLowerCase();
    } while (!serMisticos || !["Guerreiro", "Mago", "Monge", "Ninja"].includes(serMisticos));
    
    
    function1 = estruturaDeDecisão(serMisticos, nome);
    
    function estruturaDeDecisão(serMistico, nome) {
       
        if (serMistico === "Mago") {
            const mago = new magoMagia(serMistico, nome);
            mago.escrever();
        }
    
        else if (serMistico === "Guerreiro") {
            const guerreiro = new guerreiroEspada(serMistico, nome);
            guerreiro.escrever();
        }
    
        else if (serMistico === "Monge") {
            const monge = new mongeArtesMarcias(serMistico, nome);
            monge.escrever();
        }
    
        else if (serMistico === "Ninja") {
            const ninja = new ninjaShuriken(serMistico, nome);
            ninja.escrever();
        }
    }

    repetir = prompt("Deseja repetir? (sim/não)").toLowerCase();
}while(repetir === "sim");
