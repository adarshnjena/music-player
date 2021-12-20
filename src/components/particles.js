import React from "react";
import Particles from "react-tsparticles";
import "../style/particlestyle.scss";

//
//rise-lines
export default function ParticlesApp() {
    return (
        <Particles
            options={{
                backgroundMode: {
                    enable: true,
                    zIndex: 0
                },
                background: {
                    color: "#ffffff"
                },
                fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                        onClick: { enable: true, mode: "repulse" },
                        onHover: {
                            enable: true,
                            mode: "bubble",
                            parallax: { enable: false, force: 2, smooth: 10 }
                        },
                        resize: true
                    },
                    modes: {
                        bubble: {
                            distance: 400,
                            duration: 0.3,
                            opacity: 1,
                            size: 4,
                            speed: 3
                        },
                        grab: { distance: 400, line_linked: { opacity: 0.5 } },
                        push: { particles_nb: 4 },
                        remove: { particles_nb: 2 },
                        repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#ffef9f" },
                    links: {
                        color: "#ffef9f",
                        distance: 500,
                        enable: false,
                        opacity: 0.4,
                        width: 2
                    },
                    move: {
                        attract: { enable: false, rotateX: 600, rotateY: 1200 },
                        direction: "bottom",
                        enable: true,
                        outMode: "out",
                        random: false,
                        size: true,
                        speed: 4,
                        straight: false
                    },
                    number: { density: { enable: true, area: 800 }, value: 400 },
                    opacity: {
                        random: true,
                        value: 0.5
                    },
                    shape: {
                        type: "circle"
                    },
                    size: {
                        random: true,
                        value: 10
                    }
                },
                detectRetina: true
            }}
            className="index" />)
}