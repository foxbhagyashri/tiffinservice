import React, { useState } from "react";
import logo from "/gharguti-logo.png";

function TiffinBoxArt() {
    return (
        <svg viewBox="0 0 200 200" className="art-svg" role="img" aria-label="Steel tiffin box">
            <rect x="0" y="0" width="200" height="200" fill="#FFFCF6" />
            <g>
                <rect x="60" y="55" width="80" height="46" rx="7" fill="#D7D9DA" stroke="#8A8D90" strokeWidth="3" />
                <rect x="60" y="100" width="80" height="46" rx="7" fill="#C7CACC" stroke="#8A8D90" strokeWidth="3" />
                <rect x="60" y="145" width="80" height="36" rx="7" fill="#B7BABC" stroke="#8A8D90" strokeWidth="3" />
                <rect x="78" y="38" width="44" height="20" rx="6" fill="#D7D9DA" stroke="#8A8D90" strokeWidth="3" />
                <path d="M88 38 C 88 26, 112 26, 112 38" fill="none" stroke="#8A8D90" strokeWidth="5" strokeLinecap="round" />
                <rect x="53" y="70" width="7" height="18" rx="2" fill="#8A8D90" />
                <rect x="53" y="115" width="7" height="18" rx="2" fill="#8A8D90" />
                <rect x="140" y="70" width="7" height="18" rx="2" fill="#8A8D90" />
                <rect x="140" y="115" width="7" height="18" rx="2" fill="#8A8D90" />
            </g>
        </svg>
    );
}

function ThaliArt() {
    return (
        <svg viewBox="0 0 200 200" className="art-svg" role="img" aria-label="Thali plate with dal, chapati and rice">
            <rect x="0" y="0" width="200" height="200" fill="#FFFCF6" />
            <ellipse cx="100" cy="110" rx="72" ry="52" fill="#3F6B35" opacity="0.85" />
            <ellipse cx="100" cy="106" rx="60" ry="42" fill="#F2E6C8" />
            <ellipse cx="70" cy="96" rx="20" ry="14" fill="#B54A2A" />
            <ellipse cx="70" cy="93" rx="16" ry="10" fill="#E08D3C" />
            <ellipse cx="128" cy="100" rx="17" ry="12" fill="#5A7D3A" />
            <circle cx="105" cy="128" r="14" fill="#E9C77E" />
            <circle cx="105" cy="128" r="14" fill="none" stroke="#C79A4C" strokeWidth="2" />
            <circle cx="102" cy="125" r="1.6" fill="#C79A4C" />
            <circle cx="109" cy="131" r="1.6" fill="#C79A4C" />
            <circle cx="106" cy="122" r="1.6" fill="#C79A4C" />
            <ellipse cx="138" cy="128" rx="14" ry="10" fill="#fff" />
        </svg>
    );
}

function KitchenArt() {
    return (
        <svg viewBox="0 0 200 200" className="art-svg" role="img" aria-label="Home kitchen stove with a pot cooking">
            <rect x="0" y="0" width="200" height="200" fill="#FFFCF6" />
            <rect x="40" y="120" width="120" height="14" rx="3" fill="#3B2114" />
            <rect x="52" y="134" width="10" height="30" fill="#3B2114" />
            <rect x="138" y="134" width="10" height="30" fill="#3B2114" />
            <circle cx="80" cy="118" r="7" fill="#E08D3C" />
            <circle cx="120" cy="118" r="7" fill="#E08D3C" />
            <ellipse cx="100" cy="100" rx="34" ry="12" fill="#B7BABC" />
            <path d="M66 100 C 66 78, 134 78, 134 100 L 130 108 C 130 118, 70 118, 70 108 Z" fill="#C7CACC" stroke="#8A8D90" strokeWidth="2.5" />
            <path d="M85 76 C 80 62, 92 58, 86 44" fill="none" stroke="#D98C15" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
            <path d="M108 76 C 103 62, 115 58, 109 44" fill="none" stroke="#D98C15" strokeWidth="5" strokeLinecap="round" opacity="0.8" />
        </svg>
    );
}

const WHATSAPP_NUMBER = "918862003139"; // +91 88620 03139
const DISPLAY_PHONE = "88620 03139";

