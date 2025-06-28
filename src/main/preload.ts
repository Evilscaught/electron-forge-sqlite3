import { contextBridge, ipcRenderer } from 'electron';

contextBridge.exposeInMainWorld('electron', {
  sequelizer: (channel: string, { route, method }: { route: string; method: string; }) => {
    const validChannels = [ 'default' ];

    if ( validChannels.includes(channel) ) {
      return ipcRenderer.invoke(channel, { route, method });
    } else {
      return Promise.reject(new Error('Invalid channel'));
    }
  }
});
