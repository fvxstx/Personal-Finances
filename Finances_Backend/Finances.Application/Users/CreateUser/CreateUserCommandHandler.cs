using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using Finances.Domain.Users;
using MediatR;

namespace Finances.Application.Users.CreateUser;

internal class CreateUserCommandHandler(IUserRepository userRepository, ICodeValidationRepository codeValidationRepository, 
    IHashService hashService) : IRequestHandler<CreateUserCommand, Guid>
{
    public async Task<Guid> Handle(CreateUserCommand request, CancellationToken cancellationToken)
    {
        /*Verify the token value if is ok and then register the user */
        var isCodeVerify = await
            codeValidationRepository.GetActiveByValueAsync(request.Token, CodeValidationType.RegisterAuthentication);
        if (isCodeVerify == null) throw new Exception("Codigo Invalido");
        if (DateTime.UtcNow > isCodeVerify.CreatedAt.AddHours(isCodeVerify.Expiration_Time)) 
            throw new Exception("Código Expirado");
        if (isCodeVerify.Is_Active == false) throw new Exception("Codigo inativo");
        
        // After verify change the status to false
        isCodeVerify.UpdateIsActive(false);
        await codeValidationRepository.UnitOfWork.CommitAsync(cancellationToken);
        
        var hashedPassword = hashService.HashValue(request.Password);
        
        var user = User.CreateNew(request.Name, request.Email, hashedPassword, request.Photo_Url);
        userRepository.Add(user);
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}