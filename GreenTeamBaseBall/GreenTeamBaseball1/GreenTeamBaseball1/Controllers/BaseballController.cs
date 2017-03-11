using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using GreenTeamBaseball1.Models;
using GreenTeamBaseball1.ViewModels;

namespace GreenTeamBaseball1.Controllers
{
    public class BaseballController : Controller
    {
        // GET: Baseball/Baseball2
        public ActionResult Baseball2()
        {
            var baseball = new Baseball() { Name = "GreenTeamBaseball1!" };
            var coach = new List<Coach>
            {
                new Coach { Name = "Coach 1"}
            };

            var viewModel = new BaseballViewModel
            {
                Baseball = baseball,
                Coach = coach
            };

            return View(viewModel);
        }
    }
}