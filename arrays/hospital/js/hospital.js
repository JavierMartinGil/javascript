var listaDePacientes = [
    paciente1 = {
                'nombre': 'Juan',
                'apellido': 'Lopez',
                'diagnostico': 'Fiebre',
                'edad': 37,
                'numeroSegSoc': 'A374132941',
    },

    paciente2 = {
                'nombre': 'Mario',
                'apellido': 'Garcia',
                'diagnostico': 'Gastroenteritis',
                'edad': 20,
                'numeroSegSoc': 'A001132941',
    },

    paciente3 = {
                'nombre': 'Ana',
                'apellido': 'Martinez',
                'diagnostico': 'Faringitis',
                'edad': 42,
                'numeroSegSoc': 'A002132940',
    },

    paciente4 = {
                'nombre': 'Bea',
                'apellido': 'Rodriguez',
                'diagnostico': 'Tos',
                'edad': 15,
                'numeroSegSoc': 'A003132941',
    },

    paciente5 = {
                'nombre': 'Carlos',
                'apellido': 'Chacon',
                'diagnostico': 'Gripe',
                'edad': 19,
                'numeroSegSoc': 'A004132940',
    },

    paciente6 = {
                'nombre': 'Olivia',
                'apellido': 'Perez',
                'diagnostico': 'Gripe',
                'edad': 27,
                'numeroSegSoc': 'A005132941',
    },

    paciente7 = {
                'nombre': 'Paula',
                'apellido': 'Vega',
                'diagnostico': 'Bronquitis',
                'edad': 22,
                'numeroSegSoc': 'A006132941',
    },

    paciente8 = {
                'nombre': 'Pablo',
                'apellido': 'Carrera',
                'diagnostico': 'Otitis',
                'edad': 51,
                'numeroSegSoc': 'A007132940',
    },

    paciente9 = {
                'nombre': 'Manuel',
                'apellido': 'Nieto',
                'diagnostico': 'Gripe',
                'edad': 82,
                'numeroSegSoc': 'A008132940',
    },

    paciente10 = {
                'nombre': 'Ramon',
                'apellido': 'Dominguez',
                'diagnostico': 'Sinusitis',
                'edad': 12,
                'numeroSegSoc': 'A009132941',
    }	
];

    for(var i=0; i<listaDePacientes.length; i++){

    if(listaDePacientes[i].edad>18 && listaDePacientes[i].edad<25 ){

    for ( clave in listaDePacientes[i])
        {
        var filtroEdad = document.write(clave + ": " + listaDePacientes[i][clave] + "<br>");   
            }
        
            }
        }
 
    document.write('<hr>')

    for(var i=0; i<listaDePacientes.length; i++){

        if(listaDePacientes[i].diagnostico == "Gripe" ){
    
        for ( clave in listaDePacientes[i]) {
    
            var filtroGripe = document.write(clave + ": " + listaDePacientes[i][clave] + "<br>");
             }
        
            }
        }


    document.write('<hr>')
    
    for(var i=0; i<listaDePacientes.length; i++){

        if(listaDePacientes[i].numeroSegSoc.charAt(9)== "0" ){
    
        for ( clave in listaDePacientes[i]) {
    
            var filtroGripe = document.write(clave + ": " + listaDePacientes[i][clave] + "<br>");
             }
        
            }
        }



// el programa va a realizar las siguientes funcionalidades:

// sacara por pantalla todos los pacientes de entre 18 y 25 años
// sacar por pantalla todos los pacientes que tengan gripe
// sacar por pantalla todos los pacientes cuyo numero de la ss acabe en 0