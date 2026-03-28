export const metadata = {
  title: "Hospital Management",
  description: "Your Health, Our Priority. The most intuitive hospital management system for modern healthcare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
