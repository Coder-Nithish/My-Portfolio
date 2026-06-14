import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Globe, ServerCog, Cog } from 'lucide-react';

const services = [
  {
    title: "Full-Stack Web Development",
    icon: Globe,
    description: "Building responsive, highly interactive, and scalable web applications using React.js, Node.js, and modern cloud technologies. Perfect for dashboards and enterprise tools."
  },
  {
    title: "Backend Architecture",
    icon: ServerCog,
    description: "Designing robust, high-throughput backend services, RESTful APIs, and custom brokers in Golang or Node.js. Focused on low latency and optimal concurrency."
  },
  {
    title: "Industrial IoT & MES",
    icon: Cog,
    description: "Connecting the shop floor to the top floor. Expertise in MQTT, OPC UA, AVEVA System Platform, and building bidirectional ERP-to-MES data pipelines."
  }
];

const ServicesSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="services" ref={ref} style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="section-title">Freelance Services</h2>
        <div className="grid-auto-fit-small">
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="cosmic-wrapper"
              >
                <div className="cosmic-inner" style={{ padding: '3rem 2.5rem', textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '2rem', boxShadow: 'inset 0 0 20px var(--primary-glow)' }}>
                    <Icon size={40} strokeWidth={1.5} />
                  </div>
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 700 }}>{service.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '1.05rem' }}>
                    {service.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
