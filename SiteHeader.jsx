// FPI Security — Site Header (responsive)
const SiteHeader = ({ activePage, onNavigate, direction = 'command' }) => {
  const [scrolled, setScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const { isMobile } = useResponsive();

  React.useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  // Close mobile menu on page change
  React.useEffect(() => { setMobileOpen(false); }, [activePage]);

  const isLight = direction === 'clarity';
  const headerBg = isLight ? 'rgba(255,255,255,0.97)' : 'rgba(13,42,63,0.97)';
  const textColor = isLight ? '#1A1E26' : '#fff';
  const navColor = isLight ? '#4E5A6E' : 'rgba(255,255,255,0.7)';
  const borderColor = isLight ? 'rgba(0,0,0,0.08)' : 'rgba(255,255,255,0.08)';

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'industries', label: 'Industries' },
    { id: 'locations', label: 'Locations' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ];

  const go = id => { onNavigate(id); setMobileOpen(false); };

  return (
    <header style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: headerBg,
      borderBottom: `1px solid ${borderColor}`,
      backdropFilter: 'blur(12px)',
      transition: 'background 0.2s',
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: 1280, margin: '0 auto',
        padding: isMobile ? '0 20px' : '0 32px',
        height: 68, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16,
      }}>
        {/* Logo */}
        <button onClick={() => go('home')} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 0, display: 'flex', alignItems: 'center', flexShrink: 0 }}>
          <img src="assets/logo-transparent.png" alt="FPI Security Services" style={{
            height: 36, objectFit: 'contain',
            filter: isLight ? 'none' : 'brightness(0) invert(1)',
          }} />
        </button>

        {/* Desktop nav */}
        {!isMobile && (
          <nav style={{ display: 'flex', alignItems: 'center', gap: 2 }}>
            {navItems.map(item => (
              <button key={item.id} onClick={() => go(item.id)} style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 500,
                color: activePage === item.id ? '#006090' : navColor,
                padding: '6px 12px', borderRadius: 4,
                transition: 'color 0.15s', letterSpacing: '0.01em',
              }}
              onMouseEnter={e => { if (activePage !== item.id) e.currentTarget.style.color = textColor; }}
              onMouseLeave={e => { if (activePage !== item.id) e.currentTarget.style.color = navColor; }}
              >{item.label}</button>
            ))}
          </nav>
        )}

        {/* Desktop right */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
            <a href="tel:8003744316" style={{
              display: 'flex', alignItems: 'center', gap: 7, textDecoration: 'none',
              fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 600,
              color: isLight ? '#006090' : 'rgba(255,255,255,0.9)',
            }}>
              <i data-lucide="phone" style={{ width: 15, height: 15 }}></i>
              (800) 374-4316
            </a>
            <button onClick={() => go('contact')} style={{
              background: '#006090', color: '#fff',
              fontFamily: "'Barlow', sans-serif", fontSize: 13, fontWeight: 600,
              padding: '8px 18px', borderRadius: 4, border: 'none', cursor: 'pointer',
              letterSpacing: '0.04em', whiteSpace: 'nowrap',
              boxShadow: '0 2px 10px rgba(0,96,144,0.3)', transition: 'background 0.15s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
            onMouseLeave={e => e.currentTarget.style.background = '#006090'}
            >Get a Quote</button>
          </div>
        )}

        {/* Mobile: phone + hamburger */}
        {isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <a href="tel:8003744316" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              width: 36, height: 36, borderRadius: 8,
              background: isLight ? '#E8EDF4' : 'rgba(255,255,255,0.1)',
              color: '#006090', textDecoration: 'none',
            }}>
              <i data-lucide="phone" style={{ width: 16, height: 16 }}></i>
            </a>
            <button onClick={() => setMobileOpen(o => !o)} style={{
              background: 'none', border: 'none', cursor: 'pointer', padding: 4,
              color: textColor, display: 'flex', alignItems: 'center',
            }}>
              <i data-lucide={mobileOpen ? 'x' : 'menu'} style={{ width: 24, height: 24 }}></i>
            </button>
          </div>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && mobileOpen && (
        <div style={{
          background: isLight ? '#fff' : '#0D2A3F',
          borderTop: `1px solid ${borderColor}`,
          padding: '12px 20px 24px',
        }}>
          {navItems.map(item => (
            <button key={item.id} onClick={() => go(item.id)} style={{
              display: 'block', width: '100%', textAlign: 'left',
              background: 'none', border: 'none', cursor: 'pointer',
              fontFamily: "'Barlow', sans-serif", fontSize: 16, fontWeight: activePage === item.id ? 700 : 500,
              color: activePage === item.id ? '#006090' : textColor,
              padding: '12px 4px',
              borderBottom: `1px solid ${borderColor}`,
            }}>{item.label}</button>
          ))}
          <button onClick={() => go('contact')} style={{
            display: 'block', width: '100%', marginTop: 16,
            background: '#006090', color: '#fff',
            fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
            padding: '13px', borderRadius: 4, border: 'none', cursor: 'pointer',
            letterSpacing: '0.04em',
          }}>Get a Quote</button>
        </div>
      )}
    </header>
  );
};

Object.assign(window, { SiteHeader });
