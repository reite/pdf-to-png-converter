import { strict } from 'assert';
import Canvas, { createCanvas } from '@napi-rs/canvas';

export interface CanvasContext {
    canvas?: Canvas.Canvas;
    context?: Canvas.SKRSContext2D;
}

export class NodeCanvasFactory {
    create(width: number, height: number): CanvasContext {
        strict(width > 0 && height > 0, 'Invalid canvas size');
        const canvas = createCanvas(width, height);
        const context = canvas.getContext('2d');
        return {
            canvas,
            context,
        };
    }

    reset(canvasAndContext: CanvasContext, width: number, height: number): void {
        strict(canvasAndContext.canvas, 'Canvas is not specified');
        strict(width > 0 && height > 0, 'Invalid canvas size');
        canvasAndContext.canvas.width = width;
        canvasAndContext.canvas.height = height;
    }

    destroy(canvasAndContext: CanvasContext): void {
        strict(canvasAndContext.canvas, 'Canvas is not specified');
       //  canvasAndContext.canvas.width = 0;
        // canvasAndContext.canvas.height = 0;
        canvasAndContext.canvas = undefined;
        canvasAndContext.context = undefined;
    }
}