const PLANS = [
    {
        tier: "टिफिन",
        name: "Trial Tiffin",
        price: "₹100",
        unit: "per meal",
        blurb: "Try one lunch or dinner before you commit. No plan, no pressure.",
        items: ["2 sabzi", "Dal or kadhi", "4 chapati", "Rice", "Salad"],
    },
    {
        tier: "साप्ताहिक",
        name: "Weekly Plan",
        price: "₹1,300",
        unit: "per week",
        blurb: "One meal a day, seven days, delivered around the same time each day.",
        items: ["2 sabzi (rotating)", "Dal or kadhi", "4 chapati", "Rice", "Salad + pickle"],
        featured: true,
    },
    {
        tier: "मासिक",
        name: "Monthly Mess",
        price: "₹4,800",
        unit: "per month",
        blurb: "Lunch and dinner both, the full mess routine. Best for students and working professionals.",
        items: ["Lunch + dinner", "2 sabzi + dal", "Chapati + rice", "Sunday special thali"],
    },
];

const STEPS = [
    {
        n: "1",
        title: "Tell us your area and meal time",
        body: "Send your address in Moshi and whether you need lunch, dinner, or both. We confirm if we deliver there.",
    },
    {
        n: "2",
        title: "Pick trial, weekly, or monthly",
        body: "Start with one trial tiffin, or go straight to a weekly or monthly plan if you already know our food.",
    },
    {
        n: "3",
        title: "We cook and deliver, hot and on time",
        body: "Meals are cooked fresh that day in a home kitchen and packed in a steel tiffin, delivered to your door.",
    },
];

function LeafDivider() {
    return (
        <svg viewBox="0 0 1200 40" className="leaf-divider" preserveAspectRatio="none" aria-hidden="true">
            <path d="M0 20 C 200 0, 300 40, 500 20 C 700 0, 800 40, 1000 20 C 1100 10, 1150 20, 1200 20" fill="none" stroke="currentColor" strokeWidth="2" />
            <circle cx="500" cy="20" r="4" fill="currentColor" />
        </svg>
    );
}

