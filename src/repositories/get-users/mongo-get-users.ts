import { IGetUsersRepository } from "../../controllers/get-users/protocols";
import { User } from "../../models/user";

export class MongoGetUsersRepository implements IGetUsersRepository {
  async getUsers(): Promise<User[]> {
    return [
      {
        firstName: "Wolney",
        lastName: "Carneiro",
        email: "wolney91@gmail.com",
        password: "123",
      },
    ];
  }
}
