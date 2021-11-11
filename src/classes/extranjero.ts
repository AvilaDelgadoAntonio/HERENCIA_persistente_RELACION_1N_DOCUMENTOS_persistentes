import { Nacional } from './nacional';
export class Extranjero extends Nacional {
  private _idioma: string;
  constructor(dni: string, tipoNacionalidad: string, nombre: string, sueldo: number, idioma: string, placa: string) {
    super(dni, tipoNacionalidad, nombre, sueldo, placa);
    this._idioma = idioma;
  }
  get idioma() {
    return this._idioma;
  }
  /*get prueba(){
    return this._precioBase  // solo accedo si es protected
  }*/
  // sobre escribimos el método
  /*precio(): number {
    let precio: number;
    precio = super.precio();
    if (this._traccion == '4x4') {
      precio += 0.1 * precio;
    }
    return precio;
  }*/

  /*todo(){
    let resultado: string
    resultado = `${super.todo()}, tracción: ${this._traccion}`
    return resultado
  }*/
}