import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Code2, Server, Workflow, Cpu } from 'lucide-react';

const stats = [
  { id: 1, number: 1, suffix: '+', title: 'Years Experience', icon: Code2 },
  { id: 2, number: 10, suffix: '+', title: 'Enterprise Projects', icon: Server },
  { id: 3, number: 100, suffix: 'K+', title: 'MQTT Msg/sec', icon: Cpu },
  { id: 4, number: 5, suffix: '+', title: 'MES Integrations', icon: Workflow },
];

const AnimatedCounter = ({ end, inView }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      let start = 0;
      const duration = 2000;
      const interval = 30;
      const step = (end / duration) * interval;
      
      const timer = setInterval(() => {
        start += step;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, interval);
      
      return () => clearInterval(timer);
    }
  }, [end, inView]);

  return <span>{count}</span>;
};

const StatisticsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section ref={ref} style={{ padding: '4rem 0', marginTop: '-4rem', position: 'relative', zIndex: 20 }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card"
                style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '2rem', backgroundColor: 'var(--bg-card)' }}
              >
                <div style={{ width: '60px', height: '60px', borderRadius: '1rem', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                  <IconComponent size={30} strokeWidth={1.5} />
                </div>
                <div>
                  <h3 style={{ fontSize: '2.5rem', color: 'var(--text-main)', lineHeight: 1, fontWeight: 800 }}>
                    <AnimatedCounter end={stat.number} inView={inView} />
                    <span style={{ color: 'var(--primary)' }}>{stat.suffix}</span>
                  </h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '0.5rem', fontWeight: 600 }}>
                    {stat.title}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatisticsSection;
