using System.Collections.Generic;
using System.Linq;
using Server.Models;

namespace Server.Interfaces
{
    public interface IUnitOfWork
    {
       void Commit<T>();
    }
}