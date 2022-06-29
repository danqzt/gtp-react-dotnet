using System.Collections.Generic;
using System.Linq;
using Server.Models;

namespace Server.Interfaces
{
    public interface IEmployeeRepository
    {
        List<Employee> GetAll();
        Employee? GetById(int Id);
        List<Employee> Context { get; }
        void Save(List<Employee> data);
        Employee Add(Employee employee);
        Employee Update(Employee employee);
        void Delete(int id);
    }
}