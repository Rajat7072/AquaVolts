import { motion } from 'framer-motion';
import { useParallax } from '../hooks/useParallax';
import { ParticleField } from './ParticleField';

export function HeroBottle({ reducedMotion = false }) {
  const parallax = useParallax(1.2, reducedMotion);

  return (
    <motion.div
      className="hero-bottle-scene"
      initial={reducedMotion ? false : { opacity: 0, scale: 0.96, rotate: -6 }}
      animate={{
        opacity: 1,
        scale: 1,
        rotate: parallax.x * 0.35,
        x: parallax.x * 1.2,
        y: parallax.y * 1.1,
        transition: { duration: 2.2, ease: [0.22, 1, 0.36, 1] },
      }}
      whileHover={reducedMotion ? undefined : { rotate: 3, scale: 1.02 }}
    >
      <div className="water-glow" />
      <div className="bottle-shadow" />
      <div className="bottle-shell" style={{ transform: `translate3d(${parallax.x * 0.6}px, ${parallax.y * 0.6}px, 0)` }}>
        <div className="bottle-cap" />
        <div className="bottle-neck" />
        <div className="bottle-body">
          <div className="bottle-highlight" />
          <div className="bottle-rim" />
          <div className="water-surface">
            <div className="water-fill" />
            <div className="water-wave water-wave-one" />
            <div className="water-wave water-wave-two" />
          </div>
          <ParticleField reducedMotion={reducedMotion} count={18} />
        </div>
      </div>
      <div className="caustic caustic-one" />
      <div className="caustic caustic-two" />
    </motion.div>
  );
}
