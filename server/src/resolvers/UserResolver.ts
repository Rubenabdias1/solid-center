import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { User } from '@generated/type-graphql';
import { AppContext } from '../types/AppContext';
import * as argon2 from 'argon2';

@ObjectType()
export class FieldError {
  @Field()
  field!: string;
  @Field()
  message!: string;
}

@ObjectType()
class UserResponse {
  @Field(() => User, { nullable: true })
  user?: User | null;

  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[];
}

@Resolver(User)
export class UserResolver {
  @Mutation(() => UserResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { req, prisma }: AppContext
  ): Promise<UserResponse> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await argon2.verify(user?.password, password)))
      return {
        errors: [
          {
            field: 'username',
            message: 'Credentials do not match our records.',
          },
        ],
      };

    req.session.user = user;

    return { user };
  }
}
