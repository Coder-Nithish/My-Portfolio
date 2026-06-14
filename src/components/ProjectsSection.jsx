import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { projectsData } from '../data';
import { GitBranch, ExternalLink, Server, Code, Layers } from 'lucide-react';

const ProjectsSection = () => {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true });

  const getIcon = (title) => {
    if (title.includes('MQTT') || title.includes('Backend')) return <Server size={24} />;
    if (title.includes('Integration') || title.includes('Architecture')) return <Layers size={24} />;
    return <Code size={24} />;
  };

  return (
    <section id="projects" ref={ref} style={{ backgroundColor: 'transparent', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '3rem' }}>
          {projectsData.map((project, idx) => (
            <motion.div 
              key={idx} 
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="cosmic-wrapper project-card" style={{ height: '100%' }}>
                <div className="cosmic-inner" style={{ padding: '3rem 2.5rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
                  
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '0.75rem', background: 'var(--bg-element)', border: '1px solid var(--glass-border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)' }}>
                      {getIcon(project.title)}
                    </div>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <a href="#" className="icon-link" aria-label="Github Repo"><GitBranch size={22} /></a>
                      <a href="#" className="icon-link" aria-label="Live Demo"><ExternalLink size={22} /></a>
                    </div>
                  </div>
                  
                  <h3 style={{ fontSize: '1.6rem', color: 'var(--text-main)', marginBottom: '1rem', fontWeight: 700, lineHeight: 1.3 }}>{project.title}</h3>
                  
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '2rem', flexGrow: 1, fontSize: '1.05rem' }}>
                    {project.description}
                  </p>
                  
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', marginTop: 'auto' }}>
                    {project.tech.split(', ').map((tech, tIdx) => (
                      <span key={tIdx} style={{ padding: '0.4rem 1rem', background: 'var(--primary-glow)', color: 'var(--text-main)', borderRadius: '2rem', fontSize: '0.8rem', fontWeight: 600, border: '1px solid var(--primary)' }}>
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style>{`
        .icon-link { color: var(--text-muted); transition: all 0.3s ease; display: flex; align-items: center; justify-content: center; width: 40px; height: 40px; border-radius: 50%; background: var(--bg-element); border: 1px solid var(--glass-border); }
        .icon-link:hover { color: white; background: var(--primary); border-color: var(--primary); transform: translateY(-3px); box-shadow: 0 5px 15px var(--primary-glow); }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
