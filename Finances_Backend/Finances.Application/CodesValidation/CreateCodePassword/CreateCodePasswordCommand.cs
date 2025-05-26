using MediatR;

namespace Finances.Application.CodesValidation.CreateCodePassword;

public record CreateCodePasswordCommand(string Email): IRequest<string>;