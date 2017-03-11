using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using GreenTeamBaseball1.Models;

namespace GreenTeamBaseball1.ViewModels
{
    public class BaseballViewModel
    {
        public Baseball Baseball { get; set; }
        public List<Coach> Coach { get; set; }
    }
}