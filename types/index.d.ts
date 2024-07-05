// index.d.ts

import * as path from "path";

// Define the WorkerHandler interface
export interface WorkerHandler {
    active: boolean;
    stop(callback: () => void): void;
}

// Define the CmdOptions interface
export interface CmdOptions {
    env: 'production' | 'development';
    debug: boolean;
    serviceRoot?: string;
}

// Declare the worker function
declare function worker(cmd: CmdOptions): WorkerHandler;

export default worker;
