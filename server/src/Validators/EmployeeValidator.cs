using System.Data;
using System;
using FluentValidation;
using Server.Models;
using FluentValidation.AspNetCore;

namespace Server.Validators
{
    public class EmployeeModelValidator : AbstractValidator<Employee>
    {
        public EmployeeModelValidator()
        {
           RuleFor(e => e.FirstName).NotEmpty();
           RuleFor(e => e.LastName).NotEmpty();
           RuleFor(e => e.Email).NotEmpty().EmailAddress();
           RuleFor(e => e.Mobile).NotEmpty();
           RuleFor(e => e.Address).NotEmpty();
           RuleFor(e => e.ContractType).NotEmpty();
           RuleFor(e => e.EmployeementType).NotEmpty();
           RuleFor(e => e.StartDate).NotEmpty().GreaterThan(e => new DateTime(2009,1,1));
           RuleFor(e => e.EndDate).NotEmpty().GreaterThan(e => e.StartDate);
        }
    }
}