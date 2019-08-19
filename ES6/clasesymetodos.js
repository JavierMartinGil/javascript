class Persona {

    constructor(pNombre, pEdad, pSexo) {
        this._nombre = pNombre;
        this.edad = pEdad;
        this.sexo = pSexo;
        this.activo = true;
    }

    get nombre() {

        return this._nombre.toUpperCase();
    }

    set nombre(value) {
        console.log('Nombre: ', `Valor Anterior: ${this._nombre} | Valor Actual: ${value}`);
        this._nombre = value;
    }

    hablar() {
        return 'Hola Mundo!';
    }

    mostrar() {
        return `Hola soy ${this.nombre} y tengo ${this.edad} años`;
    }

}

class Vivienda {
    constructor(pPiso, pPuerta) {
        this.piso = pPiso;
        this.puerta = pPuerta;
        this.habitantes = [];
    }

    agregarHabitante(pPersona) {

        this.habitantes.push(pPersona);

    }

    mostrar() {
        let total = `VIVIENDA: Piso: ${this.piso}. Puerta ${this.puerta}`;

        for (let habitante of this.habitantes) {

            total += '\n' + habitante.mostrar();
        }

        return total;
    }
}

class Edificio {
    constructor(pCalle, pNumero) {
        this.calle = pCalle;
        this.numero = pNumero;
        this.casas = [];
    }

    agregarCasa(pVivienda) {

        this.casas.push(pVivienda);
    }

    mostrar() {
        let total = `EDIFICIO: Calle ${this.calle}. Número: ${this.numero}`

        for (let i = 0; i < this.length; i++) {
            total += '\n' + this.casas[i].mostrar();
        }
    }
}


let pers1 = new Persona('Cesar', 45, 'M');
let pers2 = new Persona('Ramiro', 35, 'M');
let pers3 = new Persona('Ana', 39, 'F');

let viv1 = new Vivienda(2, 'dcha');
let viv2 = new Vivienda(2, 'izq');

let edif = new Edificio('Gran Vía', 23);

viv1.agregarHabitante(pers1);
viv2.agregarHabitante(pers2);
viv2.agregarHabitante(pers3);

edif.agregarCasa(viv1);
edif.agregarCasa(viv2);


console.log(viv1.mostrar());
console.log(viv2.mostrar());

