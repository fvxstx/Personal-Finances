using Finances.Application.Accounts.GetAllAccounts;
using MediatR;

namespace Finances.Application.Accounts.GetByIdAccount;

public record GetByIdAccountQuery(Guid AccountId) : IRequest<AccountResponse>;