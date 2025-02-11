import { DepTree } from './common';

export interface MonitorBody {
  meta: MonitorMeta;
  policy: string;
  package: DepTree;
  targetFile: string;
}

export interface MonitorMeta {
  method?: string;
  hostname: string;
  id: string;
  ci: boolean;
  pid: number;
  node: string;
  master: boolean;
  name: string;
  version: string;
  org?: string;
  pluginName: string;
  pluginRuntime: string;
  dockerImageId?: string;
  dockerBaseImage?: string;
  projectName: string;
}
