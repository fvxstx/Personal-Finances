using MediatR;

namespace Finances.Application.CodesValidation.CreateCodeRegister;

public record CreateCodeRegisterCommand(string Value) : IRequest<string>;