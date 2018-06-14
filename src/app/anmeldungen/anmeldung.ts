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


export interface Anmeldung {
  id: number;
  beginn: Date;
  finish: Date;
  createdOn: Date;
  userId: number;
  createdBy: string;
  updatedOn: Date;
  statusMessage: string;
  fullName: string;
  email: string;
  phone: string;
  mobile?: any;
  angemeldeteMenge: string;
  saftart: string[];
  abfuellung: string[];
  mitglied: string;
  bemerkung?: any;
  mostenId?:number;
  suessmost:boolean;
  pressen: boolean;
  pressen_separiern: boolean;
  bagInBox: boolean;
  flaschen: boolean;
}


