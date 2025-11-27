export type UIAction =     
    | {type: "SHOW_POPUP"; payload: { content: string; element?: HTMLElement, position: { x: number; y: number }; }}
    | {type: "HIDE_POPUP"}