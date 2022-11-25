import { Arg, Ctx, Field, Mutation, ObjectType, Resolver } from 'type-graphql';
import { User } from '@generated/type-graphql';
import { AppContext } from '../types/AppContext';
import * as argon2 from 'argon2';

@ObjectType()
export class FieldError {
  @Field(() => String)
  field!: string;
  @Field(() => String)
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
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
    @Ctx() { req, prisma }: AppContext
  ): Promise<UserResponse> {
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user || !(await argon2.verify(user?.password, password)))
      return {
        errors: [
          {
            field: 'email',
            message: 'Credentials do not match our records.',
          },
        ],
      };

    req.session.user = user;

    return { user };
  }
  @Mutation(() => UserResponse)
  async register(
    @Arg('username', () => String) username: string,
    @Arg('firstName', () => String) firstName: string,
    @Arg('lastName', () => String) lastName: string,
    @Arg('email', () => String) email: string,
    @Arg('password', () => String) password: string,
    @Arg('confirmPassword', () => String) confirmPassword: string,
    @Ctx() { req, prisma }: AppContext
  ): Promise<UserResponse> {
    if (password !== confirmPassword)
      return {
        errors: [
          {
            field: 'confirmPassword',
            message: 'Passwords do not match.',
          },
        ],
      };
    let user = await prisma.user.findUnique({ where: { email } });

    if (user)
      return {
        errors: [
          {
            field: 'email',
            message: 'Already in use.',
          },
        ],
      };

    user = await prisma.user.create({
      data: {
        username,
        email,
        password: await argon2.hash(password),
        firstName,
        lastName,
      },
    });

    req.session.user = user;

    return { user };
  }
}
