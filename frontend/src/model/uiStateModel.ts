export type UIState = {
    popupContent: string | null;
    popupPosition: { x: number; y: number } | null;
    selectedElement?: HTMLElement | null;
}