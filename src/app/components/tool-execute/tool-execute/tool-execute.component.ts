import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-tool-execute',
  templateUrl: './tool-execute.component.html',
  styleUrl: './tool-execute.component.scss'
})
export class ToolExecuteComponent {

  @Output() reminderClicked = new EventEmitter<void>();
  @Output()collaboratorClicked = new EventEmitter<void>();
  @Output() colorClicked =new EventEmitter<void>();
  @Output() imageClicked =new EventEmitter<void>();
  @Output() archiveClicked =new EventEmitter<void>();
  @Output() moreClicked =new EventEmitter<void>();

}
