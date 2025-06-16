using Finances.Application.CodesValidation.CreateCodePassword;
using Finances.Application.CodesValidation.CreateCodeRegister;
using MediatR;

namespace Finances_Backend.CodesValidation;

public static class CodeValidationApi
{
    public static void RegisterCodeValidationApi(this WebApplication app)
    {
        app.MapPost("/codes-validation/code-register", async (string valueCode, IMediator mediator) =>
        {
            var command = new CreateCodeRegisterCommand(valueCode);
            var token = await mediator.Send(command);
            return TypedResults.Created($"/codes-validation", token);

        }).WithName("CreateCodeRegister").WithTags("CodeValidation");
        
        app.MapPost("/codes-validation/code-password", async (string email, IMediator mediator) =>
        {
            var command = new CreateCodePasswordCommand(email);
            var token = await mediator.Send(command);
            return TypedResults.Created($"/codes-validation", token);
        }).WithName("CreateCodePassword").WithTags("CodeValidation");
    } 
}