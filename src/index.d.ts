interface CmdOptions {
    env: 'production' | 'development';
    debug: boolean;
}

interface WorkerHandler {
    active: boolean;
    stop(callback: () => void): void;
}

declare function worker(cmd: CmdOptions): WorkerHandler;

declare module 'sarafa-svc-node-wrk' {
    const cmd: CmdOptions;
    const hnd: WorkerHandler;
    export = hnd;
}
