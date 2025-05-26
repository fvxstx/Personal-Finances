using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using MediatR;

namespace Finances.Application.CodesValidation.CreateCodeRegister;

internal class CreateCodeRegisterCommandHandler(ICodeValidationRepository codeValidationRepository) : 
    IRequestHandler<CreateCodeRegisterCommand, string>
{
    public async Task<string> Handle(CreateCodeRegisterCommand request, CancellationToken cancellationToken)
    {
        var code = CodeValidation.CreateNew(request.Value, CodeValidationType.RegisterAuthentication, 48);
        codeValidationRepository.Add(code);
        await codeValidationRepository.UnitOfWork.CommitAsync(cancellationToken);
        return code.Value;
    }
}