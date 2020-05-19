export interface Chantier {
    chantierID?: string;
    nomchantier?: string;
    nombreintervenants?: number;
    nombrecasiers?: number;
    nombremontecharge?: number;
    nombregrues?: number;
    photo?: string;
    responsable?: [];
    involvedcompagny?: [];
    starttime?: Date;
    endtime?: Date;
}
