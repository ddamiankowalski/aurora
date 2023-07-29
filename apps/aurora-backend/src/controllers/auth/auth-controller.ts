import { User } from '../../database/entity/user';
import bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { JWTTokens } from '../../interfaces/auth';

export class AuthController {
  private static _controller: AuthController | null = null;

  public static getInstance(): AuthController {
    if (!this._controller) {
      this._controller = new AuthController();
    }

    return this._controller;
  }

  public async login(email?: string, password?: string): Promise<JWTTokens> {
    if (!email || !password) {
      throw new Error('Email or password was not provided');
    }

    const user = await this.getUser(email);
    const compare = await bcrypt.compare(password, user.password);
    if (!compare) {
      throw new Error('Password is incorrect');
    }

    return this.getJwtTokens(email, password);
  }

  private async getUser(email: string): Promise<User> {
    const user = await User.findOneBy({ email });
    if (!user) {
      throw new Error('No user was found');
    }

    return user;
  }

  private getJwtTokens(email: string, password: string): JWTTokens {
    const accessToken = jwt.sign(
      { email, password },
      process.env.ACCESS_TOKEN_SECRET,
      { expiresIn: '15s' }
    );

    const refreshToken = jwt.sign(
      { email, password },
      process.env.REFRESH_TOKEN_SECRET
    );

    return { accessToken, refreshToken };
  }
}
