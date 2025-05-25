using MediatR;

namespace Finances.Application.Users.UpdateUserPhotoUrl;

public record UpdateUserPhotoUrlCommand(Guid UserId, string PhotoUrl) : IRequest<Guid>;