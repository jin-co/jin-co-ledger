import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit, OnDestroy {
  @Input() modalId:string = ''
  constructor(public modalService: ModalService) {}  

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.modalService.unRegisterModal(this.modalId)
  }
}
