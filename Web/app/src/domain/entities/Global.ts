import { IGlobal } from '../contracts/IGlobal';

export class Global implements IGlobal {
  title: string | undefined;
  static instance: Global | undefined;
  url: string | undefined;

  static GetInstance = () => {
    if (!Global.instance) {
      Global.instance = new Global();
    }
    return Global.instance;
  };
}
