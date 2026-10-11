import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Sanjeev Chopra & Associates | Strategic Legal Counsel', description: 'Business oriented lawyers. Sanjeev Chopra & Associates offers legal services across India in banking, finance, corporate, property and more.', metadataBase: new URL('https://www.advocatesanjeevchopra.com/') };
export default function Layout({ children }: { children: React.ReactNode }) { return <html lang="en"><body>{children}</body></html>; }
