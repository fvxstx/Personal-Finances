using Finances.Application.Users.CreateUser;
using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances_Backend.Users;

public static class UserApi
{
    public static void RegisterUserApi(this WebApplication app)
    {
        app.MapPost("/users", async (CreateUserRequest request, IMediator mediator) =>
        {
            var command = new CreateUserCommand(request.Name, request.Email, request.Password, request.Photo_Url);

            var newUserId = await mediator.Send(command);
            return TypedResults.Created($"/users/{newUserId}", newUserId);

        }).WithName("CreateUser");

        app.MapGet("/users", async (IMediator mediator) =>
        {
            var users = await mediator.Send(new GetUsersQuery());
            return TypedResults.Ok(users);
        }).WithName("GetUsers");
    }
}