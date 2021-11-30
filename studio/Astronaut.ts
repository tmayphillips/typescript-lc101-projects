import { Payload } from './Payload'

export class Astronaut implements Payload {
    massKg:number
    name:string

    constructor(massKg:number, name:string) {
        massKg = this.massKg;
        name = this.name;
    }
    
}