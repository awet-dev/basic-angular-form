export class Friend {
  public fName:string
  public lName:string
  public email:string
  public phone:number
  public signatureMove:string
  public language:string


  constructor(fName: string, lName: string, email: string, phone: number, signatureMove: string, language: string) {
    this.fName = fName;
    this.lName = lName;
    this.email = email;
    this.phone = phone;
    this.signatureMove = signatureMove;
    this.language = language;
  }
}
