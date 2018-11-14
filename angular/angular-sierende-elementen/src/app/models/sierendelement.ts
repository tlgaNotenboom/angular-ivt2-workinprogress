import { GeoPoint } from "./geopoint";

export class SierendElement {

    constructor(
        public id: number,
        public identificatie: string,
        public aanduidingsobject: string,
        public geografischeligging: string,
        public kunstenaar: string,
        public materiaal: string,
        public omschrijving: string,
        public plaatsingsdatum: number,
        public url: string,
        public geometry: GeoPoint
    ){}
    
}