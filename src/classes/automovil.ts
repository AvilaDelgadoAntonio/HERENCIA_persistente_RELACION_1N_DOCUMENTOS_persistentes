export class Automovil {
  private _placa: string;
  protected _precioBase: number; // para acceder en la subclase
  private _potenciaMotor: number;
  
  constructor(placa: string, precioBase: number, potenciaMotor: number) {
    this._placa = placa;
    this._precioBase = precioBase;
    this._potenciaMotor = potenciaMotor;
  }
  get placa() {
    return this._placa;
  }
  get precioBase() {
    return this._precioBase;
  }
  get potenciaMotor() {
    return this._potenciaMotor;
  }
  precio(): number {
    let precio: number;
    precio = this._precioBase;
    if (this._potenciaMotor > 150) {
      precio += 0.2 * precio;
    }
    return precio;
  }
  todo() {
    return `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
  }
}
