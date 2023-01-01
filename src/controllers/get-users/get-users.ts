import { IGetUsersController, IGetUsersRepository } from "./protocols";
export class GetUsersController implements IGetUsersController {
  constructor(private readonly getUsersReepository: IGetUsersRepository) {}
  async handle() {
    try {
      const users = await this.getUsersReepository.getUsers();
      return {
        statusCode: 200,
        body: users,
      };
    } catch (error) {
      return {
        statusCode: 500,
        body: "Something went wrong",
      };
    }
  }
}
