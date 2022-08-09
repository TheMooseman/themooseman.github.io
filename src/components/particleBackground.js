import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticleBackground = () => {
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
    };

    return (
        <div className='particleWrapper' >
            <Particles
          id="tsparticles"
          init={particlesInit}
              options={{
            background: {
              color: '#252525',
            },
            fpsLimit: 40,
            interactivity: {
              detectsOn: 'window',
              events: {
                resize: true,
                onHover: {
                    enable: true,
                    mode: 'IParallax',
                }
              },
            },
            particles: {
              color: {
                value: "#f1f1f1"
              },
              number: {
                density: {
                  enable: true,
                  area: 1080
                },
                limit: 0,
                value: 500,
              },
              opacity: {
                animation: {
                  enable: true,
                  minimumValue: 0.5,
                  speed: 1,
                  sync: false,
                },
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              shape: {
                type: 'circle',
       
              },
              size: {
                random: {
                  enable: true,
                  minimumValue: 0.5
                },
                value: 1
              }
            }
          }}
      />  
        </div>
    )
};

export default ParticleBackground;