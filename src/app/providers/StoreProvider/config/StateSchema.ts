import { CounterSchema } from 'entities/Counter';
import { UserSchema } from 'entities/User/model/types/user';
import { LoginSchema } from 'features/AuthByUsername/model/types/loginSchema';

export interface StateSchema{
  counter: CounterSchema;
  user: UserSchema;
  loginForm?: LoginSchema
}
