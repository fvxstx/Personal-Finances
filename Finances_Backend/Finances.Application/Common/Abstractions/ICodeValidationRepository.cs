using Finances.Domain.CodesValidation;

namespace Finances.Application.Common.Abstractions;

public interface ICodeValidationRepository
{
    void Add(CodeValidation code);
    Task<CodeValidation?> GetByIdAsync(Guid codeValidationId);
    Task<CodeValidation?> GetActiveByValueAsync(string value, CodeValidationType type);
    void Update(CodeValidation code);
    
    IUnitOfWork UnitOfWork { get; }
}