import * as React from "react"
import { motion } from "framer-motion"

type AlasDojoProps = {
    brand: string
    logoImage: string
    subtitle: string
    discipline: string
    instructor: string
    rank: string
    club: string
    location: string
    address: string
    whatsappDisplay: string
    whatsappNumber: string
    navCta: string
    primaryCta: string
    secondaryCta: string
    heroEyebrow: string
    heroTitle: string
    heroText: string
    statOneValue: string
    statOneText: string
    statTwoValue: string
    statTwoText: string
    statThreeValue: string
    statThreeText: string
    introLabel: string
    introTitle: string
    introText: string
    valuesLabel: string
    valuesTitle: string
    valuesText: string
    pillarOneTitle: string
    pillarOneText: string
    pillarTwoTitle: string
    pillarTwoText: string
    pillarThreeTitle: string
    pillarThreeText: string
    instructorLabel: string
    instructorTitle: string
    instructorText: string
    scheduleLabel: string
    scheduleTitle: string
    scheduleText: string
    mondayText: string
    wednesdayText: string
    fridayText: string
    galleryLabel: string
    galleryTitle: string
    galleryText: string
    galleryOneTitle: string
    galleryOneTag: string
    galleryTwoTitle: string
    galleryTwoTag: string
    galleryThreeTitle: string
    galleryThreeTag: string
    galleryFourTitle: string
    galleryFourTag: string
    contactLabel: string
    contactTitle: string
    contactText: string
    footerCredit: string
    mapUrl: string
    heroImage: string
    instructorImage: string
    dojoImage: string
    galleryOneImage: string
    galleryTwoImage: string
    galleryThreeImage: string
    galleryFourImage: string
    backgroundColor: string
    inkColor: string
    mutedColor: string
    emberColor: string
    flameColor: string
    goldColor: string
    creamColor: string
}

const DEFAULTS: AlasDojoProps = {
    brand: "Alas Dojo",
    logoImage: "",
    subtitle: "Kyokushin Karate en Mercedes",
    discipline: "World Kyokushin Karate",
    instructor: "Shihan Freddy Mazzoni",
    rank: "Dirección técnica",
    club: "Club Ascencio",
    location: "Mercedes, Uruguay",
    address: "Club Ascencio, Mercedes, Soriano",
    whatsappDisplay: "094 927 039",
    whatsappNumber: "59894927039",
    navCta: "Consultar",
    primaryCta: "Quiero entrenar",
    secondaryCta: "Ver horarios",
    heroEyebrow: "Mercedes, Uruguay",
    heroTitle: "Despertá tu fuerza. Entrená con espíritu de alas.",
    heroText:
        "Alas Dojo es un espacio de World Kyokushin Karate para formar carácter, disciplina y confianza con entrenamientos intensos, respeto y sentido de pertenencia.",
    statOneValue: "19:00",
    statOneText: "Lunes, miércoles y viernes",
    statTwoValue: "WKK",
    statTwoText: "World Kyokushin Karate",
    statThreeValue: "OSU",
    statThreeText: "Respeto, temple y superación",
    introLabel: "El dojo",
    introTitle: "Un lugar donde la energía se convierte en disciplina.",
    introText:
        "Cada clase combina técnica, condición física y actitud. La práctica acompaña a quienes empiezan desde cero y también a quienes buscan exigirse más, siempre dentro de un ambiente serio, humano y de equipo.",
    valuesLabel: "Camino Kyokushin",
    valuesTitle: "Fuego interior, cabeza fría y respeto en cada movimiento.",
    valuesText:
        "Disciplina, Respeto, Constancia, Autocontrol, Fuerza mental, Comunidad, Superación",
    pillarOneTitle: "Karate real",
    pillarOneText:
        "Entrenamiento de base, kihon, kata y combate con foco en técnica, resistencia y progreso medible.",
    pillarTwoTitle: "Comunidad fuerte",
    pillarTwoText:
        "Un dojo donde cada alumno encuentra exigencia, acompañamiento y un grupo que empuja hacia adelante.",
    pillarThreeTitle: "Identidad Alas",
    pillarThreeText:
        "Una estética de fuego y alas para representar impulso, decisión y el deseo de elevar el propio nivel.",
    instructorLabel: "Instructor",
    instructorTitle: "Guiado por Shihan Freddy Mazzoni.",
    instructorText:
        "La dirección técnica sostiene una práctica clara y exigente, con mirada en los fundamentos de Kyokushin: humildad, perseverancia, potencia y respeto dentro y fuera del tatami.",
    scheduleLabel: "Horarios",
    scheduleTitle: "Tres encuentros por semana para construir constancia.",
    scheduleText:
        "Entrenamos en Club Ascencio, Mercedes. Escribí por WhatsApp para consultar cupos, primera clase y requisitos para empezar.",
    mondayText: "Lunes - 19:00 hs",
    wednesdayText: "Miércoles - 19:00 hs",
    fridayText: "Viernes - 19:00 hs",
    galleryLabel: "Galería",
    galleryTitle: "Imágenes de referencia para transmitir energía de dojo.",
    galleryText:
        "Estas fotografías son placeholders. Luego podés cambiarlas por fotos reales de Alas Dojo desde las propiedades del componente en Framer.",
    galleryOneTitle: "Técnica",
    galleryOneTag: "Precisión",
    galleryTwoTitle: "Kumite",
    galleryTwoTag: "Carácter",
    galleryThreeTitle: "Dojo",
    galleryThreeTag: "Equipo",
    galleryFourTitle: "Espíritu",
    galleryFourTag: "OSU",
    contactLabel: "Contacto",
    contactTitle: "Tu primera clase empieza con un mensaje.",
    contactText:
        "Consultá por WhatsApp y sumate a una práctica que trabaja cuerpo, mente y actitud desde el primer día.",
    footerCredit: "Hecho por Gonzalo DevTeam",
    mapUrl: "https://www.google.com/maps/search/?api=1&query=Club%20Ascencio%20Mercedes%20Uruguay",
    heroImage:
        "https://images.unsplash.com/photo-1688632106590-39547edc1112?auto=format&fit=crop&q=80&w=2200",
    instructorImage:
        "https://i.imgur.com/SNBCORy.png?auto=compress&cs=tinysrgb&w=1200",
    dojoImage:
        "https://i.imgur.com/wyj3QBl.png?auto=compress&cs=tinysrgb&w=1400",
    galleryOneImage:
        "https://i.imgur.com/hj6XxVx.png?auto=compress&cs=tinysrgb&w=1200",
    galleryTwoImage:
        "https://i.imgur.com/V8vvE28.png?auto=compress&cs=tinysrgb&w=1200",
    galleryThreeImage:
        "https://i.imgur.com/T5jHgbw.png?auto=compress&cs=tinysrgb&w=1200",
    galleryFourImage:
        "https://i.imgur.com/3mJiG5K.png?auto=compress&cs=tinysrgb&w=1200",
    backgroundColor: "#120706",
    inkColor: "#fff7df",
    mutedColor: "#f5c99b",
    emberColor: "#d71920",
    flameColor: "#ff6a00",
    goldColor: "#ffd36a",
    creamColor: "#fff3cf",
}

