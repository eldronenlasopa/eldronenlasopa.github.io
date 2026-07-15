import { Component } from '@angular/core';

const PHONE = '51993908435';
const MESSAGE = 'Hola DronLab 👋, vengo desde su web y quisiera más información sobre sus servicios.';

/** Floating WhatsApp button. Opens a chat to the DronLab number with a prefilled message. */
@Component({
  selector: 'app-whatsapp-fab',
  templateUrl: './whatsapp-fab.html',
})
export class WhatsAppFab {
  readonly href = `https://wa.me/${PHONE}?text=${encodeURIComponent(MESSAGE)}`;
}
