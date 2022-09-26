import { environment } from 'src/environments/environment';

export namespace Endpoint {
  export const PREFIX: string =
    (environment as any).BE_CONFIG.BASE_URL +
    (environment as any).BE_CONFIG.PREFIX +
    (environment as any).BE_CONFIG.VERSION;
}
