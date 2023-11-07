import '@testing-library/jest-dom'
import 'whatwg-fetch'
import {vi} from 'vitest'
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
HTMLCanvasElement.prototype.getContext = () => {
    return {
        fillStyle: '',
        fillRect: vi.fn()
    }
}
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
global.language = vi.spyOn(navigator, 'language', 'get')
