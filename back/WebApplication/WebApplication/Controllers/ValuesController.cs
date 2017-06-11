using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using WebApplication.Models;
using WebApplication.Request;
using System;
using System.Linq;

namespace WebApplication.Controllers
{
    [Route("api/[controller]")]
    public class ValuesController : Controller
    {
        public static List<ValueObject> Values { get; } = new List<ValueObject>
        {
            new ValueObject { Name = "alpha", Value = 1 },
            new ValueObject { Name = "omega", Value = 3 }
        };
        public static List<ValuesEvent> Events { get; } = new List<ValuesEvent>();

        // GET api/values
        [HttpGet]
        public List<ValueObject> Get()
        {
            return Values;
        }

        // GET api/values/alpha
        [HttpGet("{valueName}")]
        public ValueObject Get(string valueName)
        {
            return Values.FirstOrDefault(v => v.Name == valueName);
        }

        // GET api/events
        [HttpGet]
        [Route("/api/events")]
        public List<ValuesEvent> GetEvents()
        {
            return Events;
        }

        // POST api/values/increment
        [HttpPost]
        [Route("increment")]
        public void Increment([FromBody]IncrementRequest request)
        {
            var valueObject = Values.FirstOrDefault(v => v.Name == request.ValueName);
            if (valueObject != null)
            {
                valueObject.Value++;
                Events.Add(new ValuesEvent
                {
                    Action = nameof(IncrementRequest),
                    Date = DateTime.Now,
                    ValueName = request.ValueName
                });
            }
        }

        // POST api/values/decrement
        [HttpPost]
        [Route("decrement")]
        public void Decrement([FromBody]DecrementRequest request)
        {
            var valueObject = Values.FirstOrDefault(v => v.Name == request.ValueName);
            if (valueObject != null)
            {
                valueObject.Value--;
                Events.Add(new ValuesEvent
                {
                    Action = nameof(DecrementRequest),
                    Date = DateTime.Now,
                    ValueName = request.ValueName
                });
            }
        }
    }
}
