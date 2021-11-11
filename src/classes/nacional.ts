export class Nacional {
    private _DNI: string;
    protected _tipoNacionalidad: string; // para acceder en la subclase
    private _nombre: string;
    private _sueldo: number;
    private _placa: string;
    
    constructor(dni: string, tipoNacionalidad: string, nombre: string, sueldo: number, placa: string) {
      this._DNI = dni;
      this._tipoNacionalidad = tipoNacionalidad;
      this._nombre = nombre;
      this._sueldo = sueldo;
      this._placa = placa;
    }
    get dni() {
      return this._DNI;
    }
    get tipoNacionalidad() {
      return this._tipoNacionalidad;
    }
    get nombre() {
      return this._nombre;
    }
    get sueldo() {
        return this._sueldo;
      }
      get placa() {
        return this._placa;
      }
     /*precio(): number {
      let precio: number;
      precio = this._tipoNacionalidad;
      if (this._potenciaMotor > 150) {
        precio += 0.2 * precio;
      }
      return precio;
    }*/
    /*todo() {
      return `Precio base: ${this._precioBase}, potencia: ${this._potenciaMotor}`;
    }*/
  }