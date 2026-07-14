import { Component } from '@angular/core';
import { Button } from '../../../ui/actions/button/button';

const STACK = ['React', 'Node.js', 'Python', 'PostgreSQL', 'n8n', 'AWS'];

@Component({
  selector: 'app-hero-section',
  imports: [Button],
  templateUrl: './hero-section.html',
})
export class HeroSection {
  readonly stack = STACK;
}
