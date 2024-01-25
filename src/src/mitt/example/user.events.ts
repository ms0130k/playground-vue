import User from '@/src/mitt/example/user.model';
import mitt from 'mitt';

type UserEvents = {
  'user:save': User,
  'user:delete': number,
}

export const userEventEmitter = mitt<UserEvents>();