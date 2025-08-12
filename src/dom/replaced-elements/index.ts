import { CanvasElementContainer } from './canvas-element-container';
import { ImageElementContainer } from './image-element-container';
import { SVGElementContainer } from './svg-element-container';

export type ReplacedElementContainer = CanvasElementContainer | ImageElementContainer | SVGElementContainer;
export * from './input-element-container';
export * from './image-element-container';
export * from './canvas-element-container';
export * from './iframe-element-container';
export * from './svg-element-container';
