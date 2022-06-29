using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;
using Server.Interfaces;
using Server.Models;


namespace Server.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly string connString;
        private readonly static object lockObj = new();
        private List<Employee> employeeData;

        private List<Employee> RetrieveFromFile()
        {
            var jsonString = File.ReadAllText(connString);
            return JsonSerializer.Deserialize<List<Employee>>(jsonString)!;
        }
        public EmployeeRepository(IConfiguration config)
        {
            connString = config.GetConnectionString("Data");
            employeeData = RetrieveFromFile();
        }
        public List<Employee> GetAll()
        {
            return this.Context;
        }

        public Employee? GetById(int id)
        {
            return employeeData.FirstOrDefault(e => e.Id == id);
        }

        public List<Employee> Context => this.employeeData;

        public Employee Add(Employee employee)
        {
            employee.Id = 1;
            if (Context.Count > 0)
            {
                employee.Id = Context.Last().Id + 7;
            }
            employeeData.Add(employee);
            return employee;
        }

        public Employee Update(Employee employee)
        {
            var index = this.Context.FindIndex(e => e.Id == employee.Id);
            if (index == -1)
                throw new ArgumentException("null employee");
            this.Context[index] = employee;
            return employee;
        }

        public void Delete(int id)
        {
            var employee = this.GetById(id);
            if (employee == null)
                throw new ArgumentException("null employee");
            this.Context.Remove(employee!);
        }
        public void Save(List<Employee> data)
        {
            lock (lockObj)
            {
                var jsonString = JsonSerializer.Serialize(data);
                File.WriteAllText(connString, jsonString);
                employeeData = RetrieveFromFile();
            }
        }

    }
}