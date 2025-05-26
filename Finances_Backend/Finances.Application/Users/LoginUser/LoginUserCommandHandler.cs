using Finances.Application.Common.Abstractions;
using Finances.Application.Users.GetUsers;
using MediatR;

namespace Finances.Application.Users.LoginUser;

internal class LoginUserCommandHandler(IUserRepository userRepository, IHashService hashService, IJwtService jwtService) : 
    IRequestHandler<LoginUserCommand, LoginUserResponse>
{
    public async Task<LoginUserResponse> Handle(LoginUserCommand request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByEmailAsync(request.Email);
        if (user == null)
        {
            throw new Exception("Email vinculado ao usuário não encontrado");
        }
        
        var isPasswordVerify = hashService.VerifyValue(request.Password, user.Password);
        if (!isPasswordVerify)
        {
            throw new Exception("Senha invalida");
        }

        var token = jwtService.GenerateToken(user.Id, user.Email);
        
        return new LoginUserResponse(user, token);
    }
}