using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GreenTeamBaseball1.Startup))]
namespace GreenTeamBaseball1
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
