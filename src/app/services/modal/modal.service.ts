import { Injectable, Type } from '@angular/core';
import { ModalOptions, NzModalService } from 'ng-zorro-antd/modal';
import { Subject } from 'rxjs';
import { MODAL_SIZE } from 'src/app/constants/modal';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  constructor(private modal: NzModalService) {}

  public open<T, D>(
    title: string,
    content: Type<T>,
    data: D | undefined,
    option: ModalOptions = {}
  ): Subject<D | null> {
    const modal = this.modal.create<T, D | null>({
      nzTitle: title,
      nzContent: content,
      ...option,
    });
    const instanceContent: any = modal.getContentComponent();
    instanceContent['data'] = data;
    // Return a result when closed
    return modal.afterClose;
  }

  public createModalSM<T, D>(
    title: string,
    content: Type<T>,
    data: D | undefined
  ): Subject<D | null> {
    return this.open(title, content, data, {
      nzWidth: MODAL_SIZE.SM,
    });
  }

  public createModalMD<T, D>(
    title: string,
    content: Type<T>,
    data: D
  ): Subject<D | null> {
    return this.open(title, content, data, {
      nzWidth: MODAL_SIZE.MD,
    });
  }

  public createModalLG<T, D>(
    title: string,
    content: Type<T>,
    data: D
  ): Subject<D | null> {
    return this.open(title, content, data, {
      nzWidth: MODAL_SIZE.LG,
    });
  }
}
