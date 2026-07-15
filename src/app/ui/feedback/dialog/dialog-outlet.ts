import { Component, inject } from '@angular/core';
import { Dialog } from './dialog';
import { DialogService } from '../../../core/services/dialog.service';

/** Renderiza el diálogo activo de DialogService. Montar una sola vez en app root. */
@Component({
  selector: 'app-dialog-outlet',
  imports: [Dialog],
  templateUrl: './dialog-outlet.html',
})
export class DialogOutlet {
  protected readonly dialogService = inject(DialogService);
}
