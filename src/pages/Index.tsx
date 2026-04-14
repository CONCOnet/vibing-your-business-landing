import { motion } from "framer-motion";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 text-center relative">
        <div className="absolute inset-0 opacity-20" style={{
          background: "radial-gradient(circle at 30% 40%, hsl(270 60% 70% / 0.4), transparent 50%), radial-gradient(circle at 70% 60%, hsl(48 95% 65% / 0.3), transparent 50%)"
        }} />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-3xl"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{
            background: "var(--gradient-hero)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}>
            VibingYourBusiness
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 leading-relaxed">
            Creiamo il tuo sito vetrina con le giuste vibrazioni. 🚀
            <br />
            Veloce, bello e senza stress!
          </p>
          <motion.a
            href="tel:+390000000000"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block px-10 py-4 rounded-full bg-secondary text-secondary-foreground font-bold text-lg shadow-lg transition-shadow hover:shadow-xl"
            style={{ boxShadow: "0 0 30px hsl(48 95% 65% / 0.4)" }}
          >
            Chiama Ora 📞
          </motion.a>
        </motion.div>
      </section>

      {/* Chi Siamo */}
      <section className="py-20 px-6 flex justify-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="max-w-2xl bg-card rounded-3xl p-8 md:p-12 text-center"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
            Chi Siamo ✌️
          </h2>
          <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
            Siamo due amici appassionati di tecnologia che usano il potere del{" "}
            <span className="text-secondary font-semibold">vibe coding</span> e dell'
            <span className="text-primary font-semibold">Intelligenza Artificiale</span>{" "}
            per portare la tua attività online in tempo record. Zero mal di testa, 100% buone vibrazioni. 😎
            <br /><br />
            Pensiamo a tutto noi!
          </p>
        </motion.div>
      </section>

      {/* Footer / Contatti */}
      <footer className="py-16 px-6 border-t border-border">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <h2 className="text-3xl font-bold text-primary">Contatti 📬</h2>
          <div className="flex flex-col md:flex-row gap-6 justify-center text-muted-foreground text-base">
            <a href="mailto:ciao@vibingyourbusiness.it" className="hover:text-primary transition-colors">
              ✉️ ciao@vibingyourbusiness.it
            </a>
            <a href="tel:+390000000000" className="hover:text-secondary transition-colors">
              📞 +39 000 000 0000
            </a>
          </div>

          <div className="rounded-3xl overflow-hidden mx-auto max-w-3xl" style={{ boxShadow: "var(--shadow-card)" }}>
            <iframe
              title="Mappa Bra"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d22745.77284178!2d7.833!3d44.698!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12d2b3c0b4c8b8e7%3A0x4081090a28e2e20!2sBra%2C%20CN!5e0!3m2!1sit!2sit!4v1700000000000"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>

          <p className="text-sm text-muted-foreground pt-4">
            © 2026 VibingYourBusiness. Fatto con buone vibrazioni a Bra. 💜
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
