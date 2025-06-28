/* eslint-disable @typescript-eslint/no-explicit-any */

interface ISequelizerOptions {
  route: string;
  method: string;
}

declare global {
  interface Window {
    electron: {
      sequelizer: (channel: 'default', options: ISequelizerOptions) => Promise<any>;
    };
  }
}

export {};
