import React from "react";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";

const LINKS = {
  whatsapp: "https://wa.me/6597708681",
  email: "mailto:ctclearning.sg@gmail.com"
};

function Shell({ children }) {
  return (
    <>
      <header className="container">
        <nav>
          <ul>
            <li><Link to="/" className="mono"><strong>CTCL</strong></Link></li>
          </ul>
          <ul>
            <li><Link to="/" role="button" className="contrast">Home</Link></li>
            <li><Link to="/method">CTCL Method</Link></li>
            <li><Link to="/booking">Book a Session</Link></li>
          </ul>
        </nav>
      </header>
      <main className="container">{children}</main>
      <footer className="container small">© {new Date().getFullYear()} Crack The Code Learning (CTCL)</footer>
    </>
  );
}

function Home() {
  return (
    <Shell>
      <article>
        <header>
          <p className="small">Coach-led • Research-grounded • Results-proven</p>
          <h1>Learn Smarter, Perform Calmer.</h1>
          <p>
            CTCL helps Primary 3–6 students build cognitive skills for English and Math using <strong>Codekey™</strong> — a structured methodology that turns complex tasks into clear, repeatable thinking moves.
          </p>
          <p>
            <Link to="/booking" className="btn btn-dark">Book Diagnostic Session →</Link>
            <Link to="/method" className="btn btn-outline" style={{ marginLeft: ".5rem" }}>See the CTCL Method</Link>
          </p>
          <p className="small">✓ 2–3 AL band lift (typical) · ✓ Calm exam mindset · ✓ Transferable thinking routines</p>
        </header>
      </article>

      <section>
        <h2>Programmes</h2>
        <p>Primary 3–6 · English & Math. Small-group coaching focused on cognitive performance, not rote drills. Weekly sessions with guided practice, feedback loops and reflection.</p>
        <div className="grid-2">
          <div className="card">
            <h3>English Coaching</h3>
            <ul>
              <li>Strategic reading & annotation</li>
              <li>Writing craft via model → attempt cycles</li>
              <li>Exam routines: time-boxing, decision trees</li>
            </ul>
          </div>
          <div className="card">
            <h3>Math Coaching</h3>
            <ul>
              <li>Schema activation & problem types</li>
              <li>Error audits and worked-example pairs</li>
              <li>Transfer fluency training</li>
            </ul>
          </div>
        </div>
      </section>
    </Shell>
  );
}

function Method() {
  return (
    <Shell>
      <article>
        <header>
          <p className="small">CTCL Method · Codekey™</p>
          <h1>From Pathologies → Possibilities</h1>
          <p>
            In 1999, Shulman described the “pathologies of learning” — breakdowns in <em>memory</em>, <em>understanding</em> and <em>application</em>. Codekey™ addresses these with cognitive engineering, metacognitive cycles, and transfer routines.
          </p>
        </header>
        <div className="grid-2">
          <div className="card"><span className="small">Amnesia → Memory failure</span><br/><strong>Spaced Retrieval · Dual Coding · Active Recall</strong></div>
          <div className="card"><span className="small">Fantasia → Misunderstanding</span><br/><strong>Schema Activation · Visual Mapping · Concept Repair</strong></div>
          <div className="card"><span className="small">Inertia → Lack of Application</span><br/><strong>Transfer Fluency · Authentic Problem Solving</strong></div>
          <div className="card"><span className="small">Passive reviews, drills</span><br/><strong>Interleaving · Diagnostic Loops · Thinking Routines</strong></div>
        </div>
        <blockquote>“Shulman helped us understand what can go wrong. At Codekey™, we focus on what makes learning truly work — and stick.”</blockquote>
        <p className="small">Research backbone: Ambrose et al. (2010); Bransford et al. (2000); Willingham (2009); Hattie (2009).</p>
      </article>
    </Shell>
  );
}

function Booking() {
  return (
    <Shell>
      <article>
        <header>
          <p className="small">Get Started</p>
          <h1>Book a Diagnostic Session</h1>
          <p>Choose WhatsApp or email. We’ll send a short questionnaire and propose a slot within 24 hours.</p>
          <p>
            <a className="btn btn-dark" href={LINKS.whatsapp}>WhatsApp Us</a>
            <a className="btn btn-outline" href={LINKS.email} style={{ marginLeft: ".5rem" }}>Email Us</a>
          </p>
        </header>
      </article>
    </Shell>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/method" element={<Method/>} />
        <Route path="/booking" element={<Booking/>} />
      </Routes>
    </Router>
  );
}
