import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/services/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) {
      return null;
    }
    const { password: pwd, ...otherFields } = user.toJSON();
    const isMatch = await bcrypt.compare(password, user.password);
    if (isMatch) {
      return otherFields;
    }
    return otherFields;
  }
}
