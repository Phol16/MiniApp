export {};

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      DATABASE: string;
      ENV: 'test' | 'dev' | 'prod';
    }
  }
}