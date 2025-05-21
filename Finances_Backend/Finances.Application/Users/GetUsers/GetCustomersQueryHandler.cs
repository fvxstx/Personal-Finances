using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Users.GetUsers;

internal class GetCustomersQueryHandler(IUserRepository userRepository) : IRequestHandler<GetUsersQuery, IEnumerable<UserResponse>>
{
    public async Task<IEnumerable<UserResponse>> Handle(GetUsersQuery request, CancellationToken cancellationToken)
    {
        var users = await userRepository.GetAllAsync();
        return await Task.FromResult(users.Select(c => new UserResponse(c)).ToList());
    }
}