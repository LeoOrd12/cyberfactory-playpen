import { Link } from "react-router-dom";
import { Shield, Network, Terminal, Server, Eye, ChevronRight, Phone, MapPin, ArrowRight, CheckCircle2, Users, Award, Clock, ShoppingCart, HeadphonesIcon } from "lucide-react";
import heroImg from "@/assets/hero-infinity.jpg";
import svcNocSoc from "@/assets/svc-noc-soc.jpg";
import svcPentest from "@/assets/svc-pentesting.jpg";
import svcNetwork from "@/assets/svc-networking.jpg";
import svcConsulting from "@/assets/svc-consulting.jpg";
import svcEquipment from "@/assets/svc-equipment.jpg";
import svcCyber from "@/assets/svc-cybersecurity.jpg";

const services = [
  {
    title: "Cybersecurity",
    description: "Protección integral de infraestructura con firewalls de nueva generación, IDS/IPS, y estrategias de defensa en profundidad adaptadas a tu empresa.",
    icon: Shield,
    image: svcCyber,
  },
  {
    title: "NOC / SOC",
    description: "Monitoreo proactivo 24/7, detección de incidentes de seguridad, respuesta ante amenazas y gestión de operaciones de red en tiempo real.",
    icon: Eye,
    image: svcNocSoc,
  },
  {
    title: "Networking",
    description: "Diseño e implementación de redes empresariales seguras, escalables y de alto rendimiento con estándares internacionales.",
    icon: Network,
    image: svcNetwork,
  },
  {
    title: "Pentesting & Auditoría",
    description: "Pruebas de penetración profesionales, análisis de vulnerabilidades y reportes ejecutivos para evaluar tu postura de seguridad.",
    icon: Terminal,
    image: svcPentest,
  },
  {
    title: "Consultoría IT",
    description: "Asesoría estratégica en tecnología, cumplimiento normativo, arquitectura de soluciones y transformación digital para PYMEs y corporaciones.",
    icon: HeadphonesIcon,
    image: svcConsulting,
  },
  {
    title: "Venta de Equipos IT",
    description: "Suministro de equipos empresariales: servidores, switches, routers, firewalls y soluciones de infraestructura de marcas líderes.",
    icon: ShoppingCart,
    image: svcEquipment,
  },
];

const stats = [
  { value: "200+", label: "Proyectos Completados", icon: Award },
  { value: "99.9%", label: "Uptime Garantizado", icon: Clock },
  { value: "50+", label: "Clientes Activos", icon: Users },
  { value: "24/7", label: "Monitoreo Continuo", icon: Eye },
];

const team = [
  { name: "Leonardo Ordoñez", role: "CEO", image: "https://infinitynow.co/images/team/Leo.jpeg" },
  { name: "Miguel Fernando Ruiz", role: "CISO", image: "https://infinitynow.co/images/team/miguel.jpeg" },
  { name: "Alejandro Mahecha", role: "Chief Infrastructure Officer", image: "https://infinitynow.co/images/team/alejo.jpeg" },
  { name: "Diego Barahona", role: "Business Director", image: "https://infinitynow.co/images/team/diego1.jpeg" },
];

