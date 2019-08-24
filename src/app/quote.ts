export class Quote {
    showDescription: boolean;
    constructor(public id: number,public name: string, public author: string,public postedDate: Date, public description: string){
      this.showDescription=false;
    }
}
