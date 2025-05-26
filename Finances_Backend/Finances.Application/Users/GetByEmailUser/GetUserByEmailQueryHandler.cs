using Finances.Application.Common.Abstractions;
using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.GetByEmailUser;

internal class GetUserByEmailQueryHandler(IUserRepository userRepository) : IRequestHandler<GetUserByEmailQuery, UserResponse>
{
    public async Task<UserResponse> Handle(GetUserByEmailQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByEmailAsync(request.email);
        if (user == null)
        {
            throw new Exception("Usuário não encontrado");
        }
        return await Task.FromResult(new UserResponse(user!));
    }
}