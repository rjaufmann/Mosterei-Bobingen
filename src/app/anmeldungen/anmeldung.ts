export enum Mitglied_Enum {
  J = "j",
  N = "n"
}

export enum SaftArt_Enum {
  SM = "SM",
  PS = "PS",
  P = "P"
}

export enum Abfuellung_Enum {
  FLASCHEN = "Flaschen",
  BAGINBOX = "BagInBox"
}


export class Anmeldung {
  private mitglied: Mitglied_Enum;
  private saftart: SaftArt_Enum;
  private abfuellung: Abfuellung_Enum;

  constructor(
    private id: number,
    private userid: number,
    private beginn: Date,
    private finish: Date,
    private statusMessage: string,
    private fullName: string,
    private email: string,
    private phone: string,
    private mobil: string,
    private bemerkung: string,
    private angemeldeteMenge: string,
    private const_miglied: string,
    private const_saftart: string,
    private const_abfuellung: string) {

    this.mitglied = (this.const_miglied === Mitglied_Enum.J ? Mitglied_Enum.J : Mitglied_Enum.N);
    this.abfuellung = (this.const_abfuellung === Abfuellung_Enum.FLASCHEN ? Abfuellung_Enum.FLASCHEN : Abfuellung_Enum.BAGINBOX);
    if (this.const_saftart === SaftArt_Enum.SM) {
      this.saftart = SaftArt_Enum.SM;
    } else if (this.const_saftart === SaftArt_Enum.PS) {
      this.saftart = SaftArt_Enum.PS;
    } else {
      this.saftart = SaftArt_Enum.P;
    }

  }

  // fromJSON is used to convert an serialized version
  // of the User to an instance of the class
  static fromJSON(json: AnmeldungJSON|string): Anmeldung {
    if (typeof json === 'string') {
      // if it's a string, parse it first
      return JSON.parse(json, Anmeldung.reviver);
    } else {
      // create an instance of the Anmeldung class
      let anmeldung = Object.create(Anmeldung.prototype);
      // copy all the fields from the json object
      return Object.assign(anmeldung, json, {
        // convert fields that need converting
        beginn: new Date(json.beginn),
        finish: new Date(json.finish)
      });
    }
  }

  // reviver can be passed as the second parameter to JSON.parse
  // to automatically call User.fromJSON on the resulting value.
  static reviver(key: string, value: any): any {
    return key === "" ? Anmeldung.fromJSON(value) : value;
  }

}

// A representation of anmeldung data that can be converted to
// and from JSON without being altered.
interface AnmeldungJSON {
  id: number;
  userid: number;
  beginn: string;
  finish: string;
  statusMessage: string;
  fullName: string;
  email: string;
  phone: string;
  mobil: string;
  bemerkung: string;
  angemeldeteMenge: string;
  const_miglied: string;
  const_saftart: string;
  const_abfuellung: string;
}
