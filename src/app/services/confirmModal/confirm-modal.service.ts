import { Injectable, Type } from '@angular/core';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Observable, Subscriber } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ConfirmModalService {
  constructor(private modal: NzModalService) {}

  private onOk = (observer: Subscriber<boolean>) => () => {
    observer.next(true);
    observer.complete();
  };
  private onCancel = (observer: Subscriber<boolean>) => () => {
    observer.next(false);
    observer.complete();
  };

  public confirm(title: string, content: string): Observable<boolean> {
    return new Observable(observer => {
      this.modal.confirm({
        nzTitle: title,
        nzContent: content,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: this.onOk(observer),
        nzCancelText: 'No',
        nzOnCancel: this.onCancel(observer),
      });
    });
  }

  public info(title: string, content: string): Observable<boolean> {
    return new Observable(observer => {
      this.modal.info({
        nzTitle: title,
        nzContent: content,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: this.onOk(observer),
        nzCancelText: 'No',
        nzOnCancel: this.onCancel(observer),
      });
    });
  }

  public success(title: string, content: string): Observable<boolean> {
    return new Observable(observer => {
      this.modal.success({
        nzTitle: title,
        nzContent: content,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: this.onOk(observer),
        nzCancelText: 'No',
        nzOnCancel: this.onCancel(observer),
      });
    });
  }

  public error(title: string, content: string): Observable<boolean> {
    return new Observable(observer => {
      this.modal.error({
        nzTitle: title,
        nzContent: content,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: this.onOk(observer),
        nzCancelText: 'No',
        nzOnCancel: this.onCancel(observer),
      });
    });
  }

  public warning<T = any>(
    title: string,
    content: string | Type<T>
  ): Observable<boolean> {
    return new Observable(observer => {
      this.modal.warning({
        nzTitle: title,
        nzContent: content,
        nzOkText: 'Yes',
        nzOkType: 'primary',
        nzOkDanger: true,
        nzOnOk: this.onOk(observer),
        nzCancelText: 'No',
        nzOnCancel: this.onCancel(observer),
      });
    });
  }
}
