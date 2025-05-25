using Finances.Application.Common.Abstractions;
using Finances.Domain.Users;
using MediatR;

namespace Finances.Application.Users.CreateUser;

internal class CreateUserCommandHandler(IUserRepository userRepository, IHashService hashService, IAppSettings appSettings) : 
    IRequestHandler<CreateUserCommand, Guid>
{
    public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        var hashedPassword = hashService.HashValue(request.Password);
        
        var user = User.CreateNew(request.Name, request.Email, hashedPassword, request.Photo_Url);
        
        /*Verify the token value if is ok and then register the user */
        if (request.Token == appSettings.SpecialToken)
        {
            userRepository.Add(user);
            await userRepository.UnitOfWork.CommitAsync(cancellationToken);
            return user.Id;
        }

        throw new Exception("Token invalido");
    }
}