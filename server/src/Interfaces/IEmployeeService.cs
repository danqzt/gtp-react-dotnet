using System.Collections.Generic;
using System.Linq;
using Server.Models;

namespace Server.Interfaces
{
    public interface IEmployeeService
    {
        Employee? GetbyId(int id);
        List<Employee> GetAll();

        Task<Employee> UpdateAsync(Employee employee, CancellationToken cancellationToken);
        Task<Employee> AddAsync(Employee employee, CancellationToken cancellationToken);

        void Delete(int id);

    }
}