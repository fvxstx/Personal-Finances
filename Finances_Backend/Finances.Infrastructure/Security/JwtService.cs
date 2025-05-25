using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using Finances.Application.Common.Abstractions;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using JwtRegisteredClaimNames = Microsoft.IdentityModel.JsonWebTokens.JwtRegisteredClaimNames;

namespace Finances.Infrastructure.Data.Common;

internal class JwtService : IJwtService
{
    private readonly IConfiguration _configuration;

    public JwtService(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string GenerateToken(Guid userId, string email)
    {
        // Pegando a sessão jwtSettings do meu appSettings
        var jwtSettings = _configuration.GetSection("JwtSettings");
        // Gerando uma chave encripitada a partir da minha variavel key dentro do meu objeto acima
        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(jwtSettings["key"]));
        var credentials = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
        
        // Adicionando informações do usuário dentro do meu jwt token
        var claims = new[]
        {
            new Claim(JwtRegisteredClaimNames.Sub, userId.ToString()),
            new Claim(JwtRegisteredClaimNames.Email, email),
            new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString())
        };
        
        // Criando o jwt token dizendo o tempo de expirar e suas configurações
        var token = new JwtSecurityToken(
            issuer: jwtSettings["Issuer"],
            audience: jwtSettings["Audience"],
            claims: claims,
            expires: DateTime.UtcNow.AddHours(24),
            signingCredentials: credentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }
}