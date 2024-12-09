interface LaunchSite {
    site_id: string
    site_name: string
    site_name_long: string
}

interface LaunchRocketFairings { 
    recovered: boolean;
    recovery_attempt: boolean;
    reused: boolean;
    ship: string;
}



interface LaunchRocketFirstStage { 
    cores: [];
}


interface ILaunchRocket { 
    fairings: LaunchRocketFairings
    first_stage: LaunchRocketFirstStage
    rocket: Rocket
    rocket_name: string
    rocket_type: string
    second_stage: string
}



export interface Launch {
    id: string;
    mission_name: string;
    launch_date_utc: Date;
    launch_site?: LaunchSite
    rocket: ILaunchRocket;
    details?: string;
}


export type LaunchQueryResult = {
    launches: Launch[]
}

interface Distance { 
    feet: number;
    meters?: number;
}

interface Mass { 
    kg: number;
    lb: number;
}
export type Rocket = {
    id: string;
    name: string;
    description: string;
    first_flight: string;
    height: Distance
    diameter: Distance
    mass: Mass
    stages: number;
    launchId: string; 
}
