import { Component, Input } from '@angular/core'

@Component({
  selector: 'modal',
  templateUrl: './modal.component.html'
})
export class Modal {
  openModal: boolean
  @Input() confirmLogic: () => void
  @Input() switchState: () => void
  @Input() modalMessage: string = 'Default modal message'
  @Input() confirmationMessage: string = 'Default confirmation message'
  @Input() isOpen: boolean

  confirmModal(confirmation?: string) {
    switch (confirmation) {
      case 'yes':
        this.confirmLogic()
        document.body.classList.remove('overflow-hidden')
        return
      case 'no':
        this.switchState()
        return
    }
  }
}
