import { Soiree } from './soiree.interface';

export interface Schedule {
    version: string;
    events: Soiree[];
}
