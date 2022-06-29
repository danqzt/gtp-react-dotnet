using System;
using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using FluentValidation.TestHelper;
using Server.Models;
using Server.Validators;
using Xunit;


namespace Test;

[CollectionDefinition("Test Collection")]
public class TestCollection : ICollectionFixture<TestFixture> {}

[Collection("Test Collection")]
public class EmployeeServiceTest 
{
    private readonly TestFixture fixture;

    public EmployeeServiceTest(TestFixture fixture)
    {
        this.fixture = fixture;
    }

    [Fact]
    public async Task UpdateeEmployee()
    {   
        var emplService = fixture.EmployeeService;
        var empl = emplService.GetbyId(1);
        empl.Address = "Address changed";
        await emplService.UpdateAsync(empl, CancellationToken.None);
        
        var test = emplService.GetbyId(1);
        Assert.Equal("Address changed", test.Address);    
    }


    [Fact]
    public void Delete_Invalid_Id()
    {
       Assert.Throws<ArgumentException>(() => fixture.EmployeeService.Delete(123));
    }

    [Fact]
    public async Task Validator_Invalid_Start_End_Date()
    {
         var invalidData = fixture.GetTestData("InvalidStartEndDate.json");
         var validator = new EmployeeModelValidator();
         var result = await validator.TestValidateAsync(invalidData);
         result.ShouldHaveValidationErrorFor(request => request.EndDate);

    }
}