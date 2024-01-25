import User from '@/src/mitt/user.model';

export type UserEvent = {
  'user:save': User;
};