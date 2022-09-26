import { Injectable } from '@angular/core';
import { NzMessageDataOptions, NzMessageService } from 'ng-zorro-antd/message';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messageConfig: NzMessageDataOptions = {
    nzDuration: 3000,
    nzPauseOnHover: true,
  };
  constructor(private messServ: NzMessageService) {}

  public success(
    message: string,
    option: NzMessageDataOptions = this.messageConfig
  ) {
    this.messServ.success(message, option);
  }

  public error(
    message: string,
    option: NzMessageDataOptions = this.messageConfig
  ) {
    this.messServ.error(message, option);
  }

  public info(
    message: string,
    option: NzMessageDataOptions = this.messageConfig
  ) {
    this.messServ.info(message, option);
  }
}
