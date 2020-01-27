let empleados = [

    {
        id: 1,
        nombre: "Daniel"

    }, {

        id: 2,
        nombre: "Felipe"
    },
    {

        id: 3,
        nombre: "Sara"

    }

];

let salarios = [

    {
        id: 1,
        salario: 100
    },
    {

        id: 2,
        salario: 200

    }

];

let getEmpleado = (id) => {

    return new Promise((resolve, reject) => {

        //resolve: Si la promesa fue exitosa. Solo se puede regresar un argumento
        //reject: Si la promesa ha fallado.

        let empleadoDB = empleados.find((empleado) => empleado.id === id);

        if (!empleadoDB) {
            reject(`El empleado con id: ${id} no existe en la base de datos`);

        } else {

            resolve(empleadoDB);

        }

    });

}

let getSalario = (empleado) => {

    return new Promise((resolve, reject) => {

        let salarioDB = salarios.find((salario) => salario.id === empleado.id);

        if (!salarioDB) {

            reject(`No se encontro un salario para el afiliado con id: ${empleado}`);

        } else {
            resolve({
                nombre: empleado.nombre,
                salario: salarioDB.salario,
                id: empleado.id
            });
        }
    });

}

getEmpleado(2).then(empleado => {

    console.log('Empleado de base de datos:', empleado);

    getSalario(empleado).then(salario => {

        console.log(`El salario del usuario ${salario.nombre} es de ${salario.salario}$`)

    }, (err) => {

        console.log(err);

    });

}, (err) => {

    console.log(err);

});