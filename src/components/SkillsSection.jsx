import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Server, Workflow, Code2, Database, Factory } from 'lucide-react';

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Code2,
    skills: ["React.js", "ReactFlow", "HTML5/CSS3", "JavaScript", "TypeScript", "Tailwind CSS"]
  },
  {
    title: "Backend & Systems",
    icon: Server,
    skills: ["Go", "Node.js (JS/TS)", "Python", "Java", "C#", ".NET"]
  },
  {
    title: "Industrial & AVEVA",
    icon: Factory,
    skills: ["AVEVA MES", "WorkTask", "System Platform", "Historian", "Connect", "Enterprise Integration", "OMI ViewApps"]
  },
  {
    title: "Protocols & IoT",
    icon: Workflow,
    skills: ["MQTT (QoS 0/1)", "OPC UA", "NATS JetStream", "TCP/IP", "REST APIs", "RabbitMQ"]
  },
  {
    title: "Databases",
    icon: Database,
    skills: ["Microsoft SQL Server", "MySQL", "PostgreSQL"]
  }
];

const SkillsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="skills" ref={ref}>
      <div className="container">
        <h2 className="section-title">Technical Expertise</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {skillCategories.map((category, idx) => {
            const Icon = category.icon;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="cosmic-wrapper" 
              >
                <div className="cosmic-inner" style={{ padding: '2.5rem' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '1.2rem', marginBottom: '2rem', borderBottom: '1px solid var(--glass-border)', paddingBottom: '1rem' }}>
                    <div style={{ width: '45px', height: '45px', borderRadius: '0.75rem', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      <Icon size={24} />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', color: 'var(--text-main)', fontWeight: 700 }}>
                      {category.title}
                    </h3>
                  </div>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                    {category.skills.map((skill, sIdx) => (
                      <span key={sIdx} style={{ padding: '0.6rem 1.2rem', background: 'var(--bg-element)', color: 'var(--text-main)', borderRadius: '0.5rem', fontSize: '0.9rem', fontWeight: 600, border: '1px solid var(--glass-border)', transition: 'all 0.3s ease', cursor: 'default' }} className="skill-badge">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <style>{`
        .skill-badge:hover { background: var(--primary) !important; color: white !important; border-color: var(--primary) !important; transform: translateY(-3px); box-shadow: 0 4px 15px var(--primary-glow); }
      `}</style>
    </section>
  );
};

export default SkillsSection;
