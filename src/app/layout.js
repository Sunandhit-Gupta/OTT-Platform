import "./globals.css";

export const metadata = {
  title: "Netflix",
  description: "Watch Movies For Free",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        {children}
        </body>
    </html>
  );
}
