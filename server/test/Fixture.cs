using System.Linq.Expressions;
using Moq;
using Server.Models;
using System.Collections.Generic;
using Server.Interfaces;
using Server.Services;
using Server.Repositories;
using System;
using System.Linq;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Mvc.ModelBinding.Validation;
using FluentValidation;
using Microsoft.Extensions.Configuration;
using System.IO;
using Newtonsoft.Json;

namespace Test;
public class TestFixture
{
    public IEmployeeRepository repository;


    public TestFixture()
    {
        var mockConfSection = new Mock<IConfigurationSection>();
         mockConfSection.SetupGet(m => m[It.Is<string>(s => s == "Data")]).Returns("Data/Employee.json");



        var config = new Mock<IConfiguration>();
        config.Setup(a => a.GetSection(It.Is<string>(s => s == "ConnectionStrings"))).Returns(mockConfSection.Object);

        repository = new EmployeeRepository(config.Object);
    }

    public Employee GetTestData(string filename)
    {
        var jsonString = File.ReadAllText(Path.Combine("Data", filename));
        return JsonConvert.DeserializeObject<Employee>(jsonString);
    }

    public EmployeeService EmployeeService => new (repository, 
                new Mock<IValidator<Employee>>().Object,
                new Mock<ILogger<EmployeeService>>().Object);
}