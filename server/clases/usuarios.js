

class Usuarios{

    constructor(){
        this.personas = [];
    }
    //Metodo para agregar personas 
    agregarPersona(id, nombre, sala){

        let persona = {id, nombre, sala};

        this.personas.push(persona);

        return this.personas;
    }
    // conseguimos una persona por el id y lo podemos llamar atraves del motodo
    getPersona(id){
        let persona = this.personas.filter( persona => persona.id === id)[0];
    
        return persona;
    
    }

    getPersonas(){
        return this.personas;
    }

    getPersonasPorSala( sala ){
        let personasEnSala = this.personas.filter(persona =>  persona.sala === sala);
        return personasEnSala;
    }

    borrarPersona(id){

        let personaBorrada = this.getPersona(id)
        //Aqui quitamos a la persona que se sale del chat del arreglo de personas
       this.personas = this.personas.filter( persona => persona.id != id)
        return personaBorrada;
    }
}
module.exports = {
    Usuarios
}