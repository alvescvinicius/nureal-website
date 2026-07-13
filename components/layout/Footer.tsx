import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { navLinks } from "@/lib/site-config";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-dark-border bg-dark text-dark-foreground">
      <Container className="flex flex-col gap-8 py-14 md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col gap-3">
          <Logo inverted />
          <p className="max-w-xs text-sm text-dark-muted">
            Ferramentas de engenharia de software para times que levam dados a
            sério.
          </p>
        </div>

        <nav aria-label="Links do rodapé">
          <ul className="flex flex-col gap-3 md:flex-row md:gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-sm text-dark-muted transition-colors duration-150 hover:text-dark-foreground"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="border-t border-dark-border py-6">
        <p className="text-sm text-dark-muted">
          © {year} Nureal. Todos os direitos reservados.
        </p>
      </Container>
    </footer>
  );
}
