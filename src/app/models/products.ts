// Products interface.

export interface Products{
     id: number,
     titile:string,
     description:string,
     price:number,
     discountPercentage?: number,
     rating?: number,
     stock?: number,
     brand?:string,
     category?:string,
     images:[]

 }