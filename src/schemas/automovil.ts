import {Schema, model } from 'mongoose'
// Definimos el Schema
const automovilSchema = new Schema({
    _placa: {
        type: String  
    },
    _tipoObjeto: {
        type: String  //Valores "A, "T"...
    },
    _precioBase: {
        type: Number
    },
    _potenciaMotor: {
        type: Number
    },
    _traccion: {
        type: String
    },
})


export type iAuto = {
    _placa: string | null,
    _tipoObjeto: string | null,
    _precioBase: number | null,
    _potenciaMotor: number | null,

  }

  export type iTodoTerreno = {
    _placa: string | null,
    _tipoObjeto: string | null,
    _precioBase: number | null,
    _potenciaMotor: number | null,
    _traccion: string | null
  }

// La colección de la BD (Plural siempre)
export const Autos = model('automoviles', automovilSchema)