import create from 'zustand'
import { requestIdleCallback } from './hooks/requestIdleCallback'
import config from './config'

const useCanvasStore = create((set) => ({
  // //////////////////////////////////////////////////////////////////////////
  // GLOBAL ScrollRig STATE
  // //////////////////////////////////////////////////////////////////////////
  globalRenderQueue: false,
  clearGlobalRenderQueue: () => set((state) => ({ globalRenderQueue: false })),

  // true if WebGL initialized without errors
  isCanvasAvailable: true,
  setCanvasAvailable: (isCanvasAvailable) => set((state) => ({ isCanvasAvailable })),

  // true if <VirtualScrollbar> is currently enabled
  hasVirtualScrollbar: false,
  setVirtualScrollbar: (hasVirtualScrollbar) => set((state) => ({ hasVirtualScrollbar })),

  // map of all components to render on the global canvas
  canvasChildren: {},

  // add component to canvas
  renderToCanvas: (key, mesh, props = {}) =>
    set(({ canvasChildren }) => {
      const obj = { ...canvasChildren, [key]: { mesh, props } }
      return { canvasChildren: obj }
    }),

  // pass new props to a canvas component
  updateCanvas: (key, newProps) =>
    set(({ canvasChildren }) => {
      if (!canvasChildren[key]) return
      const {
        [key]: { mesh, props },
      } = canvasChildren
      const obj = { ...canvasChildren, [key]: { mesh, props: { ...props, ...newProps } } }
      return { canvasChildren: obj }
    }),

  // remove component from canvas
  removeFromCanvas: (key) =>
    set(({ canvasChildren }) => {
      const { [key]: omit, ...obj } = canvasChildren // make a separate copy of the obj and omit
      return { canvasChildren: obj }
    }),

  // current pixel ratio
  pixelRatio: 1,
  setPixelRatio: (pixelRatio) => set((state) => ({ pixelRatio })),

  // Used to ask components to re-calculate their positions after a layout reflow
  pageReflowRequested: 0,
  pageReflowCompleted: 0,
  requestReflow: () => {
    set((state) => {
      // if VirtualScrollbar is active, it triggers `triggerReflowCompleted` instead
      if (!config.hasVirtualScrollbar) {
        requestIdleCallback(state.triggerReflowCompleted, { timeout: 100 })
      }
      return { pageReflowRequested: state.pageReflowRequested + 1 }
    })
  },
  triggerReflowCompleted: () => {
    set((state) => ({ pageReflowCompleted: state.pageReflowCompleted + 1 }))
  },

  // keep track of scroll position
  scrollY: 0,
  setScrollY: (scrollY) => set((state) => ({ scrollY })),
}))

export { useCanvasStore }

export default useCanvasStore
