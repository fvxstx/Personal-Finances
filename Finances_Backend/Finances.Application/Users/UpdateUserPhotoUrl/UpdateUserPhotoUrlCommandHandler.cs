using Finances.Application.Common.Abstractions;
using MediatR;

namespace Finances.Application.Users.UpdateUserPhotoUrl;

internal class UpdateUserPhotoUrlCommandHandler(IUserRepository userRepository) : 
    IRequestHandler<UpdateUserPhotoUrlCommand, Guid>
{
    public async Task<Guid> Handle(UpdateUserPhotoUrlCommand request, CancellationToken cancellationToken)
    {
        var user = await userRepository.GetByIdAsync(request.UserId);
        if (user == null)
        {
            throw new Exception("Usuário não encontrado");
        }
        
        user.UpdatePhotoProfile(request.PhotoUrl);
        await userRepository.UnitOfWork.CommitAsync(cancellationToken);
        return user.Id;
    }
}