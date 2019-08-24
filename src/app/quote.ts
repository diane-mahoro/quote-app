export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string, public author: string,public dueon: Date, public description: string){
      this.showDescription=false;
    }
}
