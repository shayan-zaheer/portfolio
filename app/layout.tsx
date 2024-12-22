import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const epilogue = localFont({
    src: [
        {
            path: "./fonts/Epilogue-Black.ttf",
            weight: "900",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-ExtraBold.ttf",
            weight: "800",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-Bold.ttf",
            weight: "700",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-SemiBold.ttf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-Medium.ttf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-Regular.ttf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-Thin.ttf",
            weight: "200",
            style: "normal",
        },
        {
            path: "./fonts/Epilogue-ExtraLight.ttf",
            weight: "100",
            style: "normal",
        },
    ],
    variable: "--font-epilogue",
});

export const metadata: Metadata = {
    title: "IdeaFlux",
    description: "A dream come true.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={epilogue.variable}
            >
                {children}
            </body>
        </html>
    );
}
