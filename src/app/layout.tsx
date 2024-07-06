import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import React from 'react'
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: any = {
  ogTitle: 'Vijoh Portfolio - Viktor Johansson | Experienced Web & App Developer',
  ogDescription: 'Welcome to Viktor Johansson`s Web Development Portfolio. As a seasoned developer with a passion for crafting exceptional digital experiences, I specialize in front-end and back-end development, responsive design, and creating innovative solutions tailored to your needs. Explore my portfolio to discover a diverse range of projects showcasing expertise in HTML5, CSS3, JavaScript, and more. Let`s collaborate to bring your web vision to life. Contact me for professional and creative web development services.',
  keywords: 'Web development services, system developer, Responsive web design, Mobile app development, E-commerce, webbutvecklare, utvecklare, programmerare, JavaScript development, Node.js development, Website maintenance, Web security, SEO, systemutvecklare, Viktor Johansson Web Developer, Viktor Johansson Portfolio, Viktor Johansson Web Design, Viktor Johansson programmerare, Viktor Johansson webbutvecklare, Viktor Johansson linkedin, Viktor Johansson Dev, Viktor Johansson, anställ, programmerare',
  ogType: 'website',
  ogImage: 'https://i.postimg.cc/qvTpkh9r/1.png',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
       <head>
        <title>{metadata.ogTitle}</title>
        <meta name="author" content="Viktor Johansson" />
        <meta name="date" content="2024-01-04" />
        <meta name="description" content={metadata.ogDescription} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="google-site-verification" content="TR0s54qrdcogQVIxo3iB9xzX8M5JFEKLH8geIaXANMY" />
        <meta property="og:title" content={metadata.ogTitle} />
        <meta property="og:type" content={metadata.ogType} />
        <meta property="og:description" content={metadata.ogDescription} />
        <meta property="twitter:title" content={metadata.ogTitle}></meta>
        <meta property="twitter:card" content={metadata.ogImage}></meta>
        <meta property="twitter:image" content={metadata.ogImage}></meta>
        <meta property="twitter:domain" content="vijoh.com"></meta>
        <meta property="twitter:description" content={metadata.ogDescription}></meta>
        <meta property="og:image" content={metadata.ogImage}/>
        <meta property="og:image:width" content="300" />
        <meta property="og:url" content="https://www.vijoh.com/"/>
      </head>
      <body className={inter.className}>{children}
      <SpeedInsights />
      <Analytics />
      </body>
    </html>
  )
}
