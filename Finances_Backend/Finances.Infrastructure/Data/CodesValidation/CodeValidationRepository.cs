using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data.CodesValidation;

public class CodeValidationRepository(ApplicationDbContext dbContext) : ICodeValidationRepository
{
    public void Add(CodeValidation code)
    {
        dbContext.Add(code);
    }

    public async Task<CodeValidation?> GetByIdAsync(Guid codeValidationId)
    {
        return await dbContext.CodesValidations.FirstOrDefaultAsync(x => x.Id == codeValidationId);
    }

    public async Task<CodeValidation?> GetActiveByValueAsync(string value, CodeValidationType type)
    {
        return await dbContext.CodesValidations.Where(x => x.Is_Active).FirstOrDefaultAsync(x => x.Value == value && x.Type == type);
    }

    public void Update(CodeValidation code)
    {
        dbContext.CodesValidations.Update(code);
    }

    public IUnitOfWork UnitOfWork => dbContext;
}