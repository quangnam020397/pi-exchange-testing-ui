import { Injectable } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class QueryParamsService {
  constructor(private router: Router, private route: ActivatedRoute) {}

  getParams(): Params {
    const data = { ...this.route.snapshot.queryParams };

    // handle values sort

    if (data['sort']) {
      const sort = data['sort'].split('_');
      const key = sort[0];
      const value = sort[1];
      data['sort'] = { key, value };
    }

    // handle values filter status
    if (data['status'] && data['status'] !== 'all') {
      const status = data['status'].split('_');
      data['status'] = status.map((item: string) => item.toUpperCase());
    }

    return data;
  }

  setParams(params: Params) {
    // handle values sort
    params['sort'] = params['sort']
      ? (() => {
          const sort = params['sort'].find((item: ISortData) => item.value);
          return sort ? `${sort.key}_${sort.value}` : undefined;
        })()
      : undefined;

    // handle values filter status
    if (params['status'] && Array.isArray(params['status'])) {
      params['status'] = params['status']
        ? params['status'].join('_')
        : undefined;
    }

    this.router.navigate([], {
      relativeTo: this.route,
      queryParamsHandling: 'merge',
      queryParams: params,
    });
  }
}

interface ISortData {
  key: string;
  value: string;
}
