using System.Data.Common;
using Server.Interfaces;
using Server.Models;
using Server.Repositories;
using System.Text.Json;
using System.Text.Json.Serialization;
using FluentValidation;

namespace Server.Services;

public class EmployeeService : IEmployeeService, IUnitOfWork
{
    private readonly ILogger logger;
    private readonly IEmployeeRepository employeeRepo;
    private readonly IValidator<Employee> validator;

    public EmployeeService(IEmployeeRepository employeeRepo,
        IValidator<Employee> validator,
        ILogger<EmployeeService> logger)
    {
        this.employeeRepo = employeeRepo;
        this.logger = logger;
        this.validator = validator;
    }

    public Employee? GetbyId(int id)
    {
        try
        {
            return employeeRepo.GetById(id);
        }
        catch (Exception ex)
        {
            logger.LogError("EmployeeServiice.GetById Error", id, ex);
            throw;
        }
    }
    public List<Employee> GetAll()
    {
        try
        {
            return this.employeeRepo.GetAll();
        }
        catch (Exception ex)
        {
            logger.LogError("EmployeeService.GetAll Error", ex);
            throw;
        }
    }

    public void Commit<Employee>()
    {
        try
        {
            this.employeeRepo.Save(this.employeeRepo.Context);

        }
        catch (Exception ex)
        {
            logger.LogError("EmployeeService.Save Error", ex);
            throw;
        }
    }

    public async Task<Employee> AddAsync(Employee employee, CancellationToken cancellationToken)
    {
        try
        {
            await validator.ValidateAndThrowAsync(employee, cancellationToken);
            return employeeRepo.Add(employee);
        }
        catch(ValidationException vex)
        {
            var payload = JsonSerializer.Serialize(employee);
            logger.LogError("EmployeeService.Update Validation Error", payload, vex);
            throw;
        }
        catch (Exception ex)
        {
            var payload = JsonSerializer.Serialize(employee);
            logger.LogError("EmployeeService.Add Error", payload, ex);
            throw;
        }
    }
    public async Task<Employee> UpdateAsync(Employee employee, CancellationToken cancellationToken)
    {
        try
        {
            await validator.ValidateAndThrowAsync(employee, cancellationToken);
            return employeeRepo.Update(employee);
        }
        catch(ValidationException vex)
        {
            var payload = JsonSerializer.Serialize(employee);
            logger.LogError("EmployeeService.Update Validation Error", payload, vex);
            throw;
        }
        catch (Exception ex)
        {
            var payload = JsonSerializer.Serialize(employee);
            logger.LogError("EmployeeService.Update Error", payload, ex);
            throw;
        }
    }

    public void Delete(int id)
    {
        try
        {
           this.employeeRepo.Delete(id);

        }
        catch (Exception ex)
        {
            logger.LogError("EmployeeService.Delete Error", ex);
            throw;
        }
    }
}
