export const metadata = {
  title: "Janani Hospital",
  description: "Your Health, Our Priority. The most intuitive hospital management system for modern healthcare.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
