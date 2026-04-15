import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'KTU Discrete Math Solutions 2024',
  description: 'Comprehensive step-by-step solutions for the KTU Discrete Mathematics Syllabus 2024. Master the concepts with detailed explanations and diagrams.',
  openGraph: {
    title: 'KTU Discrete Math Solutions 2024',
    description: 'Comprehensive step-by-step solutions for the KTU Discrete Mathematics Syllabus 2024. Master the concepts with detailed explanations and diagrams.',
    type: 'website',
    siteName: 'KTU Discrete Math Solutions',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
