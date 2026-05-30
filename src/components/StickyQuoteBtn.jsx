import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Phone } from 'lucide-react';

const StickyQuoteBtn = () => {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', h);
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <button onClick={() => navigate('/contact')} style={{
      position: 'fixed', bottom: 28, right: 28, zIndex: 900,
      background: '#006090', color: '#fff',
      fontFamily: "'Barlow', sans-serif", fontSize: 14, fontWeight: 700,
      padding: '12px 22px', borderRadius: 9999, border: 'none', cursor: 'pointer',
      display: 'flex', alignItems: 'center', gap: 8,
      boxShadow: '0 6px 24px rgba(0,96,144,0.45)',
      transform: visible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
      opacity: visible ? 1 : 0,
      transition: 'all 0.25s cubic-bezier(0.34,1.56,0.64,1)',
      pointerEvents: visible ? 'all' : 'none',
    }}>
      <Phone size={15} />
      Get a Free Quote
    </button>
  );
};

export default StickyQuoteBtn;
