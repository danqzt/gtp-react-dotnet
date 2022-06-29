using System.Runtime.Remoting;
using System.Security.Cryptography.X509Certificates;
using Microsoft.AspNetCore.Mvc.ApplicationModels;

namespace Server.Models
{
    public class Employee
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string? MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public int Mobile { get; set; }
        public string Address { get; set; }

        public string ContractType { get; set; }
        public DateTime StartDate { get; set; }

        public DateTime EndDate { get; set; }

        public bool OnGoing { get; set; }

        public string EmployeementType  { get; set; }

        public int HoursPerWeek { get; set; }

        public double ContractDuration => EndDate.Subtract(StartDate).TotalDays;

        public override bool Equals(object? obj)
        {
            return this.Id.Equals((obj as Employee)?.Id);
        }
    }
}