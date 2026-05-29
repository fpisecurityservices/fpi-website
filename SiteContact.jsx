// FPI Security — Contact Page (enhanced)
const SiteContact = ({ onNavigate }) => {
  const { isMobile } = useResponsive();
  const [form, setForm] = React.useState({
    name: '', company: '', email: '', phone: '',
    service: '', industry: '', location: '', message: '', submitted: false,
  });
  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async e => {
    e.preventDefault();
    try {
      await fetch('https://fpisecurity.app.n8n.cloud/webhook/fpi-lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          company: form.company,
          email: form.email,
          phone: form.phone,
          service: form.service,
          industry: form.industry,
          location: form.location,
          message: form.message,
        }),
      });
    } catch (_) {}
    setForm(f => ({ ...f, submitted: true }));
  };

  const inputStyle = {
    fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#1A1E26',
    background: '#fff', border: '1.5px solid #C8D0DA', borderRadius: 4,
    padding: '11px 14px', outline: 'none', width: '100%',
    transition: 'border-color 0.15s',
  };
  const labelStyle = {
    fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 600,
    color: '#262C38', letterSpacing: '0.02em', display: 'block', marginBottom: 6,
  };

  return (
    <div style={{ background: '#F4F6F8', minHeight: '100vh', paddingTop: 68 }}>
      {/* Banner */}
      <div style={{ background: 'linear-gradient(135deg, #0D2A3F, #0F3554)', padding: '64px 48px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#4A7FA8', marginBottom: 12 }}>Get In Touch</div>
          <h1 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 52, fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: 14 }}>Request a Free Consultation</h1>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 16, color: '#7090B0', maxWidth: 520, lineHeight: 1.7 }}>
            Tell us about your property and security needs. We'll respond within one business day with a customized proposal — no obligations.
          </p>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '56px 48px', display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 56 }}>
        {/* Left sidebar */}
        <div>
          {/* Photo */}
          <div style={{ borderRadius: 10, overflow: 'hidden', marginBottom: 32, boxShadow: '0 6px 24px rgba(0,0,0,0.12)' }}>
            <img src="assets/photo-lobby-officer.png" alt="FPI Security Officer" style={{ width: '100%', height: 260, objectFit: 'cover', objectPosition: 'center 15%', display: 'block' }} />
          </div>

          <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 26, fontWeight: 700, color: '#0F3554', marginBottom: 10 }}>We'll Build a Plan Around You</h3>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#647184', lineHeight: 1.7, marginBottom: 28 }}>
            Every property is different. We take the time to understand your specific risks and requirements before presenting a solution.
          </p>

          {/* Contact details */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, marginBottom: 32 }}>
            {[
              { icon: 'phone', label: 'Call Us Anytime', value: '(800) 374-4316', href: 'tel:8003744316' },
              { icon: 'mail', label: 'Email', value: 'info@fpisecurity.com', href: 'mailto:info@fpisecurity.com' },
              { icon: 'map-pin', label: 'Pembroke Pines, FL', value: 'Pembroke Pines, FL' },
              { icon: 'map-pin', label: 'Dallas Office', value: 'Dallas, TX' },
            ].map(item => (
              <div key={item.label} style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                <div style={{ width: 38, height: 38, background: '#E8EDF4', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <i data-lucide={item.icon} style={{ width: 17, height: 17, color: '#006090' }} />
                </div>
                <div>
                  <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#8A96A8', marginBottom: 2 }}>{item.label}</div>
                  {item.href
                    ? <a href={item.href} style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#006090', fontWeight: 600, textDecoration: 'none' }}>{item.value}</a>
                    : <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#262C38' }}>{item.value}</div>
                  }
                </div>
              </div>
            ))}
          </div>

          {/* Trust indicators */}
          <div style={{ background: '#fff', borderRadius: 8, padding: '20px', border: '1px solid #E2E6ED' }}>
            <div style={{ fontFamily: "'Barlow', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#8A96A8', marginBottom: 14 }}>Why FPI</div>
            {['Licensed & fully insured', 'Armed & unarmed options', 'Proprietary technology platform', 'Custom programs — not templates', '24/7 availability'].map(item => (
              <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
                <i data-lucide="check-circle" style={{ width: 15, height: 15, color: '#006090', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#4E5A6E' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Form */}
        <div style={{ background: '#fff', borderRadius: 12, padding: '40px 36px', boxShadow: '0 4px 24px rgba(0,0,0,.07)', border: '1px solid #E2E6ED' }}>
          {form.submitted ? (
            <div style={{ textAlign: 'center', padding: '60px 20px' }}>
              <div style={{ width: 60, height: 60, background: '#E8F5EE', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                <i data-lucide="check" style={{ width: 28, height: 28, color: '#2A9D5C' }} />
              </div>
              <h3 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 32, fontWeight: 700, color: '#0F3554', marginBottom: 10 }}>Request Received</h3>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 15, color: '#647184', lineHeight: 1.6, marginBottom: 12 }}>
                Thank you for reaching out. A member of our team will contact you within one business day.
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 14, color: '#4A7FA8', marginBottom: 32 }}>
                For urgent requests, call us directly at <a href="tel:8003744316" style={{ color: '#006090', fontWeight: 700, textDecoration: 'none' }}>(800) 374-4316</a>
              </p>
              <button onClick={() => { setForm({ name:'',company:'',email:'',phone:'',service:'',industry:'',location:'',message:'',submitted:false }); onNavigate('home'); }}
                style={{ background: '#006090', color: '#fff', fontFamily: "'Barlow',sans-serif", fontSize: 14, fontWeight: 600, padding: '11px 28px', borderRadius: 4, border: 'none', cursor: 'pointer' }}>
                Back to Home
              </button>
            </div>
          ) : (
            <form onSubmit={submit} style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
              <h2 style={{ fontFamily: "'Rajdhani', sans-serif", fontSize: 28, fontWeight: 700, color: '#0F3554', marginBottom: 4 }}>Tell Us About Your Needs</h2>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 13, color: '#8A96A8', marginBottom: 8, marginTop: -8 }}>All fields marked * are required. We respond within 1 business day.</p>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                <div>
                  <label style={labelStyle}>Full Name *</label>
                  <input style={inputStyle} required value={form.name} onChange={set('name')} placeholder="John Smith"
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
                </div>
                <div>
                  <label style={labelStyle}>Company / Property</label>
                  <input style={inputStyle} value={form.company} onChange={set('company')} placeholder="Your company or property name"
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Email Address *</label>
                  <input style={inputStyle} type="email" required value={form.email} onChange={set('email')} placeholder="you@company.com"
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
                </div>
                <div>
                  <label style={labelStyle}>Phone Number</label>
                  <input style={inputStyle} value={form.phone} onChange={set('phone')} placeholder="(305) 000-0000"
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={labelStyle}>Service Needed</label>
                  <select style={{ ...inputStyle, color: form.service ? '#1A1E26' : '#8A96A8' }} value={form.service} onChange={set('service')}
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'}>
                    <option value="">Select a service...</option>
                    <option>Security Officers</option>
                    <option>Mobile Patrol</option>
                    <option>Remote Video Monitoring</option>
                    <option>Access Control</option>
                    <option>Autonomous Surveillance</option>
                    <option>Multiple Services</option>
                    <option>Not Sure — Need Guidance</option>
                  </select>
                </div>
                <div>
                  <label style={labelStyle}>Industry / Property Type</label>
                  <select style={{ ...inputStyle, color: form.industry ? '#1A1E26' : '#8A96A8' }} value={form.industry} onChange={set('industry')}
                    onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'}>
                    <option value="">Select your industry...</option>
                    <option>HOA / Residential Community</option>
                    <option>Retail / Shopping Center</option>
                    <option>Construction Site</option>
                    <option>Commercial Office</option>
                    <option>Healthcare / Medical</option>
                    <option>Warehouse / Industrial</option>
                    <option>Hospitality / Hotel</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label style={labelStyle}>Location (City/State)</label>
                <input style={inputStyle} value={form.location} onChange={set('location')} placeholder="e.g. Miami, FL or Dallas, TX"
                  onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
              </div>

              <div>
                <label style={labelStyle}>Tell Us About Your Property & Security Needs</label>
                <textarea style={{ ...inputStyle, minHeight: 110, resize: 'vertical' }} value={form.message} onChange={set('message')}
                  placeholder="Describe your property size, current security setup, main concerns, and what you're looking for..."
                  onFocus={e=>e.target.style.borderColor='#006090'} onBlur={e=>e.target.style.borderColor='#C8D0DA'} />
              </div>

              <button type="submit" style={{
                background: '#006090', color: '#fff',
                fontFamily: "'Barlow', sans-serif", fontSize: 15, fontWeight: 600,
                padding: '14px', borderRadius: 4, border: 'none', cursor: 'pointer',
                letterSpacing: '0.04em', transition: 'background 0.15s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#00507A'}
              onMouseLeave={e => e.currentTarget.style.background = '#006090'}
              >Submit Consultation Request</button>

              <p style={{ fontFamily: "'Barlow', sans-serif", fontSize: 12, color: '#8A96A8', textAlign: 'center', lineHeight: 1.5 }}>
                By submitting, you agree to be contacted by FPI Security Services regarding your request. We never share your information.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { SiteContact });