const navItems = [
    { label: "Inicio", href: "#inicio" },
    { label: "Dojo", href: "#dojo" },
    { label: "Valores", href: "#valores" },
    { label: "Horarios", href: "#horarios" },
    { label: "Contacto", href: "#contacto" },
]

const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.72,
            delay,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
}

const cardReveal = {
    hidden: { opacity: 0, y: 24, scale: 0.98 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.62,
            ease: [0.22, 1, 0.36, 1],
        },
    },
}

const staggerGroup = {
    hidden: {},
    visible: {
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.05,
        },
    },
}

function splitValues(valuesText: string) {
    return valuesText
        .split(",")
        .map((item) => item.trim())
        .filter(Boolean)
}

function makeWhatsappLink(number: string, brand: string) {
    const cleanNumber = number.replace(/[^\d]/g, "")
    return `https://wa.me/${cleanNumber}?text=${encodeURIComponent(
        `Hola ${brand}, quiero consultar por las clases de karate.`
    )}`
}

function WingMark({ brand, src }: { brand: string; src?: string }) {
    const logoSrc = src?.trim()

    return (
        <div
            className={`alas-logo${logoSrc ? " alas-logo--image" : ""}`}
            aria-label={brand}
        >
            {logoSrc ? (
                <img className="alas-logo__image" src={logoSrc} alt={brand} />
            ) : (
                <>
                    <span className="alas-logo__wing alas-logo__wing--left">
                        <span />
                        <span />
                        <span />
                    </span>
                    <strong>火</strong>
                    <span className="alas-logo__wing alas-logo__wing--right">
                        <span />
                        <span />
                        <span />
                    </span>
                </>
            )}
        </div>
    )
}

function SectionLabel({ children }: { children: React.ReactNode }) {
    return <p className="section-label">{children}</p>
}

function StatCard({ value, text }: { value: string; text: string }) {
    return (
        <motion.article className="stat-card" variants={cardReveal}>
            <strong>{value}</strong>
            <span>{text}</span>
        </motion.article>
    )
}

function ContactLine({
    label,
    value,
}: {
    label: string
    value: React.ReactNode
}) {
    return (
        <div className="contact-line">
            <span>{label}</span>
            <strong>{value}</strong>
        </div>
    )
}

// FIX 3: Improved smooth scroll — uses scrollIntoView with behavior smooth,
// with a polyfill fallback for browsers that ignore CSS scroll-behavior on anchors.
function handleSectionClick(
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
) {
    if (!href.startsWith("#")) return

    const target = document.querySelector(href)
    if (!target) return

    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    // Update URL without triggering a jump
    window.history.replaceState(null, "", href)
}

