export interface Lake {
  start(): void;
  stop(): void;
  spawn(x: number, y: number, amp: number): void;
  still(t: number, list?: Array<[number, number, number, number]>): void;
  destroy(): void;
  canvas: HTMLCanvasElement;
  gl: WebGLRenderingContext;
}
export function createLake(
  canvas: HTMLCanvasElement,
  opts?: { interactive?: boolean; ambient?: number; dprCap?: number; specular?: number }
): Lake | null;
export function attachPointer(lake: Lake, el: HTMLElement): () => void;
