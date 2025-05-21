using Finances.Application.Common.Abstractions;
using Finances.Infrastructure.Data;
using Finances.Infrastructure.Data.Users;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Finances.Infrastructure;

public static class DependencyInjection
{
    public static IServiceCollection AddInfrasctructure(this IServiceCollection services, IConfiguration configs)
    {
        // Declaring the DB configurations
        services.AddDbContext<ApplicationDbContext>(o =>
        {
            var connectionString = configs.GetConnectionString("DefaultConnection");
            o.UseNpgsql(connectionString);
           
            o.EnableDetailedErrors();
            o.EnableSensitiveDataLogging();
        }, ServiceLifetime.Scoped);
        
        // Declaring the repositories
        services.AddScoped<IUnitOfWork, ApplicationDbContext>();
        services.AddScoped<IUserRepository, UserRepository>();
        return services;
    }
}