const whyUs = [
  "Ingenieros certificados con experiencia enterprise",
  "Metodologías alineadas con estándares internacionales",
  "Enfoque personalizado para cada organización",
  "Soporte y monitoreo continuo post-implementación",
  "Confidencialidad y ética profesional garantizada",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border glass">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-lg bg-gradient-brand flex items-center justify-center">
              <Shield className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Infinity<span className="text-gradient-brand">Now</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
            <a href="#services" className="hover:text-primary transition-colors">Servicios</a>
            <a href="#about" className="hover:text-primary transition-colors">Nosotros</a>
            <a href="#team" className="hover:text-primary transition-colors">Equipo</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contacto</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-brand px-5 py-2.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
          >
            Contáctanos
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Centro de operaciones Infinity Now" className="h-full w-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/30" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/80 px-4 py-2 mb-8 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm text-muted-foreground">Ingeniería en Ciberseguridad & IT</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Protegemos tu negocio con{" "}
              <span className="text-gradient-brand">ingeniería de élite</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Somos especialistas en ciberseguridad, infraestructura de red y operaciones IT.
              Soluciones confiables diseñadas por ingenieros para empresas que exigen excelencia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-8 py-4 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90 box-glow"
              >
                Ver Servicios <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-primary/30 bg-background/80 px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:border-primary hover:bg-background backdrop-blur-sm"
              >
                Solicitar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-dark-section border-y border-foreground/10">
        <div className="container mx-auto px-4 py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-primary-foreground">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-primary-foreground/60 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm text-primary font-semibold tracking-wider uppercase mb-4">Nuestros Servicios</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Soluciones integrales de{" "}
              <span className="text-gradient-brand">ciberseguridad & IT</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Desde la evaluación de vulnerabilidades hasta la operación de infraestructura crítica,
              cubrimos todo el espectro de seguridad y tecnología.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/30"
              >
                <div className="h-48 overflow-hidden relative">
                  <img
                    src={service.image}
                    alt={service.title}
                    loading="lazy"
                    width={800}
                    height={600}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-sm text-primary font-semibold tracking-wider uppercase mb-4">¿Por qué elegirnos?</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                No somos freelancers.{" "}
                <span className="text-gradient-brand">Somos ingenieros.</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-8 text-lg">
                En Infinity Now combinamos experiencia técnica de primer nivel con un enfoque
                empresarial. Nuestro equipo está formado por ingenieros certificados con trayectoria
                en entornos corporativos de alta exigencia.
              </p>
              <ul className="space-y-4">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                    <span className="font-body text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:underline transition-colors"
                >
                  Agenda una consulta gratuita <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border shadow-lg">
                <img
                  src={svcNetwork}
                  alt="Infraestructura Infinity Now"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-background p-6 shadow-lg hidden md:block">
                <div className="font-display text-2xl font-bold text-primary">5+</div>
                <div className="font-body text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm text-primary font-semibold tracking-wider uppercase mb-4">Nuestro Equipo</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Los profesionales detrás de{" "}
              <span className="text-gradient-brand">Infinity Now</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              Un equipo multidisciplinario de ingenieros apasionados por la seguridad y la tecnología.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-primary/30"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-primary mt-1">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-dark-section">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-6">
            ¿Listo para fortalecer tu{" "}
            <span className="text-primary">seguridad?</span>
          </h2>
          <p className="font-body text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10">
            Agenda una consulta gratuita con nuestros ingenieros y descubre
            cómo podemos proteger tu infraestructura.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-10 py-4 font-display text-base font-semibold text-primary-foreground transition-all hover:opacity-90 box-glow-strong"
          >
            Hablar con un Especialista <ArrowRight className="h-5 w-5" />
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="inline-block font-body text-sm text-primary font-semibold tracking-wider uppercase mb-4">Contacto</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hablemos de tu{" "}
                <span className="text-gradient-brand">proyecto</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-10 text-lg">
                Ya sea que necesites una auditoría, diseñar tu red empresarial
                o equipos de IT, estamos listos para ayudarte.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-sm text-muted-foreground">Teléfono</div>
                    <a href="tel:+573002631015" className="font-display text-foreground font-medium hover:text-primary transition-colors">
                      +57 300-2631015
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-sm text-muted-foreground">Ubicación</div>
                    <span className="font-display text-foreground font-medium">
                      Bogotá, Colombia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-border bg-card p-8 shadow-sm">
                <h3 className="font-display text-xl font-semibold text-foreground mb-6">Envíanos un mensaje</h3>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Nombre</label>
                    <input
                      type="text"
                      className="w-full rounded-lg border border-input bg-background py-3 px-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="Tu nombre"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Email</label>
                    <input
                      type="email"
                      className="w-full rounded-lg border border-input bg-background py-3 px-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label className="font-body text-sm text-muted-foreground mb-2 block">Mensaje</label>
                    <textarea
                      rows={4}
                      className="w-full rounded-lg border border-input bg-background py-3 px-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                      placeholder="Cuéntanos sobre tu proyecto..."
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-gradient-brand py-3.5 font-display text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
                  >
                    Enviar Mensaje
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-10 bg-card">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Shield className="h-3.5 w-3.5 text-primary-foreground" />
              </div>
              <span className="font-display text-sm font-bold text-foreground">
                Infinity<span className="text-gradient-brand">Now</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              © 2026 Infinity Now — Engineering Cybersecurity Solutions
            </p>
            <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
              <Link to="/login" className="hover:text-primary transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
