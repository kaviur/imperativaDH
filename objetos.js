//Grupo 2 Karen Urbano- Juan Daniel Aguirre Lopez -Jurany Adelia Ramirez - Lizeth Alonso - Mathias Curbelo, Luisa Carolina Toro
//la lista de clientes.
let arrayCuentas = [
    {
      nroCuenta: 5486273622,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 27771,
      titularCuenta: "Abigael Natte",
    },
    {
      nroCuenta: 1183971869,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 8675,
      titularCuenta: "Ramon Connell",
    },
    {
      nroCuenta: 9582019689,
      tipoDeCuenta: "Caja de Ahorro",
      saldoEnPesos: 27363,
      titularCuenta: "Jarret Lafuente",
    },
    {
      nroCuenta: 1761924656,
      tipoDeCuenta: "Cuenta Corriente",
      saldoEnPesos: 32415,
      titularCuenta: "Ansel Ardley",
    },
    {
      nroCuenta: 7401971607,
      tipoDeCuenta: "Cuenta Unica",
      saldoEnPesos: 18789,
      titularCuenta: "Jacki Shurmer",
    },
  ];
  // podes continuar tu codigo a partir de aca!

  const banco = {
    nombre: 'BancoA',
    clientes: arrayCuentas,
    consultarCliente: function(titular){
        if(this.clientes.length > 0){
            for(let i = 0; i < this.clientes.length; i++){
                let clienteActual = this.clientes[i];
                if(clienteActual.titularCuenta === titular){
                    return clienteActual
                }
            }
        }else{
            return null
        }    
    },
    deposito: function(titular, cantDinero){
        this.consultarCliente(titular).saldoEnPesos += cantDinero
        return `Depósito realizado, su
        nuevo saldo es: ${this.consultarCliente(titular).saldoEnPesos}`
    },
    extraccion: function(titular, cantDinero){
        let saldo = this.consultarCliente(titular).saldoEnPesos

        if(saldo >= cantDinero){
            saldo -= cantDinero
            return `Extracción realizada correctamente, su nuevo
            saldo es: ${saldo}`
        }else{
            return '“Fondos insuficientes'
        }
    }
  }

  function propiedadUnica(arr, propiedad) {
    const nuevoArreglo = [];
    
    for (let i = 0; i < arr.length; i++) {
      const nuevoObjeto = {};
      nuevoObjeto[propiedad] = arr[i][propiedad];
      nuevoArreglo.push(nuevoObjeto);
    }
    
    return nuevoArreglo;
  }

  const alumno = {
    nombre: "",
    numeroLegajo: "",
    notas: [],
    notaAprobacion: 6,
    
    agregarNota: function(nota) {
      this.notas.push(nota);
    },
    
    calcularPromedio: function() {
      if (this.notas.length === 0) {
        return 0;
      }
      
      const sumaNotas = this.notas.reduce((acumulador, nota) => acumulador + nota, 0);
      return sumaNotas / this.notas.length;
    },
    
    estaAprobado: function() {
      const promedio = this.calcularPromedio();
      return promedio >= this.notaAprobacion;
    }
  };
  console.log(banco.consultarCliente('Ansel Ardley'))
  console.log(banco.deposito('Ansel Ardley',100))
  console.log(banco.extraccion('Ansel Ardley',100))