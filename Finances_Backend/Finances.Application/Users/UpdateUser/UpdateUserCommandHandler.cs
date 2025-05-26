using Finances.Application.Common.Abstractions;
using Finances.Application.Users.GetUsers;
using Finances.Domain.Users;
using MediatR;

namespace Finances.Application.Users.UpdateUser;

internal class UpdateUserCommandHandler(IUserRepository userRepository) : IRequestHandler<UpdateUserCommand, Guid>
{
    public async Task<Guid> Handle(UpdateUserCommand request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByIdAsync(request.UserId);
        if (user == null)
        {
            throw new Exception("Usuário não encontrado");
        }
        
        user.UpdateUser(request.Name, request.Email);
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}