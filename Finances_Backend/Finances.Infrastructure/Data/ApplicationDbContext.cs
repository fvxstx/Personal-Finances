﻿using Finances.Application.Common.Abstractions;
using Finances.Domain.CodesValidation;
using Finances.Domain.Users;
using Microsoft.EntityFrameworkCore;

namespace Finances.Infrastructure.Data;

public class ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : DbContext(options), IUnitOfWork
{
    public DbSet<User> Users => Set<User>();
    public DbSet<CodeValidation> CodesValidations => Set<CodeValidation>();
    
    public Task CommitAsync(CancellationToken cancellationToken) => base.SaveChangesAsync(cancellationToken);
}