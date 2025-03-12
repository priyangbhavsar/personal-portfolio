import { Component, OnDestroy, OnInit } from '@angular/core';
import { Engine, Render, World, Bodies, Runner } from 'matter-js';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    this.initializePhysics();
  }

  private engine!: Engine;
  private render!: any;

  ngOnDestroy(): void {
    if (this.render) {
      this.render.canvas.remove();
      this.render.canvas = null;
      this.render.context = null;
      this.render.textures = {};
    }
  }

  private initializePhysics(): void {
    // Create an engine
    this.engine = Engine.create();

    // Create a renderer
    this.render = Render.create({
      element: document.querySelector('#simulation-container') as HTMLElement,
      engine: this.engine,
      options: {
        width: 600 ,
        height: 300,
        wireframes: false
      }
    });

    // Create some bodies
    const ground = Bodies.rectangle(200, 290, 810, 60, { isStatic: true });
    const boxA = Bodies.rectangle(200, 100, 80, 80
      , {
        angularSpeed: 100
      }
    );
    const boxB = Bodies.rectangle(250, 50, 80, 80, {

      angularSpeed: 100
    });

    // Add bodies to the world
    World.add(this.engine.world, [ground, boxA, boxB,
      Bodies.circle(100, 50, 50, {
        angularSpeed: 100})
    ]);
    // Run the engine and renderer
    // Engine.run(this.engine);

    const runner = Runner.create();
    Runner.run(runner, this.engine);
    Render.run(this.render);
    World.add(this.engine.world, [ground, boxA, boxB,
      Bodies.circle(100, 50, 50),
    ]);
  }
}
