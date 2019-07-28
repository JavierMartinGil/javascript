class Persona {
    constructor(pNombre, pEdad, pSexo) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.sexo = pSexo;

    }
}

let pers = new Persona('Javier', 24, 'M');
let pers2 = new Persona('Ana Rosa', 60, 'F');

console.log(pers2.nombre);
console.log(pers2);