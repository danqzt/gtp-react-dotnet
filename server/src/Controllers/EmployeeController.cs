using System.Runtime.CompilerServices;
using System.Text.Json;
using FluentValidation;
using Microsoft.AspNetCore.Mvc;
using Server.Interfaces;
using Server.Models;
using Server.Services;

namespace Server.Controllers;

[ApiController]
[Route("[controller]")]
public class EmployeesController : ControllerBase
{

    private readonly IEmployeeService employeeService;
    private readonly ILogger<EmployeesController> logger;

    public EmployeesController(ILogger<EmployeesController> logger,
      IEmployeeService svc)
    {
        this.logger = logger;
        this.employeeService = svc;
    }

    [HttpGet("{id}")]
    public IActionResult GetById([FromRoute] int id)
    {
        try
        {
            var employee = employeeService.GetbyId(id);
            if (employee == null)
                return NotFound();

            return Ok(employee);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpGet()]
    public IActionResult Get()
    {
        try
        {
            var employees = employeeService.GetAll();
            if (employees == null)
                return NotFound();

            return Ok(employees);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost]
    public async Task<IActionResult> PostAsync([FromBody] Employee model, CancellationToken cancellationToken)
    {
        try
        {
            var employee = await employeeService.AddAsync(model, cancellationToken);
            return Ok(employee);
        }
        catch (ValidationException vex)
        {
            return BadRequest("Model is invalid:" + vex.Message);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPut]
    public async Task<IActionResult> PutAsync(Employee model, CancellationToken cancellationToken)
    {
        try
        {
            var employee = await employeeService.UpdateAsync(model, cancellationToken);
            return Ok(employee);
        }
        catch (ValidationException vex)
        {
            return BadRequest("Model is invalid:" + vex.Message);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete("{id}")]
    public IActionResult Delete([FromRoute] int id)
    {
        try
        {
            employeeService.Delete(id);
            return Ok();
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

}
