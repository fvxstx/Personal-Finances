using Finances.Application.Common.Abstractions;
using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.GetByIdUser;

internal class GetUserByIdQueryHandler(IUserRepository userRepository) : IRequestHandler<GetUserByIdQuery, UserResponse>
{
    public async Task<UserResponse> Handle(GetUserByIdQuery request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByIdAsync(request.userId);
        if (user == null)
        {
            throw new Exception("Usuário não encontrado");
        }
        return await Task.FromResult(new UserResponse(user!));
    }
}