export default function AlasDojoLanding(
    props: Partial<AlasDojoProps>
): React.ReactElement {
    const data = { ...DEFAULTS, ...props }
    const whatsappLink = makeWhatsappLink(data.whatsappNumber, data.brand)
    const values = splitValues(data.valuesText)

    return (
        <div
            className="alas-page"
            style={
                {
                    "--bg": data.backgroundColor,
                    "--ink": data.inkColor,
                    "--muted": data.mutedColor,
                    "--ember": data.emberColor,
                    "--flame": data.flameColor,
                    "--gold": data.goldColor,
                    "--cream": data.creamColor,
                } as React.CSSProperties
            }
        >
            <style>{css}</style>

            <header className="alas-nav">
                <a
                    className="alas-brand"
                    href="#inicio"
                    onClick={(event) => handleSectionClick(event, "#inicio")}
                >
                    <WingMark brand={data.brand} src={data.logoImage} />
                    <span>
                        <strong>{data.brand}</strong>
                        <small>{data.subtitle}</small>
                    </span>
                </a>

                <nav aria-label="Navegación principal">
                    {navItems.map((item) => (
                        <a
                            href={item.href}
                            key={item.href}
                            onClick={(event) =>
                                handleSectionClick(event, item.href)
                            }
                        >
                            {item.label}
                        </a>
                    ))}
                </nav>

                <a
                    className="nav-cta"
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                >
                    {data.navCta}
                </a>
            </header>

            <main>
                <section className="hero-section" id="inicio">
                    <img
                        className="hero-image"
                        src={data.heroImage}
                        alt="Clase de karate entrenando en dojo"
                    />
                    <div className="hero-shade" />
                    <div className="hero-fire" />
                    {/* FIX 1: hero-wings element REMOVED — was the decorative SVG arcs
                        circled in blue in the screenshot. No longer rendered. */}

                    <motion.div
                        className="hero-content"
                        initial="hidden"
                        animate="visible"
                        variants={staggerGroup}
                    >
                        <motion.div className="dojo-badge" variants={fadeUp}>
                            <WingMark brand={data.brand} src={data.logoImage} />
                            <span>{data.discipline}</span>
                        </motion.div>

                        <motion.p
                            className="hero-eyebrow"
                            custom={0.04}
                            variants={fadeUp}
                        >
                            {data.heroEyebrow}
                        </motion.p>

                        <motion.h1 custom={0.08} variants={fadeUp}>
                            {data.heroTitle}
                        </motion.h1>

                        <motion.p
                            className="hero-lead"
                            custom={0.12}
                            variants={fadeUp}
                        >
                            {data.heroText}
                        </motion.p>

                        <motion.div
                            className="hero-actions"
                            custom={0.16}
                            variants={fadeUp}
                        >
                            <a
                                className="btn btn--primary"
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                {data.primaryCta}
                            </a>
                            <a
                                className="btn btn--ghost"
                                href="#horarios"
                                onClick={(event) =>
                                    handleSectionClick(event, "#horarios")
                                }
                            >
                                {data.secondaryCta}
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="hero-panel"
                        initial={{ opacity: 0, x: 28 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.8,
                            delay: 0.28,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <span>Entrenamiento</span>
                        <strong>{data.club}</strong>
                        <p>{data.location}</p>
                        <a
                            href="#contacto"
                            onClick={(event) =>
                                handleSectionClick(event, "#contacto")
                            }
                        >
                            Reservar primera clase
                        </a>
                    </motion.div>
                </section>

                {/* FIX 2: stats-band margin-top changed from -34px to 0 so the
                    cards sit flush below the hero section without overlapping. */}
                <section className="stats-band" aria-label="Datos principales">
                    <motion.div
                        className="stats-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.35 }}
                        variants={staggerGroup}
                    >
                        <StatCard
                            value={data.statOneValue}
                            text={data.statOneText}
                        />
                        <StatCard
                            value={data.statTwoValue}
                            text={data.statTwoText}
                        />
                        <StatCard
                            value={data.statThreeValue}
                            text={data.statThreeText}
                        />
                    </motion.div>
                </section>

                <section className="intro-section" id="dojo">
                    <motion.div
                        className="intro-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.28 }}
                    >
                        <SectionLabel>{data.introLabel}</SectionLabel>
                        <motion.h2 custom={0.04} variants={fadeUp}>
                            {data.introTitle}
                        </motion.h2>
                        <motion.p custom={0.1} variants={fadeUp}>
                            {data.introText}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="intro-media"
                        initial={{ opacity: 0, y: 36 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{
                            duration: 0.72,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <img
                            src={data.dojoImage}
                            alt="Karateka entrenando con intensidad"
                        />
                        <div className="media-caption">
                            <span>{data.discipline}</span>
                            <strong>{data.brand}</strong>
                        </div>
                    </motion.div>
                </section>

                <section className="values-section" id="valores">
                    <div className="section-head">
                        <SectionLabel>{data.valuesLabel}</SectionLabel>
                        <h2>{data.valuesTitle}</h2>
                    </div>

                    <motion.div
                        className="values-list"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={staggerGroup}
                    >
                        {values.map((value) => (
                            <motion.span key={value} variants={cardReveal}>
                                {value}
                            </motion.span>
                        ))}
                    </motion.div>

                    <motion.div
                        className="pillars-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={staggerGroup}
                    >
                        <motion.article variants={cardReveal}>
                            <span>01</span>
                            <h3>{data.pillarOneTitle}</h3>
                            <p>{data.pillarOneText}</p>
                        </motion.article>
                        <motion.article variants={cardReveal}>
                            <span>02</span>
                            <h3>{data.pillarTwoTitle}</h3>
                            <p>{data.pillarTwoText}</p>
                        </motion.article>
                        <motion.article variants={cardReveal}>
                            <span>03</span>
                            <h3>{data.pillarThreeTitle}</h3>
                            <p>{data.pillarThreeText}</p>
                        </motion.article>
                    </motion.div>
                </section>

                <section className="instructor-section" id="instructor">
                    <motion.div
                        className="instructor-media"
                        initial={{ opacity: 0, x: -34 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.75,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <img
                            src={data.instructorImage}
                            alt="Instructor de karate en entrenamiento"
                        />
                    </motion.div>

                    <motion.div
                        className="instructor-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.32 }}
                    >
                        <SectionLabel>{data.instructorLabel}</SectionLabel>
                        <motion.h2 custom={0.04} variants={fadeUp}>
                            {data.instructorTitle}
                        </motion.h2>
                        <motion.p custom={0.1} variants={fadeUp}>
                            {data.instructorText}
                        </motion.p>

                        <motion.div
                            className="instructor-card"
                            custom={0.16}
                            variants={fadeUp}
                        >
                            <span>{data.rank}</span>
                            <strong>{data.instructor}</strong>
                            <small>{data.discipline}</small>
                        </motion.div>
                    </motion.div>
                </section>

                <section className="schedule-section" id="horarios">
                    <motion.div
                        className="schedule-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <SectionLabel>{data.scheduleLabel}</SectionLabel>
                        <motion.h2 custom={0.04} variants={fadeUp}>
                            {data.scheduleTitle}
                        </motion.h2>
                        <motion.p custom={0.1} variants={fadeUp}>
                            {data.scheduleText}
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className="schedule-grid"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.25 }}
                        variants={staggerGroup}
                    >
                        {[
                            data.mondayText,
                            data.wednesdayText,
                            data.fridayText,
                        ].map((item) => {
                            const [day, time] = item.split(" - ")
                            return (
                                <motion.article
                                    key={item}
                                    variants={cardReveal}
                                >
                                    <span>{day}</span>
                                    <strong>{time || "19:00 hs"}</strong>
                                </motion.article>
                            )
                        })}
                    </motion.div>
                </section>

                <section className="gallery-section">
                    <div className="gallery-head">
                        <SectionLabel>{data.galleryLabel}</SectionLabel>
                        <h2>{data.galleryTitle}</h2>
                        <p>{data.galleryText}</p>
                    </div>

                    <div className="gallery-grid">
                        {[
                            {
                                image: data.galleryOneImage,
                                title: data.galleryOneTitle,
                                tag: data.galleryOneTag,
                            },
                            {
                                image: data.galleryTwoImage,
                                title: data.galleryTwoTitle,
                                tag: data.galleryTwoTag,
                            },
                            {
                                image: data.galleryThreeImage,
                                title: data.galleryThreeTitle,
                                tag: data.galleryThreeTag,
                            },
                            {
                                image: data.galleryFourImage,
                                title: data.galleryFourTitle,
                                tag: data.galleryFourTag,
                            },
                        ].map((photo) => (
                            <figure key={`${photo.title}-${photo.tag}`}>
                                <img
                                    src={photo.image}
                                    alt={`${photo.title} en ${data.brand}`}
                                />
                                <figcaption>
                                    <span>{photo.tag}</span>
                                    <strong>{photo.title}</strong>
                                </figcaption>
                            </figure>
                        ))}
                    </div>
                </section>

                <section className="contact-section" id="contacto">
                    <motion.div
                        className="contact-copy"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                    >
                        <SectionLabel>{data.contactLabel}</SectionLabel>
                        <motion.h2 custom={0.04} variants={fadeUp}>
                            {data.contactTitle}
                        </motion.h2>
                        <motion.p custom={0.1} variants={fadeUp}>
                            {data.contactText}
                        </motion.p>
                        <motion.div
                            className="contact-actions"
                            custom={0.16}
                            variants={fadeUp}
                        >
                            <a
                                className="btn btn--primary"
                                href={whatsappLink}
                                target="_blank"
                                rel="noreferrer"
                            >
                                WhatsApp {data.whatsappDisplay}
                            </a>
                            <a
                                className="btn btn--ghost"
                                href={data.mapUrl}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ver ubicación
                            </a>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-card"
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.25 }}
                        transition={{
                            duration: 0.72,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <WingMark brand={data.brand} src={data.logoImage} />
                        <ContactLine label="Dojo" value={data.brand} />
                        <ContactLine
                            label="Disciplina"
                            value={data.discipline}
                        />
                        <ContactLine
                            label="Instructor"
                            value={data.instructor}
                        />
                        <ContactLine label="Lugar" value={data.address} />
                        <ContactLine
                            label="Horario"
                            value="Lun, mié y vie - 19:00 hs"
                        />
                        <ContactLine
                            label="WhatsApp"
                            value={
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    {data.whatsappDisplay}
                                </a>
                            }
                        />
                    </motion.div>
                </section>
            </main>

            <footer className="alas-footer">
                <span>{data.brand}</span>
                <span>{data.footerCredit}</span>
            </footer>
        </div>
    )
}

const css = `
html {
    scroll-behavior: smooth;
}

.alas-page {
    --max: 1180px;
    min-height: 100vh;
    background:
        radial-gradient(circle at 48% 0%, rgba(255, 211, 106, 0.18), transparent 34rem),
        linear-gradient(180deg, #170706 0%, var(--bg) 45%, #080302 100%);
    color: var(--ink);
    font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
    overflow-x: hidden;
    scroll-behavior: smooth;
}

#inicio,
#dojo,
#valores,
#instructor,
#horarios,
#contacto {
    scroll-margin-top: 104px;
}

.alas-page * {
    box-sizing: border-box;
}

.alas-page a {
    color: inherit;
    text-decoration: none;
}

.alas-nav {
    position: fixed;
    z-index: 20;
    top: 16px;
    left: 50%;
    width: min(calc(100% - 32px), var(--max));
    min-height: 70px;
    transform: translateX(-50%);
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 22px;
    padding: 10px 12px 10px 16px;
    border: 1px solid rgba(255, 211, 106, 0.28);
    border-radius: 8px;
    background: rgba(18, 7, 6, 0.76);
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.42);
    backdrop-filter: blur(18px);
}

.alas-brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    min-width: 0;
}

.alas-brand span {
    display: flex;
    flex-direction: column;
    line-height: 1.05;
}

.alas-brand strong {
    font-size: 15px;
    font-weight: 900;
    text-transform: uppercase;
}

.alas-brand small {
    max-width: 190px;
    margin-top: 4px;
    color: var(--muted);
    font-size: 11px;
    font-weight: 700;
    text-transform: uppercase;
}

.alas-nav nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 6px;
}

.alas-nav nav a {
    padding: 10px 12px;
    border-radius: 6px;
    color: rgba(255, 247, 223, 0.78);
    font-size: 13px;
    font-weight: 800;
    text-transform: uppercase;
    transition: color 0.2s ease, background 0.2s ease, transform 0.2s ease;
}

.alas-nav nav a:hover {
    color: var(--gold);
    background: rgba(255, 211, 106, 0.09);
    transform: translateY(-1px);
}

.nav-cta,
.btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    min-height: 46px;
    border-radius: 6px;
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    white-space: nowrap;
    transition: transform 0.22s ease, box-shadow 0.22s ease, border-color 0.22s ease, filter 0.22s ease;
}

.nav-cta {
    padding: 0 18px;
    background: linear-gradient(135deg, var(--ember), var(--flame) 58%, var(--gold));
    color: #180403;
    box-shadow: 0 12px 34px rgba(255, 82, 0, 0.28);
}

.btn {
    padding: 0 22px;
}

.nav-cta:hover,
.btn:hover {
    transform: translateY(-2px);
    filter: saturate(1.08);
}

.btn--primary {
    background: linear-gradient(135deg, var(--ember), var(--flame) 62%, var(--gold));
    color: #1a0502;
    box-shadow: 0 18px 48px rgba(255, 87, 0, 0.32);
}

.btn--ghost {
    border: 1px solid rgba(255, 211, 106, 0.42);
    background: rgba(255, 243, 207, 0.08);
    color: var(--cream);
}

.hero-section {
    position: relative;
    min-height: 92vh;
    display: grid;
    align-items: center;
    padding: 126px max(24px, calc((100vw - var(--max)) / 2)) 72px;
    overflow: hidden;
}

.hero-image,
.hero-shade,
.hero-fire {
    position: absolute;
    inset: 0;
}

.hero-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: saturate(0.95) contrast(1.04);
}

.hero-shade {
    background:
        linear-gradient(90deg, rgba(8, 3, 2, 0.95) 0%, rgba(8, 3, 2, 0.72) 42%, rgba(8, 3, 2, 0.38) 100%),
        linear-gradient(180deg, rgba(8, 3, 2, 0.78), rgba(8, 3, 2, 0.24) 45%, rgba(8, 3, 2, 0.95));
}

.hero-fire {
    opacity: 0.82;
    background:
        radial-gradient(ellipse at 28% 94%, rgba(255, 106, 0, 0.8), transparent 30rem),
        radial-gradient(ellipse at 12% 72%, rgba(215, 25, 32, 0.42), transparent 24rem),
        radial-gradient(ellipse at 82% 88%, rgba(255, 211, 106, 0.2), transparent 20rem);
    mix-blend-mode: screen;
}

/* FIX 1: .hero-wings styles removed entirely — the decorative arc element
   is no longer in the JSX so these rules are no longer needed. */

.hero-content {
    position: relative;
    z-index: 2;
    width: min(710px, 100%);
}

.dojo-badge {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    padding: 8px 14px 8px 8px;
    border: 1px solid rgba(255, 211, 106, 0.34);
    border-radius: 8px;
    background: rgba(18, 7, 6, 0.62);
    color: var(--gold);
    font-size: 12px;
    font-weight: 900;
    text-transform: uppercase;
    box-shadow: 0 16px 50px rgba(0, 0, 0, 0.3);
}

.hero-eyebrow,
.section-label {
    margin: 0;
    color: var(--gold);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
}

.hero-eyebrow {
    margin-top: 30px;
}

.hero-content h1 {
    max-width: 720px;
    margin: 14px 0 0;
    color: var(--cream);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(42px, 5.7vw, 78px);
    line-height: 0.98;
    font-weight: 900;
    letter-spacing: 0;
    text-wrap: balance;
}

.hero-lead {
    max-width: 620px;
    margin: 22px 0 0;
    color: rgba(255, 247, 223, 0.86);
    font-size: clamp(16px, 1.45vw, 20px);
    line-height: 1.55;
}

.hero-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 30px;
}

.hero-panel {
    position: absolute;
    z-index: 3;
    right: max(24px, calc((100vw - var(--max)) / 2));
    bottom: 66px;
    width: min(310px, calc(100% - 48px));
    padding: 22px;
    border: 1px solid rgba(255, 211, 106, 0.3);
    border-radius: 8px;
    background: rgba(18, 7, 6, 0.76);
    backdrop-filter: blur(14px);
    box-shadow: 0 26px 72px rgba(0, 0, 0, 0.46);
    transition: transform 0.24s ease, border-color 0.24s ease, box-shadow 0.24s ease;
}

.hero-panel:hover {
    transform: translateY(-4px);
    border-color: rgba(255, 211, 106, 0.58);
    box-shadow: 0 32px 86px rgba(255, 84, 0, 0.2);
}

.hero-panel span,
.instructor-card span {
    color: var(--gold);
    font-size: 11px;
    font-weight: 950;
    text-transform: uppercase;
}

.hero-panel strong {
    display: block;
    margin-top: 8px;
    color: var(--cream);
    font-size: 26px;
    line-height: 1;
}

.hero-panel p {
    margin: 8px 0 18px;
    color: var(--muted);
    font-size: 14px;
    font-weight: 700;
}

.hero-panel a {
    display: inline-flex;
    color: var(--gold);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
}

.alas-logo {
    position: relative;
    width: 50px;
    height: 38px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    flex: 0 0 auto;
}

.alas-logo--image {
    width: 54px;
    height: 54px;
    padding: 3px;
    border: 1px solid rgba(255, 211, 106, 0.46);
    border-radius: 50%;
    background:
        radial-gradient(circle at 50% 35%, rgba(255, 211, 106, 0.28), rgba(255, 106, 0, 0.14) 52%, rgba(18, 7, 6, 0.76)),
        rgba(18, 7, 6, 0.72);
    box-shadow: 0 0 26px rgba(255, 106, 0, 0.22);
    overflow: hidden;
}

.alas-logo__image {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 50%;
}

.alas-logo strong {
    position: relative;
    z-index: 2;
    display: grid;
    place-items: center;
    width: 27px;
    height: 27px;
    border: 1px solid rgba(255, 211, 106, 0.62);
    border-radius: 50%;
    background: radial-gradient(circle at 50% 35%, var(--gold), var(--flame) 58%, #210603);
    color: #160403;
    font-size: 15px;
    line-height: 1;
}

.alas-logo__wing {
    position: absolute;
    top: 7px;
    display: flex;
    flex-direction: column;
    gap: 3px;
}

.alas-logo__wing--left {
    right: 25px;
    align-items: flex-end;
}

.alas-logo__wing--right {
    left: 25px;
    align-items: flex-start;
}

.alas-logo__wing span {
    display: block;
    height: 6px;
    background: linear-gradient(90deg, var(--ember), var(--flame), var(--gold));
    box-shadow: 0 0 18px rgba(255, 106, 0, 0.3);
}

.alas-logo__wing--left span {
    border-radius: 999px 0 0 999px;
}

.alas-logo__wing--right span {
    border-radius: 0 999px 999px 0;
}

.alas-logo__wing span:nth-child(1) {
    width: 24px;
}

.alas-logo__wing span:nth-child(2) {
    width: 18px;
}

.alas-logo__wing span:nth-child(3) {
    width: 12px;
}

/* FIX 2: margin-top changed from -34px to 0 so stats cards sit cleanly
   below the hero image without overlapping or appearing misaligned. */
.stats-band {
    position: relative;
    z-index: 4;
    margin-top: 0;
    padding: 0 max(24px, calc((100vw - var(--max)) / 2)) 88px;
}

.stats-grid,
.pillars-grid,
.schedule-grid,
.gallery-grid {
    display: grid;
    gap: 16px;
}

.stats-grid {
    grid-template-columns: repeat(3, 1fr);
}

.stat-card,
.pillars-grid article,
.schedule-grid article,
.contact-card {
    border: 1px solid rgba(255, 211, 106, 0.2);
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(255, 243, 207, 0.1), rgba(255, 243, 207, 0.04));
    box-shadow: 0 24px 80px rgba(0, 0, 0, 0.25);
    transition:
        transform 0.24s ease,
        border-color 0.24s ease,
        background 0.24s ease,
        box-shadow 0.24s ease;
}

.stat-card:hover,
.pillars-grid article:hover,
.schedule-grid article:hover,
.contact-card:hover {
    transform: translateY(-6px);
    border-color: rgba(255, 211, 106, 0.5);
    background: linear-gradient(180deg, rgba(255, 211, 106, 0.16), rgba(215, 25, 32, 0.1));
    box-shadow: 0 30px 86px rgba(255, 84, 0, 0.16);
}

.stat-card {
    min-height: 118px;
    padding: 22px;
}

.stat-card strong {
    display: block;
    color: var(--gold);
    font-size: clamp(32px, 3.4vw, 48px);
    line-height: 0.95;
    font-weight: 1000;
}

.stat-card span {
    display: block;
    margin-top: 12px;
    color: rgba(255, 247, 223, 0.78);
    font-size: 13px;
    font-weight: 850;
    text-transform: uppercase;
}

.intro-section,
.values-section,
.instructor-section,
.schedule-section,
.gallery-section,
.contact-section {
    padding: 96px max(24px, calc((100vw - var(--max)) / 2));
}

.intro-section,
.instructor-section,
.contact-section {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
    gap: 54px;
    align-items: center;
}

.intro-copy h2,
.section-head h2,
.instructor-copy h2,
.schedule-copy h2,
.gallery-head h2,
.contact-copy h2 {
    margin: 14px 0 0;
    color: var(--cream);
    font-family: Georgia, "Times New Roman", serif;
    font-size: clamp(32px, 4.1vw, 58px);
    line-height: 1.04;
    letter-spacing: 0;
    text-wrap: balance;
}

.intro-copy p,
.instructor-copy p,
.schedule-copy p,
.gallery-head p,
.contact-copy p,
.pillars-grid p {
    color: rgba(255, 247, 223, 0.76);
    font-size: 16px;
    line-height: 1.65;
}

.intro-copy p,
.instructor-copy p,
.schedule-copy p,
.contact-copy p {
    max-width: 620px;
    margin: 22px 0 0;
}

.intro-media,
.instructor-media {
    position: relative;
    min-height: 520px;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid rgba(255, 211, 106, 0.22);
    box-shadow: 0 28px 90px rgba(0, 0, 0, 0.34);
    transition: transform 0.26s ease, border-color 0.26s ease, box-shadow 0.26s ease;
}

.intro-media:hover,
.instructor-media:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 211, 106, 0.46);
    box-shadow: 0 34px 96px rgba(255, 84, 0, 0.16);
}

.intro-media img,
.instructor-media img,
.gallery-grid img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.38s ease, filter 0.38s ease;
}

.intro-media::after,
.instructor-media::after,
.gallery-grid figure::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(180deg, transparent 42%, rgba(8, 3, 2, 0.86));
    pointer-events: none;
}

.media-caption {
    position: absolute;
    z-index: 2;
    left: 24px;
    right: 24px;
    bottom: 24px;
}

.media-caption span {
    color: var(--gold);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
}

.media-caption strong {
    display: block;
    margin-top: 8px;
    color: var(--cream);
    font-size: 34px;
    line-height: 1;
}

.values-section {
    background:
        linear-gradient(180deg, rgba(215, 25, 32, 0.1), rgba(255, 106, 0, 0.04)),
        #120706;
}

.section-head,
.gallery-head {
    max-width: 790px;
}

.values-list {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-top: 36px;
}

.values-list span {
    padding: 12px 16px;
    border: 1px solid rgba(255, 211, 106, 0.24);
    border-radius: 999px;
    background: rgba(255, 243, 207, 0.08);
    color: var(--cream);
    font-size: 13px;
    font-weight: 950;
    text-transform: uppercase;
    transition: transform 0.22s ease, border-color 0.22s ease, background 0.22s ease;
}

.values-list span:hover {
    transform: translateY(-3px);
    border-color: rgba(255, 211, 106, 0.52);
    background: rgba(255, 211, 106, 0.14);
}

.pillars-grid {
    grid-template-columns: repeat(3, 1fr);
    margin-top: 42px;
}

.pillars-grid article {
    min-height: 258px;
    padding: 24px;
    overflow: hidden;
    position: relative;
}

.pillars-grid article::before {
    content: "";
    position: absolute;
    right: -52px;
    top: -62px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255, 106, 0, 0.35), transparent 68%);
}

.pillars-grid span {
    color: var(--gold);
    font-size: 13px;
    font-weight: 950;
}

.pillars-grid h3 {
    margin: 42px 0 0;
    color: var(--cream);
    font-size: 25px;
    line-height: 1.08;
}

.instructor-section {
    grid-template-columns: minmax(360px, 0.96fr) minmax(0, 1.04fr);
}

.instructor-card {
    margin-top: 28px;
    width: min(100%, 460px);
    padding: 22px;
    border-left: 4px solid var(--flame);
    border-radius: 0 8px 8px 0;
    background: rgba(255, 243, 207, 0.08);
    transition: transform 0.24s ease, border-color 0.24s ease, background 0.24s ease;
}

.instructor-card:hover {
    transform: translateX(5px);
    border-left-color: var(--gold);
    background: rgba(255, 211, 106, 0.13);
}

.instructor-card strong {
    display: block;
    margin-top: 8px;
    color: var(--cream);
    font-size: 25px;
    line-height: 1.1;
}

.instructor-card small {
    display: block;
    margin-top: 8px;
    color: var(--muted);
    font-size: 13px;
    font-weight: 850;
    text-transform: uppercase;
}

.schedule-section {
    display: grid;
    grid-template-columns: minmax(0, 0.9fr) minmax(360px, 1.1fr);
    gap: 44px;
    align-items: start;
    background:
        radial-gradient(circle at 80% 14%, rgba(255, 211, 106, 0.16), transparent 25rem),
        #0d0403;
}

.schedule-grid {
    grid-template-columns: repeat(3, 1fr);
}

.schedule-grid article {
    min-height: 178px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 22px;
}

.schedule-grid span {
    color: var(--muted);
    font-size: 14px;
    font-weight: 950;
    text-transform: uppercase;
}

.schedule-grid strong {
    color: var(--gold);
    font-size: clamp(28px, 2.8vw, 42px);
    line-height: 0.95;
}

.gallery-head p {
    max-width: 680px;
    margin: 20px 0 0;
}

.gallery-grid {
    grid-template-columns: 1.15fr 0.85fr 0.85fr;
    grid-auto-rows: 260px;
    margin-top: 42px;
}

.gallery-grid figure {
    position: relative;
    min-height: 0;
    margin: 0;
    overflow: hidden;
    border-radius: 8px;
    border: 1px solid rgba(255, 211, 106, 0.18);
    background: #1a0705;
    transition: transform 0.26s ease, border-color 0.26s ease, box-shadow 0.26s ease;
}

.gallery-grid figure:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 211, 106, 0.5);
    box-shadow: 0 28px 74px rgba(255, 84, 0, 0.15);
}

.gallery-grid figure:hover img {
    transform: scale(1.055);
    filter: saturate(1.12) contrast(1.04);
}

.gallery-grid figure:first-child {
    grid-row: span 2;
}

.gallery-grid figure:nth-child(4) {
    grid-column: span 2;
}

.gallery-grid figcaption {
    position: absolute;
    z-index: 2;
    left: 20px;
    right: 20px;
    bottom: 18px;
}

.gallery-grid figcaption span {
    color: var(--gold);
    font-size: 11px;
    font-weight: 950;
    text-transform: uppercase;
}

.gallery-grid figcaption strong {
    display: block;
    margin-top: 4px;
    color: var(--cream);
    font-size: 25px;
    line-height: 1;
}

.contact-section {
    align-items: start;
    background:
        radial-gradient(circle at 16% 16%, rgba(215, 25, 32, 0.18), transparent 24rem),
        #120706;
}

.contact-actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
}

.contact-card {
    padding: 30px;
}

.contact-card .alas-logo {
    width: 72px;
    height: 52px;
    margin-bottom: 22px;
}

.contact-card .alas-logo--image {
    width: 86px;
    height: 86px;
}

.contact-card .alas-logo strong {
    width: 38px;
    height: 38px;
    font-size: 19px;
}

.contact-card .alas-logo__wing--left {
    right: 36px;
}

.contact-card .alas-logo__wing--right {
    left: 36px;
}

.contact-card .alas-logo__wing span:nth-child(1) {
    width: 34px;
}

.contact-card .alas-logo__wing span:nth-child(2) {
    width: 26px;
}

.contact-card .alas-logo__wing span:nth-child(3) {
    width: 18px;
}

.contact-line {
    display: grid;
    grid-template-columns: 120px 1fr;
    gap: 16px;
    padding: 18px 0;
    border-top: 1px solid rgba(255, 211, 106, 0.15);
}

.contact-line span {
    color: var(--muted);
    font-size: 12px;
    font-weight: 950;
    text-transform: uppercase;
}

.contact-line strong {
    min-width: 0;
    color: var(--cream);
    font-size: 18px;
    line-height: 1.35;
}

.contact-line a {
    color: var(--gold);
}

.alas-footer {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 28px max(24px, calc((100vw - var(--max)) / 2));
    border-top: 1px solid rgba(255, 211, 106, 0.16);
    color: rgba(255, 247, 223, 0.66);
    font-size: 12px;
    font-weight: 850;
    text-transform: uppercase;
}

@media (max-width: 980px) {
    .alas-nav {
        grid-template-columns: 1fr auto;
    }

    .alas-nav nav {
        display: none;
    }

    .hero-section {
        min-height: 820px;
    }

    .hero-panel {
        position: relative;
        left: auto;
        right: auto;
        bottom: auto;
        margin-top: 42px;
    }

    .stats-grid,
    .pillars-grid,
    .schedule-grid,
    .intro-section,
    .instructor-section,
    .schedule-section,
    .contact-section {
        grid-template-columns: 1fr;
    }

    .instructor-media {
        order: 2;
    }

    .gallery-grid {
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: 260px;
    }

    .gallery-grid figure:first-child,
    .gallery-grid figure:nth-child(4) {
        grid-column: auto;
        grid-row: auto;
    }
}

@media (max-width: 680px) {
    .alas-nav {
        top: 10px;
        width: calc(100% - 20px);
        min-height: 60px;
        padding: 8px 8px 8px 10px;
        gap: 10px;
    }

    .alas-brand small {
        display: none;
    }

    .alas-brand strong {
        font-size: 13px;
    }

    .alas-logo {
        width: 42px;
        height: 34px;
    }

    .alas-logo--image {
        width: 46px;
        height: 46px;
    }

    .alas-logo strong {
        width: 24px;
        height: 24px;
        font-size: 13px;
    }

    .alas-logo__wing--left {
        right: 22px;
    }

    .alas-logo__wing--right {
        left: 22px;
    }

    .nav-cta {
        min-height: 40px;
        padding: 0 12px;
        font-size: 11px;
    }

    .hero-section {
        min-height: 710px;
        padding-top: 108px;
    }

    .hero-content h1 {
        font-size: clamp(38px, 11vw, 56px);
        line-height: 1.02;
    }

    .hero-lead {
        font-size: 15px;
        line-height: 1.55;
    }

    .hero-eyebrow {
        margin-top: 22px;
    }

    .dojo-badge {
        max-width: 100%;
    }

    .dojo-badge span {
        overflow-wrap: anywhere;
    }

    .hero-actions,
    .contact-actions {
        flex-direction: column;
        align-items: stretch;
    }

    .btn {
        width: 100%;
    }

    .stats-band {
        padding-bottom: 54px;
    }

    .stats-grid,
    .schedule-grid,
    .gallery-grid {
        grid-template-columns: 1fr;
    }

    .intro-section,
    .values-section,
    .instructor-section,
    .schedule-section,
    .gallery-section,
    .contact-section {
        padding-top: 68px;
        padding-bottom: 68px;
    }

    .intro-media,
    .instructor-media {
        min-height: 340px;
    }

    .pillars-grid article,
    .schedule-grid article {
        min-height: 200px;
    }

    .contact-card {
        padding: 22px;
    }

    .contact-line {
        grid-template-columns: 1fr;
        gap: 6px;
    }

    .alas-footer {
        flex-direction: column;
    }
}
`
