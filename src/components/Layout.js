import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const NAV_ITEMS = {
  en: [
    { href: '/en', label: 'Home' },
    { href: '/en/farmers', label: 'Farmers' },
    { href: '/en/products-kits', label: 'Products & Kits' },
    { href: '/en/government-programme', label: 'Government' },
    { href: '/en/technology-ai', label: 'Technology & AI' },
    { href: 'https://farmsense.tech/whitepaper', label: 'White Paper', isExternal: true },
    { href: '/en/investors', label: 'Investors' },
    { href: '/en/contact', label: 'Contact' },
    { href: '/en/about', label: 'About' },
  ],
  fr: [
    { href: '/fr', label: 'Accueil' },
    { href: '/fr/eleveurs', label: 'Éleveurs' },
    { href: '/fr/produits-kits', label: 'Produits & Kits' },
    { href: '/fr/programmes-gouvernementaux', label: 'Programmes Gouvernementaux' },
    { href: '/fr/technologie-ia', label: 'Technologie & IA' },
    { href: 'https://farmsense.tech/whitepaper', label: 'Livre Blanc', isExternal: true },
    { href: '/fr/investisseurs', label: 'Investisseurs' },
    { href: '/fr/contact', label: 'Contact' },
    { href: '/fr/a-propos', label: 'À propos' },
  ],
};

export default function Layout({ children }) {
  const router = useRouter();
  // Default to 'en' if locale is not available yet
  const [locale, setLocale] = useState(router.locale || 'en');

  useEffect(() => {
    if (router.locale) {
      setLocale(router.locale);
    }
  }, [router.locale]);

  // Ensure we always have a valid nav array, defaulting to English
  const nav = NAV_ITEMS[locale] || NAV_ITEMS['en'];

  return (
    <>
      <Head>
        <title>FARMSENSE™ – AI Livestock Intelligence</title>
      </Head>
      <div className="site">
        <header className="site-header">
          <div className="logo-block">
            <Link href={locale === 'fr' ? '/fr' : '/en'} className="logo-link">
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
                <Link key={item.href} href={item.href} className="nav-link">
                  {item.label}
                </Link>
              )
            ))}
            <div className="language-switcher">
              <button 
                onClick={() => {
                  const newLocale = locale === 'en' ? 'fr' : 'en';
                  // Get the current path and replace the language prefix
                  let newPath = router.asPath;
                  if (newPath.startsWith('/en/') || newPath === '/en') {
                    newPath = newPath.replace(/^\/en/, '/fr');
                  } else if (newPath.startsWith('/fr/') || newPath === '/fr') {
                    newPath = newPath.replace(/^\/fr/, '/en');
                  } else {
                    // If no language prefix is present, add the new one
                    newPath = `/${newLocale}${newPath}`;
                  }
                  // Ensure we have a valid path
                  if (newPath === '/') {
                    newPath = `/${newLocale}`;
                  }
                  // Update the URL and refresh the page to ensure proper SSR
                  window.location.href = newPath;
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
            <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="footer-link">
              LinkedIn
            </a>
            <a href="https://www.youtube.com" target="_blank" rel="noreferrer" className="footer-link">
              YouTube
            </a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="footer-link">
              X/Twitter
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer-link">
              Facebook
            </a>
          </div>
        </footer>

        {/* WhatsApp floating button */}
        <a
          href="https://wa.me/10000000000"
          className="whatsapp-float"
          target="_blank"
          rel="noreferrer"
        >
          WA
        </a>
      </div>
    </>
  );
}