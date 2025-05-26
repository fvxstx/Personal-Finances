using Finances.Application.Common.Abstractions;
using Microsoft.Extensions.Configuration;

namespace Finances.Infrastructure.Data.Common;

internal class AppSettings : IAppSettings
{
    private readonly IConfiguration _configuration;

    public AppSettings(IConfiguration configuration)
    {
        _configuration = configuration;
    }

    public string SpecialToken => _configuration["SpecialToken"] ??
                                  throw new InvalidOperationException("SpecialToken is not configured");
}