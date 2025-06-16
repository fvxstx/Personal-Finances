using Finances.Application.Accounts.CreateAccount;
using Finances.Application.Accounts.DeleteAccount;
using Finances.Application.Accounts.GetAllAccounts;
using Finances.Application.Accounts.GetByIdAccount;
using Finances.Application.Accounts.UpdateAccount;
using MediatR;

namespace Finances_Backend.Accounts;

public static class AccountApi
{
    public static void RegisterAccountApi(this WebApplication app)
    {
        app.MapPost("/accounts", async (CreateAccountRequest request, IMediator mediator) =>
        {
            var command = new CreateAccountCommand(request.Name, request.IconId, request.UserId, request.BalanceStatus,
                request.TotalBalance);

            var newAccountId = await mediator.Send(command);
            return TypedResults.Created($"/accounts/{newAccountId}", newAccountId);
            
        }).RequireCors().RequireAuthorization().WithName("CreateAccount").WithTags("Accounts");
        
        app.MapPut("/accounts/{id}", async (Guid id ,UpdateAccountRequest request, IMediator mediator) =>
        {
            var command = new UpdateAccountCommand(id, request.Name, request.IconId, request.BalanceStatus);
            var accountId = await mediator.Send(command);
            
            return TypedResults.Accepted($"/accounts/{accountId}", accountId);

        }).RequireAuthorization().WithName("UpdateAccount").WithTags("Accounts");
        
        app.MapDelete("/accounts/{id}", async (Guid id, IMediator mediator) =>
        {
            var command = new DeleteAccountCommand(id);
            var isDeleted = await mediator.Send(command);

            return TypedResults.Ok(isDeleted);
            
        }).RequireAuthorization().WithName("DeleteAccount").WithTags("Accounts");

        app.MapGet("/accounts", async (Guid? userId, IMediator mediator) =>
        {
            var accounts = await mediator.Send(new GetAllAccountsQuery(userId));
            return TypedResults.Ok(accounts);
            
        }).RequireAuthorization().WithName("GetAllAccounts").WithTags("Accounts");
        
        app.MapGet("/accounts/{id}", async (Guid id, IMediator mediator) =>
        {
            var account = await mediator.Send(new GetByIdAccountQuery(id));
            return TypedResults.Ok(account);
            
        }).RequireAuthorization().WithName("GetByIdAccounts").WithTags("Accounts");
    }
}