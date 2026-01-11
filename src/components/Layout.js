import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NAV_ITEMS = {
  en: [
    { href: '/', label: 'Home' },
    { href: '/farmers', label: 'Farmers' },
    { href: '/products-kits', label: 'Products & Kits' },
    { href: '/government-programme', label: 'Government' },
    { href: '/technology-ai', label: 'Technology & AI' },
    // { href: 'https://whitepaper.farmsense.global/', label: 'White Paper', isExternal: true },
    { href: '/investors', label: 'Investors' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'About' },
  ],
  fr: [
    { href: '/', label: 'Accueil' },
    { href: '/farmers', label: 'Éleveurs' },
    { href: '/products-kits', label: 'Produits & Kits' },
    { href: '/government-programme', label: 'Programmes Gouvernementaux' },
    { href: '/technology-ai', label: 'Technologie & IA' },
    // { href: 'https://whitepaper.farmsense.global/', label: 'Livre Blanc', isExternal: true },
    { href: '/investors', label: 'Investisseurs' },
    { href: '/contact', label: 'Contact' },
    { href: '/about', label: 'À propos' },
  ],
};

export default function Layout({ children }) {
  const router = useRouter();
  
  const locale = router.locale || 'en';

  // Ensure we always have a valid nav array, defaulting to English
  const nav = NAV_ITEMS[locale] || NAV_ITEMS.en;

  return (
    <>
      <Head>
        <title>FARMSENSE™ – AI Livestock Intelligence</title>
      </Head>
      <div className="site">
        <header className="site-header">
          <div className="logo-block">
            <Link href="/" locale = {locale} className="logo-link">
              <img src="/images/farmsense-logo.png" alt="FARMSENSE logo" className="logo-img" />
              <div className="logo-text">
                <span className="logo-title">FARMSENSE™</span>
                <span className="logo-tagline">
                  {locale === 'fr'
                    ? 'L’intelligence pour chaque ferme. Partout.'
                    : 'Intelligence for every farm. Everywhere.'}
                </span>
              </div>
            </Link>
          </div>
          <nav className="main-nav">
            {nav.map((item) => (
              item.isExternal ? (
                <a 
                  key={item.href} 
                  href={item.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="nav-link"
                >
                  {item.label}
                </a>
              ) : (
                <Link key={item.href}locale={locale} href={item.href} className="nav-link">
                  {item.label} 
                </Link>
              )
            ))}
            <div className="language-switcher">
              <button 
                onClick={() => {
                  const newLocale = locale === 'en' ? 'fr' : 'en';
                  router.push(router.asPath, router.asPath, {locale: newLocale });
              
                }}
                className="language-button"
                aria-label={locale === 'en' ? 'Switch to French' : 'Passer en anglais'}
              >
                {locale === 'en' ? 'FR' : 'EN'}
              </button>
            </div>
          </nav>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="footer-left">
            <p> {new Date().getFullYear()} FARMSENSE™ — A registered trademark of Wouessi Inc.</p>
            <p>
              {locale === 'fr'
                ? 'FARMSENSE™ est une marque déposée de Wouessi Inc. Tous droits réservés.'
                : 'All rights reserved. FARMSENSE™ is a registered trademark of Wouessi Inc.'}
            </p>
          </div>
          <div className="footer-right">
            <span>{locale === 'fr' ? 'Suivez-nous :' : 'Follow us:'}</span>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              YouTube
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              X/Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-link">
              Facebook
            </a>
          </div>
        </footer>

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/10000000000"
          className="whatsapp-float"
          target="_blank"
          rel="noopener noreferrer"
        >
          WA
        </a>
      </div>
    </>
  );
}