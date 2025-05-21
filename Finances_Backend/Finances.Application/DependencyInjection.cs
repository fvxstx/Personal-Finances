﻿using Microsoft.Extensions.DependencyInjection;

namespace Finances.Application;

public static class DependencyInjection
{
    public static IServiceCollection AddApplication(this IServiceCollection services)
    {
        services.AddMediatR(c =>
            c.RegisterServicesFromAssembly(typeof(DependencyInjection).Assembly));
        return services;
    }
}