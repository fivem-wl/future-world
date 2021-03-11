import { ActionType } from 'actionType';
import { AttachDetail } from './index';

export interface ActionSet {
  actionType: ActionType;
  attachDetail?: AttachDetail;
}
