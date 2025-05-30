﻿using MediatR;

namespace Finances.Application.Users.CreateUser;

public record CreateUserCommand(
    string Name, 
    string Email, 
    string Password, 
    string Token,
    string? Photo_Url) : IRequest<Guid>;