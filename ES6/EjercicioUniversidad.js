class Profesor {

    constructor(pNombre, pApellidos, pExperiencia) {
        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.experiencia = pExperiencia;
    }


    mostrarProfesor() {
        return `${this.nombre} ${this.apellidos} experiencia: ${this.experiencia} años`
    }

};

let profesor1 = new Profesor('Antonio', 'Martinez Lopez', 10);
let profesor2 = new Profesor('Luis', 'Perez Gil', 2);
let profesor3 = new Profesor('Carlos', 'Lima Ortiz', 4);


class Asignatura {

    constructor(pNombre) {
        this.nombre = pNombre;
        this.profesores = [];
    }

    agregarProfesor(pProfesor) {

        this.profesores.push(pProfesor);

    }

    mostrarAsignatura(booleano) {
        let total = "";
        if (booleano == true) {
            total = `ASIGNATURA: ${this.nombre} \n`;

            for (let profesor of this.profesores) {
                total += `PROFESOR: ${profesor.mostrarProfesor()} \n`;
            }

        }
        else {
            total = `ASIGNATURA: ${this.nombre} \n`

        }
        return total;
    }
}

let asig1 = new Asignatura('Ciencias');
let asig2 = new Asignatura('Ingles');

asig1.agregarProfesor(profesor1);
asig2.agregarProfesor(profesor3);
//asig1.mostrarAsignatura(true);
//asig2.mostrarAsignatura(false);


class Estudiante {

    constructor(pNombre, pApellidos) {

        this.nombre = pNombre;
        this.apellidos = pApellidos;
        this.asignaturas = [];
    }

    agregarAsignaturas(pAsignatura) {

        this.asignaturas.push(pAsignatura);
    }

    mostrarEstudiante() {
        let total = `Estudiante ${this.nombre} ${this.apellidos} \n`

        for (let asignatura of this.asignaturas) {
            total += asignatura.mostrarAsignatura(true);
        }
        return total;
    }
}

let estu1 = new Estudiante('Luis', 'Ramirez Ramos');
let estu2 = new Estudiante('Marta', 'De Miguel');
estu1.agregarAsignaturas(asig1);
estu1.agregarAsignaturas(asig2);
estu2.agregarAsignaturas(asig2);

console.log(estu1.mostrarEstudiante());

