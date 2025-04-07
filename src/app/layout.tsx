import "@/app/globals.css";
import { Inter } from "next/font/google";
import ClientBody from "@/app/ClientBody";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Impact Village | Mobilizing People for Collective Impact",
  description: "We connect people for collective impact, facilitating sustainable transformation across organizations through intelligence, knowledge-sharing, and positive meaning.",
  metadataBase: new URL("https://www.impact-village.com"),
  keywords: [
    "Impact Village",
    "Collective Impact",
    "Sustainable Transformation",
    "Facilitation",
    "Knowledge Sharing",
    "Coaching",
    "Training",
    "Organizational Change",
    "Digital Skills", 
    
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientBody>{children}</ClientBody>
      </body>
    </html>
  );
}
