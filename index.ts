import { Automovil } from './src/classes/automovil';
import { TodoTerreno } from './src/classes/todoTerreno';
import { Nacional } from './src/classes/nacional';
import { Extranjero } from './src/classes/extranjero';
import { Autos, iAuto, iTodoTerreno } from './src/schemas/automovil'
import { Humanos, iNacional, iExtranjero } from './src/schemas/persona'
import { db } from './src/database/database'


// Declaramos tipo array de tipo Automovil
let automoviles: Array<Automovil> = new Array<Automovil>();

// Podemos asignar tanto Automovil como TodoTerreno
automoviles[0] = new Automovil('AAD1', 25000, 130);
automoviles[1] = new Automovil('AAD2', 35000, 170);
automoviles[2] = new TodoTerreno('AAD3', 40000, 190, '4x2');
automoviles[3] = new TodoTerreno('AAD4',38000, 145, '4x4');

// Declaramos tipo array de tipo Persona
let personas: Array<Nacional> = new Array<Nacional>();

// Podemos asignar tanto Nacional como Extranjero
personas[0] = new Nacional('DNI_01', 'ESP', 'Juan Primero', 20000, 'AAD1');
personas[1] = new Nacional('DNI_02', 'ESP', 'María Segundo', 30000, 'AAD3');
personas[2] = new Extranjero('DNI_03', 'EXT', 'Christine First', 20000, 'inglés', 'AAD1');
personas[3] = new Extranjero('DNI_04', 'EXT', 'Marie Seconde', 32000, 'francés', 'AAD3');
personas[4] = new Extranjero('DNI_05', 'EXT', 'Kristina Drei', 37000, 'alemán', 'AAD2');

let salvar = async () =>{

  // objeto schema
  let oSchema: any
  let oSchema_persona: any
  // documento schema de tipo 
  let dShemaAuto: iAuto = 
    {
      _placa: null,
      _tipoObjeto: null,
      _precioBase: null,
      _potenciaMotor: null
    }
  
    let dShemaTT: iTodoTerreno = 
    {
      _placa: null,
      _tipoObjeto: null,
      _precioBase: null,
      _potenciaMotor: null,
      _traccion: null
    }
    let dShemaNacional: iNacional = 
    {
      _DNI: null,
      _tipoNacionalidad: null,
      _nombre: null,
      _sueldo: null,
      _placa: null,
    }
    let dShemaExtranjero: iExtranjero = 
    {
      _DNI: null,
      _tipoNacionalidad: null,
      _nombre: null,
      _sueldo: null,
      _idioma: null,
      _placa: null,
      
    }
  await db.conectarBD()

  for (let a of automoviles) {
    // valores comunes ->
    dShemaAuto._placa = dShemaTT._placa = a.placa
    dShemaAuto._potenciaMotor = dShemaTT._potenciaMotor = a.potenciaMotor
    dShemaAuto._precioBase = dShemaTT._precioBase = a.precioBase    

    // Valores propios ->
    // Hay que preguntar primero por las subclases de automovil
    if (a instanceof TodoTerreno){
      dShemaTT._tipoObjeto = "T"
      dShemaTT._traccion = a.traccion
      oSchema = new Autos(dShemaTT)
    }else if (a instanceof Automovil) {
      dShemaAuto._tipoObjeto = "A"
      oSchema = new Autos(dShemaAuto)
    }
    await oSchema.save()
  }
    for (let a of personas) {
      // valores comunes ->
      dShemaNacional._DNI = dShemaExtranjero._DNI = a.dni
      dShemaNacional._tipoNacionalidad = dShemaExtranjero._tipoNacionalidad = a.tipoNacionalidad
      dShemaNacional._nombre = dShemaExtranjero._nombre = a.nombre  
      dShemaNacional._sueldo = dShemaExtranjero._sueldo = a.sueldo 
      dShemaNacional._placa = dShemaExtranjero._placa = a.placa  
  
      // Valores propios ->
        // Hay que preguntar primero por las subclases de persona
        if (a instanceof Extranjero){
          dShemaExtranjero._tipoNacionalidad = "EXT"
          dShemaExtranjero._idioma = a.idioma
          oSchema_persona = new Humanos(dShemaExtranjero)
        }else if (a instanceof Nacional) {
          dShemaNacional._tipoNacionalidad = "ESP"
          oSchema_persona = new Humanos(dShemaNacional)
        }
        await oSchema_persona.save()
  }
  await db.desconectarBD()
}

salvar()


