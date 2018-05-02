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
export class AnmeldungenModel  {
  Mitglied : Mitglied_Enum;
  Beginn : string;
  Vollstaendiger_Name : string;
  Telefonnummer : string;
  Saftart : SaftArt_Enum;
  Abfuellung : Abfuellung_Enum;
  Bemerkung : string;
  Mostmenge : string;


  constructor(Mitglied: Mitglied_Enum, Beginn: string, Vollstaendiger_Name: string, Telefonnummer: string, Saftart: SaftArt_Enum, Abfuellung: Abfuellung_Enum, Bemerkung: string, Mostmenge: string) {
    this.Mitglied = Mitglied;
    this.Beginn = Beginn;
    this.Vollstaendiger_Name = Vollstaendiger_Name;
    this.Telefonnummer = Telefonnummer;
    this.Saftart = Saftart;
    this.Abfuellung = Abfuellung;
    this.Bemerkung = Bemerkung;
    this.Mostmenge = Mostmenge;
  }
}
