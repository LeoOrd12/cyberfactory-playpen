import { Link } from "react-router-dom";
import { Shield, Network, Terminal, Lock, ChevronRight, Mail, Phone, MapPin } from "lucide-react";
import heroCyber from "@/assets/hero-cyber.jpg";
import serviceShield from "@/assets/service-shield.jpg";
import serviceNetwork from "@/assets/service-network.jpg";
import servicePentest from "@/assets/service-pentest.jpg";

const services = [
  {
    title: "Protección Perimetral",
    description: "Implementamos firewalls de última generación, IDS/IPS y soluciones de seguridad perimetral para proteger tu infraestructura.",
    icon: Shield,
    image: serviceShield,
  },
  {
    title: "Monitoreo de Red",
    description: "Vigilancia 24/7 de tu red con detección de anomalías, análisis de tráfico y respuesta ante incidentes en tiempo real.",
    icon: Network,
    image: serviceNetwork,
  },
  {
    title: "Pentesting & Auditoría",
    description: "Evaluamos la seguridad de tus sistemas mediante pruebas de penetración profesionales y auditorías de vulnerabilidades.",
    icon: Terminal,
    image: servicePentest,
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background cyber-grid">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-2">
            <Lock className="h-6 w-6 text-primary" />
            <span className="font-display text-lg font-bold tracking-wider text-foreground">
              CYBER<span className="text-primary">FACTORY</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
            <a href="#servicios" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#nosotros" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#contacto" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <Link
            to="/login"
            className="rounded-md border border-primary bg-primary/10 px-4 py-2 font-display text-xs font-semibold tracking-wider text-primary transition-all hover:bg-primary hover:text-primary-foreground box-glow"
          >
            ACCEDER
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroCyber} alt="Centro de operaciones de ciberseguridad" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-background/30" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1 mb-6">
            <span className="font-body text-xs text-primary tracking-wide">🔒 Seguridad para PYMEs</span>
          </div>
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground mb-6 text-glow">
            CYBER<span className="text-primary">FACTORY</span><span className="text-primary">.loc</span>
          </h1>
          <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed">
            Protegemos tu negocio con soluciones de ciberseguridad a medida. 
            Infraestructura segura, monitoreo continuo y respuesta ante amenazas.
          </p>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-6 py-3 font-display text-sm font-semibold tracking-wider text-primary-foreground transition-all hover:bg-primary/90 box-glow-strong"
          >
            NUESTROS SERVICIOS <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      {/* Servicios */}
      <section id="servicios" className="py-24">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center text-foreground mb-4 text-glow">
            SERVICIOS
          </h2>
          <p className="font-body text-muted-foreground text-center max-w-xl mx-auto mb-16">
            Soluciones integrales de ciberseguridad diseñadas para pequeñas y medianas empresas.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:border-primary/50 hover:box-glow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <service.icon className="h-5 w-5 text-primary" />
                    <h3 className="font-display text-sm font-semibold tracking-wider text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosotros */}
      <section id="nosotros" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 max-w-3xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4 text-glow">
            NOSOTROS
          </h2>
          <p className="font-body text-muted-foreground leading-relaxed mb-8">
            CyberFactory es una empresa emergente especializada en ciberseguridad para PYMEs. 
            Nuestro equipo de expertos en seguridad informática, redes y desarrollo seguro 
            trabaja para proteger los activos digitales de tu empresa con tecnología de vanguardia 
            y un enfoque personalizado.
          </p>
          <div className="grid grid-cols-3 gap-8">
            {[
              { value: "500+", label: "Auditorías" },
              { value: "99.9%", label: "Uptime" },
              { value: "24/7", label: "Monitoreo" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-display text-2xl md:text-3xl font-bold text-primary text-glow">
                  {stat.value}
                </div>
                <div className="font-body text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contacto */}
      <section id="contacto" className="py-24 border-t border-border">
        <div className="container mx-auto px-4 max-w-xl text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-8 text-glow">
            CONTACTO
          </h2>
          <div className="space-y-4 font-body text-muted-foreground">
            <div className="flex items-center justify-center gap-3">
              <Mail className="h-4 w-4 text-primary" />
              <span>contacto@cyberfactory.loc</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <Phone className="h-4 w-4 text-primary" />
              <span>+52 (55) 1234-5678</span>
            </div>
            <div className="flex items-center justify-center gap-3">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Ciudad de México, México</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 CyberFactory.loc — Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
