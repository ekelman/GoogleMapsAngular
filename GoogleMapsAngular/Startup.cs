using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(GoogleMapsAngular.Startup))]
namespace GoogleMapsAngular
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
