export class Product{
    constructor(public title: string, 
        public price: string, 
        public category: string, 
        public description: string, 
        public image: string,
        public id: number,
        public quantity?: number,
        public productId?:undefined|number){

    }
}