import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxParticlesModule } from "@tsparticles/angular";
import { loadSlim } from "@tsparticles/slim";
import { Engine, MoveDirection, OutMode } from "@tsparticles/engine";

@Component({
  selector: 'app-layout',
  imports: [NgxParticlesModule, RouterModule],
  templateUrl: './layout.html',
  styleUrl: './layout.scss',
})
export class Layout {
  id = "tsparticles";

  particlesOptions = {
    background: {
      color: {
        value: "transparent",
      },
    },
    fpsLimit: 120,
    interactivity: {
      events: {
        onClick: {
          enable: false,
        },
        onHover: {
          enable: false,
        },
        resize: { enable: false },
      },
      modes: {
        push: {
          quantity: 10,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    particles: {
      color: {
        value: "#8695baff",
      },
      links: {
        color: "#8695baff",
        distance: 150,
        enable: false,
        opacity: 0.5,
        width: 1,
      },
      move: {
        direction: MoveDirection.none,
        enable: true,
        outModes: {
          default: OutMode.bounce,
        },
        random: false,
        speed: 1,
        straight: false,
      },
      number: {
        density: {
          enable: true,
          area: 800,
        },
        value: 80,
      },
      opacity: {
        value: 0.5,
      },
      shape: {
        type: "circle",
      },
      size: {
        value: { min: 1, max: 5 },
      },
    },
    detectRetina: true,
  };

  async particlesInit(engine: Engine): Promise<void> {
    await loadSlim(engine);
  }
}
