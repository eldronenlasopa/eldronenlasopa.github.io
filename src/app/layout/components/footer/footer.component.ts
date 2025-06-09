import { CommonModule } from '@angular/common';
import {Component, Input, OnInit} from '@angular/core';
import { ScrollTopComponent } from "../scroll-top/scroll-top.component";
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule, UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MensajesService } from '../../../core/services/messages.service';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss'],
    standalone: true,
    imports: [
        CommonModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        ScrollTopComponent,
    ]
})
export class FooterComponent implements OnInit {
    @Input() menuData: any;

    suscripcionForm: UntypedFormGroup | any;

    constructor(
        private _formBuilder: UntypedFormBuilder,
        private mensajesService: MensajesService,
    ) {}

    ngOnInit(): void {
        this.suscripcionForm = this._formBuilder.group({
            email: ['', [Validators.required, Validators.email]]
        });
    }

    notificar() : void{
        debugger;
        if (this.suscripcionForm.valid) {
            this.mensajesService.msgConfirm("¿Está seguro de enviar por correo electrónico el link para que el usuario seleccionado genere su contraseña?", () => {
                this.mensajesService.msgLoad("Procesando...");

                this.mensajesService.msgSuccessMixin('Se envió el link para generar contraseña a la dirección de correo electrónico del usuario seleccionado.', "");
            },null);
        }
    }

    get Email(): any { return this.suscripcionForm.get('email'); }
    get menuItems() {
      if (this.menuData) {
          return this.menuData.data.navigation_menu[0].menu_items;
      }
      return [];
  }
}
