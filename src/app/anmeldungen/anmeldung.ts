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


export class Anmeldung  {
  mitglied : Mitglied_Enum;
  beginn : Date;
  vollstaendiger_Name : string;
  telefonnummer : string;
  saftart : SaftArt_Enum;
  abfuellung : Abfuellung_Enum;
  bemerkung : string;
  mostmenge : string;


  constructor(Mitglied: Mitglied_Enum, Beginn: Date, Vollstaendiger_Name: string, Telefonnummer: string, Saftart: SaftArt_Enum, Abfuellung: Abfuellung_Enum, Bemerkung: string, Mostmenge: string) {
    this.mitglied = Mitglied;
    this.beginn = Beginn;
    this.vollstaendiger_Name = Vollstaendiger_Name;
    this.telefonnummer = Telefonnummer;
    this.saftart = Saftart;
    this.abfuellung = Abfuellung;
    this.bemerkung = Bemerkung;
    this.mostmenge = Mostmenge;
  }
}

