import { useState } from "react";
import { Link } from "react-router-dom";
import { Shield, User, AlertTriangle, Lock } from "lucide-react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setTimeout(() => {
      setLoading(false);
      setError("Credenciales inválidas. Intente de nuevo.");
    }, 500);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-background subtle-grid px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="flex items-center justify-center gap-3 mb-10">
          <div className="h-8 w-8 rounded-lg bg-gradient-brand flex items-center justify-center">
            <Shield className="h-4 w-4 text-foreground" />
          </div>
          <span className="font-display text-lg font-bold tracking-tight text-foreground">
            Infinity<span className="text-gradient-brand">Now</span>
          </span>
        </Link>

        <div className="rounded-xl border border-border bg-card p-8">
          <h1 className="font-display text-xl font-bold text-center text-foreground mb-2">
            Panel de Acceso
          </h1>
          <p className="font-body text-sm text-muted-foreground text-center mb-8">
            Administración
          </p>

          {error && (
            <div className="flex items-center gap-2 rounded-lg border border-destructive/50 bg-destructive/10 p-3 mb-6">
              <AlertTriangle className="h-4 w-4 text-destructive shrink-0" />
              <span className="font-body text-sm text-destructive">{error}</span>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Usuario</label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="text"
                  name="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="admin"
                  required
                  autoComplete="username"
                />
              </div>
            </div>
            <div>
              <label className="font-body text-sm text-muted-foreground mb-2 block">Contraseña</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <input
                  type="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full rounded-lg border border-input bg-background py-3 pl-10 pr-4 font-body text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                  placeholder="••••••••"
                  required
                  autoComplete="current-password"
                />
              </div>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-gradient-brand py-3.5 font-display text-sm font-semibold text-foreground transition-all hover:opacity-90 box-glow disabled:opacity-50"
            >
              {loading ? "Verificando..." : "Iniciar Sesión"}
            </button>
          </form>
        </div>

        <p className="font-body text-sm text-muted-foreground text-center mt-6">
          <Link to="/" className="hover:text-primary transition-colors">
            ← Volver al inicio
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
