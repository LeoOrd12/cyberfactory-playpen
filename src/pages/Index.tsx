import { Link } from "react-router-dom";
import { Shield, Network, Terminal, Server, Cloud, Eye, ChevronRight, Mail, Phone, MapPin, ArrowRight, CheckCircle2, Users, Award, Clock } from "lucide-react";
import heroImg from "@/assets/hero-infinity.jpg";
import svcCyber from "@/assets/svc-cybersecurity.jpg";
import svcPentest from "@/assets/svc-pentesting.jpg";
import svcNetwork from "@/assets/svc-networking.jpg";
import svcDatacenter from "@/assets/svc-datacenter.jpg";
import svcCloud from "@/assets/svc-cloud.jpg";

const services = [
  {
    title: "Cybersecurity",
    description: "Protegemos tu infraestructura con soluciones avanzadas de seguridad: firewalls de nueva generación, IDS/IPS, y estrategias de defensa en profundidad.",
    icon: Shield,
    image: svcCyber,
  },
  {
    title: "Pentesting & Auditoría",
    description: "Evaluamos tu postura de seguridad con pruebas de penetración profesionales, análisis de vulnerabilidades y reportes ejecutivos detallados.",
    icon: Terminal,
    image: svcPentest,
  },
  {
    title: "Networking",
    description: "Diseñamos e implementamos redes empresariales seguras, escalables y de alto rendimiento con los más altos estándares de la industria.",
    icon: Network,
    image: svcNetwork,
  },
  {
    title: "Datacenter & Infraestructura",
    description: "Construimos y gestionamos infraestructuras de datacenter robustas enfocadas en disponibilidad, seguridad y rendimiento óptimo.",
    icon: Server,
    image: svcDatacenter,
  },
  {
    title: "Cloud Security",
    description: "Aseguramos tus entornos cloud con controles inteligentes y escalables que garantizan disponibilidad, cumplimiento y confianza.",
    icon: Cloud,
    image: svcCloud,
  },
  {
    title: "SOC / NOC Monitoring",
    description: "Monitoreo proactivo 24/7 de tu infraestructura IT, detección de incidentes de seguridad y respuesta ante amenazas en tiempo real.",
    icon: Eye,
    image: svcCyber,
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
  "Ingenieros certificados con experiencia en entornos enterprise",
  "Metodologías probadas alineadas con estándares internacionales",
  "Enfoque personalizado para cada organización",
  "Soporte y monitoreo continuo post-implementación",
  "Confidencialidad y ética profesional garantizada",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background subtle-grid">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border glass">
        <div className="container mx-auto flex items-center justify-between py-4 px-4">
          <Link to="/" className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
              <Shield className="h-4 w-4 text-foreground" />
            </div>
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Infinity<span className="text-gradient-brand">Now</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-8 font-body text-sm text-muted-foreground">
            <a href="#services" className="hover:text-foreground transition-colors">Servicios</a>
            <a href="#about" className="hover:text-foreground transition-colors">Nosotros</a>
            <a href="#team" className="hover:text-foreground transition-colors">Equipo</a>
            <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
          </div>
          <a
            href="#contact"
            className="rounded-lg bg-gradient-brand px-5 py-2.5 font-display text-sm font-semibold text-foreground transition-all hover:opacity-90 box-glow"
          >
            Contáctanos
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex min-h-screen items-center overflow-hidden pt-16">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Centro de operaciones de ciberseguridad Infinity Now" className="h-full w-full object-cover opacity-40" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-2 mb-8 backdrop-blur-sm">
              <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              <span className="font-body text-sm text-muted-foreground">Ingeniería en Ciberseguridad & IT</span>
            </div>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground mb-6 leading-[1.1]">
              Protegemos tu negocio con{" "}
              <span className="text-gradient-brand">ingeniería de élite</span>
            </h1>
            <p className="font-body text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Somos especialistas en ciberseguridad, infraestructura de red y datacenter. 
              Soluciones confiables, diseñadas por ingenieros para empresas que no pueden 
              permitirse vulnerabilidades.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#services"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-brand px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:opacity-90 box-glow-strong"
              >
                Ver Servicios <ChevronRight className="h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-border bg-card/50 px-8 py-4 font-display text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card backdrop-blur-sm"
              >
                Solicitar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="border-y border-border bg-card/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <stat.icon className="h-5 w-5 text-primary mx-auto mb-3" />
                <div className="font-display text-3xl md:text-4xl font-bold text-foreground text-glow">
                  {stat.value}
                </div>
                <div className="font-body text-sm text-muted-foreground mt-1">
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
            <span className="inline-block font-body text-sm text-primary font-medium tracking-wider uppercase mb-4">Nuestros Servicios</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Soluciones integrales de{" "}
              <span className="text-gradient-brand">ciberseguridad</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-2xl mx-auto text-lg">
              Desde la evaluación de vulnerabilidades hasta la operación de infraestructura crítica, 
              cubrimos todo el espectro de seguridad IT.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:border-primary/30 hover:box-glow"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="h-10 w-10 rounded-lg bg-gradient-brand flex items-center justify-center">
                      <service.icon className="h-5 w-5 text-foreground" />
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
      <section id="about" className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <span className="inline-block font-body text-sm text-primary font-medium tracking-wider uppercase mb-4">¿Por qué elegirnos?</span>
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
                  className="inline-flex items-center gap-2 font-display text-sm font-semibold text-primary hover:text-foreground transition-colors"
                >
                  Agenda una consulta gratuita <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden border border-border">
                <img
                  src={svcDatacenter}
                  alt="Infraestructura de datacenter Infinity Now"
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 rounded-xl border border-border bg-card p-6 box-glow hidden md:block">
                <div className="font-display text-2xl font-bold text-foreground">5+</div>
                <div className="font-body text-sm text-muted-foreground">Años de experiencia</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <span className="inline-block font-body text-sm text-primary font-medium tracking-wider uppercase mb-4">Nuestro Equipo</span>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
              Los profesionales detrás de{" "}
              <span className="text-gradient-brand">Infinity Now</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-xl mx-auto text-lg">
              Un equipo multidisciplinario de ingenieros apasionados por la seguridad, 
              la tecnología y la innovación.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group rounded-xl border border-border bg-card overflow-hidden transition-all hover:border-primary/30"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105 grayscale group-hover:grayscale-0"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-display text-base font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="font-body text-sm text-primary mt-1">
                    {member.role}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="relative rounded-2xl border border-border bg-card overflow-hidden p-12 md:p-20 text-center">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
            <div className="relative z-10">
              <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-6">
                ¿Listo para fortalecer tu{" "}
                <span className="text-gradient-brand">seguridad?</span>
              </h2>
              <p className="font-body text-lg text-muted-foreground max-w-xl mx-auto mb-10">
                Agenda una consulta gratuita con nuestros ingenieros y descubre 
                cómo podemos proteger tu infraestructura.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-brand px-10 py-4 font-display text-base font-semibold text-foreground transition-all hover:opacity-90 box-glow-strong"
              >
                Hablar con un Especialista <ArrowRight className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 border-t border-border">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16">
            <div>
              <span className="inline-block font-body text-sm text-primary font-medium tracking-wider uppercase mb-4">Contacto</span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Hablemos de tu{" "}
                <span className="text-gradient-brand">proyecto</span>
              </h2>
              <p className="font-body text-muted-foreground leading-relaxed mb-10 text-lg">
                Ya sea que necesites una auditoría de seguridad, diseñar tu red empresarial 
                o montar tu datacenter, estamos listos para ayudarte.
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
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-body text-sm text-muted-foreground">Email</div>
                    <a href="mailto:contacto@infinitynow.co" className="font-display text-foreground font-medium hover:text-primary transition-colors">
                      contacto@infinitynow.co
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
                      La Calera, Cundinamarca — Colombia
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="rounded-xl border border-border bg-card p-8">
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
                    className="w-full rounded-lg bg-gradient-brand py-3.5 font-display text-sm font-semibold text-foreground transition-all hover:opacity-90 box-glow"
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
      <footer className="border-t border-border py-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="h-7 w-7 rounded-lg bg-gradient-brand flex items-center justify-center">
                <Shield className="h-3.5 w-3.5 text-foreground" />
              </div>
              <span className="font-display text-sm font-bold text-foreground">
                Infinity<span className="text-gradient-brand">Now</span>
              </span>
            </div>
            <p className="font-body text-sm text-muted-foreground">
              © 2026 Infinity Now — Engineering Cybersecurity Solutions
            </p>
            <div className="flex items-center gap-6 font-body text-sm text-muted-foreground">
              <Link to="/login" className="hover:text-foreground transition-colors">Admin</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
