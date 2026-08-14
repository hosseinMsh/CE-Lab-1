export default function HeroSection() {
  return (
    <section className="section hero" id="home" aria-labelledby="hero-title">
      <div className="container">
        <p className="hero__eyebrow">Frontend Developer · UI Enthusiast</p>
        <h1 id="hero-title">Building thoughtful digital experiences.</h1>
        <p className="hero__text">
          I design and build clean, responsive interfaces with React, Vite, and modern CSS.
        </p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <a className="button button--ghost" href="#contact">
            Contact Me
          </a>
        </div>
        <dl className="hero__stats">
          <div>
            <dt>4+</dt>
            <dd>featured projects</dd>
          </div>
          <div>
            <dt>3</dt>
            <dd>core disciplines</dd>
          </div>
          <div>
            <dt>100%</dt>
            <dd>responsive layouts</dd>
          </div>
        </dl>
      </div>
    </section>
  );
}
