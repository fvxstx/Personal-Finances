using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using MediatR;

namespace Finances.Application.Users.UpdateUserPassword;

internal class UpdateUserPasswordCommandHandler(IUserRepository userRepository, IHashService hashService,
    ICodeValidationRepository codeValidationRepository) : IRequestHandler<UpdateUserPasswordCommand, Guid>
{
    public async Task<Guid> Handle(UpdateUserPasswordCommand request, CancellationToken cancellationToken)
    {
        /*Verify the token value if is ok and then register the user */
        var isCodeVerify = await
            codeValidationRepository.GetActiveByValueAsync(request.TokenValue, CodeValidationType.PasswordRecovery);
        if (isCodeVerify == null) throw new Exception("Codigo Invalido");
        if (DateTime.UtcNow > isCodeVerify.CreatedAt.AddHours(isCodeVerify.Expiration_Time)) 
            throw new Exception("Código Expirado");
        if (isCodeVerify.Is_Active == false) throw new Exception("Codigo inativo");    
        
        // After verify change the status to false
        isCodeVerify.UpdateIsActive(false);
        await codeValidationRepository.UnitOfWork.CommitAsync(cancellationToken);

        var user = await userRepository.GetByIdAsync((Guid)isCodeVerify.User_Id!);

        var hashedPassword = hashService.HashValue(request.NewPassword);
        user.UpdatePassword(hashedPassword);
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}