export default function App() {
    const [form, setForm] = useState({
        name: "",
        phone: "",
        area: "",
        meal: "Lunch",
        plan: "Trial Tiffin",
        message: "",
    });
    const [touched, setTouched] = useState(false);

    const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

    const isValid = form.name.trim().length > 1 && /^[0-9+\-\s]{7,}$/.test(form.phone.trim());

    const sendEnquiry = (e) => {
        e.preventDefault();
        setTouched(true);
        if (!isValid) return;

        const lines = [
            `Enquiry from Gharguti website`,
            `Name: ${form.name}`,
            `Phone: ${form.phone}`,
            form.area ? `Area: ${form.area}` : null,
            `Meal: ${form.meal}`,
            `Plan interested: ${form.plan}`,
            form.message ? `Message: ${form.message}` : null,
        ].filter(Boolean);

        const text = encodeURIComponent(lines.join("\n"));
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    };

    const quickWhatsApp = () => {
        const text = encodeURIComponent("Hi, I want to know more about Gharguti tiffin plans.");
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank");
    };

    return (
        <div className="page">
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700&family=Work+Sans:wght@400;500;600;700&display=swap');

        :root{
          --cream:#F7EFDF;
          --paper:#FFFCF6;
          --ink:#2A1A10;
          --brown:#3B2114;
          --gold:#D98C15;
          --terracotta:#B54A2A;
          --leaf:#3F6B35;
          --leaf-dark:#2C4E26;
          --line: rgba(59,33,20,0.14);
        }
        *{box-sizing:border-box;}
        .page{
          background:var(--cream);
          color:var(--ink);
          font-family:'Work Sans', sans-serif;
          line-height:1.5;
          -webkit-font-smoothing:antialiased;
        }
        h1,h2,h3{
          font-family:'Fraunces', serif;
          color:var(--brown);
          margin:0;
          font-weight:600;
          letter-spacing:-0.01em;
        }
        p{margin:0;}
        a{color:inherit;}
        .wrap{
          max-width:1120px;
          margin:0 auto;
          padding:0 28px;
        }
        button{font-family:inherit;cursor:pointer;}
        img{display:block;}

        /* NAV */
        .nav{
          position:sticky;top:0;z-index:20;
          background:rgba(247,239,223,0.92);
          backdrop-filter:blur(6px);
          border-bottom:1px solid var(--line);
        }
        .nav-inner{
          max-width:1120px;margin:0 auto;padding:12px 28px;
          display:flex;align-items:center;justify-content:space-between;
        }
        .brand{display:flex;align-items:center;gap:12px;}
        .brand-logo{width:48px;height:48px;border-radius:50%;object-fit:cover;}
        .brand-text{display:flex;flex-direction:column;line-height:1.1;}
        .brand-name{font-family:'Fraunces', serif;font-size:22px;font-weight:700;color:var(--brown);}
        .brand-tag{font-size:12px;color:var(--terracotta);margin-top:2px;}
        .nav-cta{
          display:flex;align-items:center;gap:10px;
          background:var(--leaf);color:#fff;
          padding:10px 18px;border-radius:8px;
          border:none;font-weight:600;font-size:14px;
          text-decoration:none;
        }
        .nav-cta:hover{background:var(--leaf-dark);}

        /* HERO */
        .hero{
          padding:56px 0 40px;
          display:grid;grid-template-columns:1.1fr 0.9fr;
          gap:48px;align-items:center;
        }
        .hero-eyebrow{
          font-size:14px;color:var(--leaf);font-weight:600;
        }
        .hero h1{
          font-size:54px;line-height:1.04;margin-top:14px;
        }
        .hero-sub{
          margin-top:20px;font-size:18px;max-width:46ch;color:#4A382C;
        }
        .hero-facts{
          margin-top:24px;display:flex;gap:22px;flex-wrap:wrap;
        }
        .hero-fact{font-size:14px;color:var(--brown);display:flex;gap:8px;align-items:center;}
        .dot{width:6px;height:6px;border-radius:50%;background:var(--gold);display:inline-block;}
        .hero-actions{
          margin-top:32px;display:flex;gap:14px;flex-wrap:wrap;
        }
        .btn-primary{
          background:var(--terracotta);color:#fff;border:none;
          padding:15px 26px;border-radius:8px;font-weight:600;font-size:16px;
        }
        .btn-primary:hover{background:#9c3f22;}
        .btn-ghost{
          background:transparent;color:var(--brown);
          border:1.5px solid var(--brown);
          padding:14px 24px;border-radius:8px;font-weight:600;font-size:16px;
          text-decoration:none;
        }
        .btn-ghost:hover{background:var(--brown);color:#fff;}

        .hero-badge{
          position:relative;
          justify-self:center;
          width:100%;
          max-width:400px;
        }
        .hero-badge img{
          width:100%;
          border-radius:50%;
          box-shadow:0 18px 40px rgba(59,33,20,0.22);
          border:6px solid var(--paper);
        }
        .hero-badge-ring{
          position:absolute;inset:-14px;
          border:1.5px dashed var(--gold);
          border-radius:50%;
        }

        .leaf-divider{width:100%;height:28px;color:var(--line);display:block;}

        /* PHOTO STRIP */
        .photo-strip{
          display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:16px;
        }
        .photo-strip figure{
          margin:0;border-radius:14px;overflow:hidden;
          border:1px solid var(--line);background:var(--paper);
        }
        .art-svg{width:100%;height:100%;aspect-ratio:4/3;display:block;}
        .photo-strip figcaption{
          padding:10px 14px;font-size:13px;color:#6B5A4A;
        }

        /* STEPS */
        .section{padding:56px 0;}
        .section-head{max-width:56ch;margin-bottom:36px;}
        .section-head h2{font-size:34px;}
        .section-head p{margin-top:10px;color:#4A382C;font-size:16px;}

        .steps{
          display:grid;grid-template-columns:repeat(3,1fr);gap:28px;
        }
        .step{
          background:var(--paper);border:1px solid var(--line);
          border-radius:10px;padding:26px;
        }
        .step-n{
          font-family:'Fraunces', serif;font-size:34px;color:var(--gold);
        }
        .step h3{font-size:19px;margin-top:10px;}
        .step p{margin-top:8px;font-size:14.5px;color:#4A382C;}

        /* PLANS - tiffin tier motif */
        .plans{
          display:grid;grid-template-columns:repeat(3,1fr);gap:24px;
        }
        .plan{
          border:1px solid var(--line);
          border-radius:12px;overflow:hidden;
          background:var(--paper);
          display:flex;flex-direction:column;
        }
        .plan.featured{
          border-color:var(--terracotta);
          box-shadow:0 0 0 2px var(--terracotta);
        }
        .plan-tier{
          background:var(--brown);color:var(--cream);
          font-size:13px;font-weight:600;padding:8px 20px;
        }
        .plan-body{padding:24px 22px 26px;flex:1;display:flex;flex-direction:column;}
        .plan-name{font-family:'Fraunces', serif;font-size:22px;color:var(--brown);}
        .plan-price{margin-top:10px;display:flex;align-items:baseline;gap:6px;}
        .plan-price .amount{font-family:'Fraunces', serif;font-size:32px;color:var(--terracotta);}
        .plan-price .unit{font-size:13px;color:#7A6857;}
        .plan-blurb{margin-top:12px;font-size:14px;color:#4A382C;}
        .plan-items{list-style:none;margin:18px 0 0;padding:0;display:flex;flex-direction:column;gap:8px;}
        .plan-items li{
          font-size:14px;color:var(--ink);
          padding-left:18px;position:relative;
        }
        .plan-items li::before{
          content:"";position:absolute;left:0;top:7px;
          width:6px;height:6px;border-radius:50%;background:var(--leaf);
        }
        .plan-cta{
          margin-top:20px;background:var(--leaf);color:#fff;border:none;
          padding:12px 16px;border-radius:8px;font-weight:600;font-size:14px;
          text-align:center;text-decoration:none;display:block;
        }
        .plan-cta:hover{background:var(--leaf-dark);}

        /* ENQUIRY */
        .enquiry-shell{
          background:var(--brown);
          border-radius:16px;
          padding:44px;
          display:grid;grid-template-columns:0.85fr 1.15fr;gap:40px;
        }
        .enquiry-copy h2{color:var(--cream);font-size:30px;}
        .enquiry-copy p{color:#D9C9B6;margin-top:12px;font-size:15px;max-width:38ch;}
        .enquiry-copy .whatsapp-note{
          margin-top:24px;display:flex;align-items:center;gap:10px;
          font-size:14px;color:var(--gold);font-weight:600;
        }
        .form-grid{
          display:grid;grid-template-columns:1fr 1fr;gap:14px;
          background:var(--paper);border-radius:12px;padding:26px;
        }
        .field{display:flex;flex-direction:column;gap:6px;}
        .field.full{grid-column:1 / -1;}
        .field label{font-size:13px;color:var(--brown);font-weight:600;}
        .field input,.field select,.field textarea{
          border:1.5px solid var(--line);border-radius:8px;
          padding:10px 12px;font-size:14.5px;font-family:inherit;
          background:#fff;color:var(--ink);
        }
        .field input:focus,.field select:focus,.field textarea:focus{
          outline:2px solid var(--gold);outline-offset:1px;
        }
        .field-error{font-size:12px;color:var(--terracotta);}
        .submit-btn{
          grid-column:1 / -1;background:var(--terracotta);color:#fff;
          border:none;border-radius:8px;padding:14px;font-weight:700;font-size:15px;
          margin-top:4px;
        }
        .submit-btn:hover{background:#9c3f22;}
        .submit-hint{grid-column:1 / -1;font-size:12px;color:#7A6857;text-align:center;}

        /* FOOTER */
        .footer{
          padding:44px 0 30px;border-top:1px solid var(--line);
          display:flex;justify-content:space-between;flex-wrap:wrap;gap:20px;
        }
        .footer-brand{display:flex;align-items:center;gap:10px;}
        .footer-logo{width:34px;height:34px;border-radius:50%;object-fit:cover;}
        .footer-brand-name{font-family:'Fraunces', serif;font-size:20px;color:var(--brown);}
        .footer-meta{font-size:13.5px;color:#6B5A4A;margin-top:6px;line-height:1.7;}

        .fab{
          position:fixed;right:20px;bottom:20px;z-index:30;
          background:var(--leaf);color:#fff;border:none;border-radius:999px;
          padding:14px 20px;font-weight:700;font-size:14px;
          box-shadow:0 6px 18px rgba(44,78,38,0.35);
          display:flex;align-items:center;gap:8px;
        }
        .fab:hover{background:var(--leaf-dark);}

        @media (max-width: 860px){
          .hero{grid-template-columns:1fr;padding-top:32px;}
          .hero h1{font-size:36px;}
          .hero-badge{max-width:260px;}
          .photo-strip{grid-template-columns:1fr;}
          .steps{grid-template-columns:1fr;}
          .plans{grid-template-columns:1fr;}
          .enquiry-shell{grid-template-columns:1fr;padding:26px;}
          .form-grid{grid-template-columns:1fr;}
          .footer{flex-direction:column;}
        }
      `}</style>

            {/* NAV */}
            <div className="nav">
                <div className="nav-inner">
                    <div className="brand">
                        <img className="brand-logo" src={logo} alt="Gharguti Tiffin & Mess Service logo" />
                        <div className="brand-text">
                            <span className="brand-name">Gharguti</span>
                            <span className="brand-tag">Tiffin &amp; Mess Service</span>
                        </div>
                    </div>
                    <a className="nav-cta" href={`tel:+${WHATSAPP_NUMBER}`}>
                        Call {DISPLAY_PHONE}
                    </a>
                </div>
            </div>

            {/* HERO */}
            <div className="wrap hero">
                <div>
                    <p className="hero-eyebrow">Home-style tiffin, Moshi, Pune</p>
                    <h1>Ghar jaisa taste, every single day.</h1>
                    <p className="hero-sub">
                        Fresh sabzi, dal, chapati and rice, cooked the same morning in a home kitchen
                        and delivered to your door in Moshi — no MSG, no shortcuts, just food like home.
                    </p>
                    <div className="hero-facts">
                        <span className="hero-fact"><span className="dot" /> Fresh, cooked daily</span>
                        <span className="hero-fact"><span className="dot" /> No preservatives</span>
                        <span className="hero-fact"><span className="dot" /> Lunch &amp; dinner delivery</span>
                    </div>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={quickWhatsApp}>
                            Enquire on WhatsApp
                        </button>
                        <a className="btn-ghost" href="#plans">See plans</a>
                    </div>
                </div>
                <div className="hero-badge">
                    <div className="hero-badge-ring" />
                    <img src={logo} alt="Gharguti Tiffin & Mess Service" />
                </div>
            </div>

            <div className="wrap"><LeafDivider /></div>

            {/* ART STRIP - swap for real photos once you have them */}
            <div className="wrap section" style={{ paddingBottom: 0 }}>
                <div className="section-head">
                    <h2>What a Gharguti tiffin looks like</h2>
                    <p>We're just starting out, so these are illustrations for now — once your first tiffins go out, we'll swap them for real photos.</p>
                </div>
                <div className="photo-strip">
                    <figure>
                        <TiffinBoxArt />
                        <figcaption>Steel tiffin, packed fresh</figcaption>
                    </figure>
                    <figure>
                        <ThaliArt />
                        <figcaption>Today's thali</figcaption>
                    </figure>
                    <figure>
                        <KitchenArt />
                        <figcaption>Cooked in a home kitchen</figcaption>
                    </figure>
                </div>
            </div>

            {/* HOW IT WORKS */}
            <div className="wrap section">
                <div className="section-head">
                    <h2>How it works</h2>
                    <p>From your first message to your first tiffin, here's the whole process.</p>
                </div>
                <div className="steps">
                    {STEPS.map((s) => (
                        <div className="step" key={s.n}>
                            <div className="step-n">{s.n}</div>
                            <h3>{s.title}</h3>
                            <p>{s.body}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="wrap"><LeafDivider /></div>

            {/* PLANS */}
            <div className="wrap section" id="plans">
                <div className="section-head">
                    <h2>Plans that fit how you eat</h2>
                    <p>Try one meal, or settle into a weekly or monthly routine. Every plan is home-cooked, thali-style.</p>
                </div>
                <div className="plans">
                    {PLANS.map((p) => (
                        <div className={`plan ${p.featured ? "featured" : ""}`} key={p.name}>
                            <div className="plan-tier">{p.tier}</div>
                            <div className="plan-body">
                                <div className="plan-name">{p.name}</div>
                                <div className="plan-price">
                                    <span className="amount">{p.price}</span>
                                    <span className="unit">{p.unit}</span>
                                </div>
                                <p className="plan-blurb">{p.blurb}</p>
                                <ul className="plan-items">
                                    {p.items.map((it) => (
                                        <li key={it}>{it}</li>
                                    ))}
                                </ul>
                                <a
                                    className="plan-cta"
                                    href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
                                        `Hi, I'm interested in the ${p.name} (${p.price} ${p.unit}). Please share more details.`
                                    )}`}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Ask about this plan
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="wrap"><LeafDivider /></div>

            {/* ENQUIRY FORM */}
            <div className="wrap section" id="enquiry">
                <div className="enquiry-shell">
                    <div className="enquiry-copy">
                        <h2>Send us your enquiry</h2>
                        <p>
                            Fill this in and it opens WhatsApp with your details ready to send to us
                            at {DISPLAY_PHONE}. We usually reply within the day.
                        </p>
                        <div className="whatsapp-note">Delivered straight to our WhatsApp</div>
                    </div>

                    <form className="form-grid" onSubmit={sendEnquiry}>
                        <div className="field">
                            <label htmlFor="name">Your name</label>
                            <input id="name" value={form.name} onChange={update("name")} placeholder="e.g. Rohan Patil" />
                            {touched && form.name.trim().length <= 1 && (
                                <span className="field-error">Please enter your name.</span>
                            )}
                        </div>
                        <div className="field">
                            <label htmlFor="phone">Phone number</label>
                            <input id="phone" value={form.phone} onChange={update("phone")} placeholder="e.g. 98xxxxxxx0" />
                            {touched && !/^[0-9+\-\s]{7,}$/.test(form.phone.trim()) && (
                                <span className="field-error">Please enter a valid phone number.</span>
                            )}
                        </div>
                        <div className="field full">
                            <label htmlFor="area">Area / address in Moshi</label>
                            <input id="area" value={form.area} onChange={update("area")} placeholder="e.g. Near Dattawadi, Moshi" />
                        </div>
                        <div className="field">
                            <label htmlFor="meal">Meal needed</label>
                            <select id="meal" value={form.meal} onChange={update("meal")}>
                                <option>Lunch</option>
                                <option>Dinner</option>
                                <option>Both</option>
                            </select>
                        </div>
                        <div className="field">
                            <label htmlFor="plan">Plan you're interested in</label>
                            <select id="plan" value={form.plan} onChange={update("plan")}>
                                {PLANS.map((p) => (
                                    <option key={p.name}>{p.name}</option>
                                ))}
                            </select>
                        </div>
                        <div className="field full">
                            <label htmlFor="message">Anything else? (optional)</label>
                            <textarea id="message" rows={3} value={form.message} onChange={update("message")} placeholder="Allergies, preferred delivery time, etc." />
                        </div>
                        <button className="submit-btn" type="submit">Send enquiry on WhatsApp</button>
                        <span className="submit-hint">Opens WhatsApp with your details filled in — you just hit send.</span>
                    </form>
                </div>
            </div>

            {/* FOOTER */}
            <div className="wrap footer">
                <div>
                    <div className="footer-brand">
                        <img className="footer-logo" src={logo} alt="Gharguti logo" />
                        <span className="footer-brand-name">Gharguti Tiffin &amp; Mess Service</span>
                    </div>
                    <div className="footer-meta">
                        Moshi, Pune<br />
                        Call / WhatsApp: {DISPLAY_PHONE}<br />
                        Fresh · Healthy · Homemade
                    </div>
                </div>
                <div className="footer-meta">
                    Enquiries sent here go straight to our WhatsApp.<br />
                    We're happy to answer questions before you commit to a plan.
                </div>
            </div>

            <button className="fab" onClick={quickWhatsApp}>
                WhatsApp us
            </button>
        </div>
    );
}
