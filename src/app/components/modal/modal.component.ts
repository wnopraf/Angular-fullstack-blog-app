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
    console.log('confirmation', confirmation, this.openModal)

    if (confirmation) {
      switch (confirmation) {
        case 'yes':
          this.confirmLogic()
          document.body.style.overflow = 'visible'

          return
        case 'no':
          console.log('no clause')

          this.switchState()
          document.body.style.overflow = 'visible'

          return
      }
    } else {
      this.switchState()
      document.body.style.overflow = 'hidden'
    }
  }
}
