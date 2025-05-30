﻿using Finances.Application.Users.CreateUser;
using Finances.Application.Users.GetByEmailUser;
using Finances.Application.Users.GetByIdUser;
using Finances.Application.Users.GetUsers;
using Finances.Application.Users.LoginUser;
using Finances.Application.Users.RedefineUserPassword;
using Finances.Application.Users.UpdateUser;
using Finances.Application.Users.UpdateUserPassword;
using Finances.Application.Users.UpdateUserPhotoUrl;
using MediatR;

namespace Finances_Backend.Users;

public static class UserApi
{
    public static void RegisterUserApi(this WebApplication app)
    {
        app.MapPost("/users", async (CreateUserRequest request, IMediator mediator) =>
        {
            var command = new CreateUserCommand(request.Name, request.Email, request.Password, request.Token, request.PhotoUrl);

            var newUserId = await mediator.Send(command);
            return TypedResults.Created($"/users/{newUserId}", newUserId);

        }).WithName("CreateUser").WithTags("Users");

        app.MapGet("/users", async (IMediator mediator) =>
        {
            var users = await mediator.Send(new GetUsersQuery());
            return TypedResults.Ok(users);
        }).RequireAuthorization().WithName("GetUsers").WithTags("Users");

        app.MapGet("/users/{id}", async (Guid id,IMediator mediator) =>
        {
            var user = await mediator.Send(new GetUserByIdQuery(id));
            return TypedResults.Ok(user);

        }).RequireAuthorization().WithName("GetUserById").WithTags("Users");
        
        app.MapGet("/users/email/{email}", async (string email,IMediator mediator) =>
        {
            var user = await mediator.Send(new GetUserByEmailQuery(email));
            return TypedResults.Ok(user);

        }).RequireAuthorization().WithName("GetUserByEmail").WithTags("Users");

        app.MapPut("users/{id}", async (Guid id, UpdateUserRequest request, IMediator mediator) =>
        {
            var command = new UpdateUserCommand(id, request.Name, request.Email);

            var userId = await mediator.Send(command);
            return TypedResults.Accepted($"/users/{userId}", userId);
            
        }).RequireAuthorization().WithName("UpdateUser").WithTags("Users");

        app.MapPatch("users/photo-url/{id}", async (Guid id, UpdateUserPhotoUrlRequest request,IMediator mediator) =>
        {
            var command = new UpdateUserPhotoUrlCommand(id, request.PhotoUrl);

            var userId = await mediator.Send(command);
            return TypedResults.Accepted($"/users/{userId}", userId);
            
        }).RequireAuthorization().WithName("UpdateUserPhotoUrl").WithTags("Users");

        app.MapPatch("users/redefine-password/{id}", 
            async (Guid id, RedfineUserPasswordRequest request, IMediator mediator) =>
            {
                var command = new RedefineUserPasswordCommand(id, request.LastPassword, request.NewPassword);
                var userId = await mediator.Send(command);
                return TypedResults.Accepted($"/users/{userId}", userId);

            }).RequireAuthorization().WithName("RedefinePassword").WithTags("Users");
        
        app.MapPost("user/login", async (LoginUserRequest request, IMediator mediator) =>
        {
            var command = new LoginUserCommand(request.Email, request.Password);
            var user = await mediator.Send(command);
            return TypedResults.Ok(user);
            
        }).WithName("LoginUser").WithTags("Users");
        
        app.MapPost("user/change-password", async (UpdateUserPasswordRequest request, IMediator mediator) =>
        {
            var command = new UpdateUserPasswordCommand(request.NewPassword, request.TokenValue);
            var userId = await mediator.Send(command);
            return TypedResults.Accepted($"/users/{userId}", userId);
            
        }).WithName("UpdateUserPassword").WithTags("Users");
    }
}