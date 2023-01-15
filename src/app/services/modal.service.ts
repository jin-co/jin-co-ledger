import { Injectable } from '@angular/core';
import { Modal } from '../models/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  modals: Modal[] = [];
  constructor() {}

  registerModal(id: string) {
    const newModal: Modal = {
      modalId: id,
      isOpen: false,
    };
    this.modals.push(newModal);
  }

  toggleModal(id: string) {
    const selectedModal = this.modals.find((m) => m.modalId === id);
    if (selectedModal) {
      selectedModal.isOpen = !selectedModal?.isOpen;
    }
  }

  getIsOpen(id: string) {
    return this.modals.find((m) => m.modalId === id)?.isOpen;
  }
}
