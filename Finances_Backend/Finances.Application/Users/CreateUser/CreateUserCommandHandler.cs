using Finances.Application.Common.Abstractions;
using Finances.Domain.Users;
using MediatR;

namespace Finances.Application.Users.CreateUser;

internal class CreateUserCommandHandler(IUserRepository userRepository) : IRequestHandler<CreateUserCommand, Guid>
{
    public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var user = User.CreateNew(request.Name, request.Email, request.Password, request.Photo_Url);
        userRepository.Add(user);
        
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}