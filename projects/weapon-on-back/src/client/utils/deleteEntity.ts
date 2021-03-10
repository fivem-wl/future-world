import {EntityHandle} from '../types';

export function deleteEntity(entity: EntityHandle): void {
    if (DoesEntityExist(entity)) {
        DeleteEntity(entity);
    }
}
