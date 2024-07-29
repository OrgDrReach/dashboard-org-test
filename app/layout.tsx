import type { Metadata } from "next";
import { Ubuntu, } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { ThemeProvider } from "@/components/themes/theme-provider";

const fontSans = Ubuntu({
	subsets: ["latin"],
	weight: ["400", "500", "700"],
	variable: "--font-sans",
});

export const metadata: Metadata = {
	title: "Dr. Reach",
	description: "A healthcare management platform",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={cn(
					"min-h-screen bg-dark-300 font-sans antialiased",
					fontSans.variable
				)}
			>
				<ThemeProvider attribute='class' defaultTheme='dark'>
					{children}
				</ThemeProvider>
			</body>
		</html>
	);
}
