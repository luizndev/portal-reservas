import "./globals.css";
import CheckSessionClient from "../lib/CheckSessionClient"
import { Toaster } from "../../@/components/ui/sonner"

export const metadata = {
  title: "Portal de Reservas | Anhanguera Teixeira de Freitas",
  description: "Portal destinado a reservas de laboratórios e equipamentos",
  icons: {
    icon: "/favicon.png"
  }
};

export default function RootLayout({ children }) {



  return (
    <html lang="pt-br">
      <body
        className={`antialiased min-h-full`}
      >
        <CheckSessionClient />
        {children}
        <Toaster richColors position="top-right" />
      </body>
    </html>
  );
}
