using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Users.RedefineUserPassword;

internal class RedefineUserPasswordCommandHandler(IUserRepository userRepository, IHashService hashService) :
    IRequestHandler<RedefineUserPasswordCommand, Guid>
{
    public async Task<Guid> Handle(RedefineUserPasswordCommand request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByIdAsync(request.UserId);
        if (user == null)
        {
            throw new Exception("Usuário não encontrado");
        }

        var isPasswordVerify = hashService.VerifyValue(request.LastPassword, user.Password);
        if (!isPasswordVerify)
        {
            throw new Exception("Senha antiga invalida");
        }

        var newHashPassword = hashService.HashValue(request.NewPassword);
        user.UpdatePassword(newHashPassword);
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}