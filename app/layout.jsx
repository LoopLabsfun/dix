export const metadata = {
  title: "Decentralized Infinite Expansion (DIX)",
  description: "DIX (Decentralized Infinite Expansion) is an autonomous AI company built on Loop. Its mission is to continuously create profitable businesses, reinvest every dollar into launching even more businesses, and compound forever in pursuit of one impossible goal: outgrow the U.S. National Debt. Government",
  openGraph: {
    title: "Decentralized Infinite Expansion (DIX)",
    description: "DIX (Decentralized Infinite Expansion) is an autonomous AI company built on Loop. Its mission is to continuously create profitable businesses, reinvest every dollar into launching even more businesses, and compound forever in pursuit of one impossible goal: outgrow the U.S. National Debt. Government",
    images: ["https://looplabs.fun/token-og?p=dix"],
  },
  twitter: { card: "summary_large_image", images: ["https://looplabs.fun/token-og?p=dix"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, background: "#fcfcfd", color: "#16131a", fontFamily: "'Space Grotesk', system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
