import './globals.css';

export const metadata = {
  title: 'Bingo Game',
  description: 'CSUF Diversity and Leadership Summit',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
