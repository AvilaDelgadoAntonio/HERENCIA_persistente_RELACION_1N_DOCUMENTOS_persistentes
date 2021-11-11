import {Schema, model } from 'mongoose'
// Definimos el Schema
const personaSchema = new Schema({
    _DNI: {
        type: String  
    },
    _tipoNacionalidad: {
        type: String  //Valores "ESP", "EXT"...
    },
    _nombre: {
        type: String
    },
    _sueldo: {
        type: Number
    },
    _idioma: {
        type: String
    },
    _placa: {
        type: String  
    },
})


export type iNacional = {
    _DNI: string | null,
    _tipoNacionalidad: string | null,
    _nombre: string | null,
    _sueldo: number | null,
    _placa: string | null

  }

  export type iExtranjero = {
    _DNI: string | null,
    _tipoNacionalidad: string | null,
    _nombre: string | null,
    _sueldo: number | null,
    _idioma: string | null,
    _placa: string | null,
  }
  // creamos un dato tipo aad_historiales que usaremos en index.ts, importándolo al principio
  export interface Aad_historiales {
    DNI: string;
    nombre: string;
    placa: number;
}
// La colección de la BD (Plural siempre)
export const Humanos = model('personas', personaSchema)