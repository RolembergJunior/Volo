export interface Datatype{ 
    near_earth_objects: NearEarthObjectsType

}

export interface NearEarthObjectsType{
    [x: string]:AsteroidsType[]
}

export interface AsteroidsType{
    id: number;
    name: string;
    close_approach_data : {relative_velocity: string}[];
}
