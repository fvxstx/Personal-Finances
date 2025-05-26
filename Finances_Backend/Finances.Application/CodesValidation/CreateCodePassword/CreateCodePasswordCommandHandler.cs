using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using MediatR;

namespace Finances.Application.CodesValidation.CreateCodePassword;

internal class CreateCodePasswordCommandHandler(ICodeValidationRepository codeValidationRepository, 
    IUserRepository userRepository) : 
    IRequestHandler<CreateCodePasswordCommand, string>
{
    public async Task<string> Handle(CreateCodePasswordCommand request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByEmailAsync(request.Email);
        if(user == null) throw new Exception("Usuário não encontrado");

        var random = new Random();
        var randomToken = random.Next(100000, 999999).ToString();
        
        var code = CodeValidation.CreateNew(randomToken, CodeValidationType.PasswordRecovery, 2, user.Id);
        codeValidationRepository.Add(code);
        await codeValidationRepository.UnitOfWork.CommitAsync(cancellationToken);
        return randomToken;
    }
}