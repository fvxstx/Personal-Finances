using MediatR;

namespace Finances.Application.Users.RedefineUserPassword;

public  record RedefineUserPasswordCommand(Guid UserId, string LastPassword, string NewPassword) : IRequest<Guid>;