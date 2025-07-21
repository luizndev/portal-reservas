import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


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
        {children}
      </body>
    </html>
  );
}
