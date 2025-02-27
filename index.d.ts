type menusItemType = {
  key?: string;
  label: string | ((key?: string) => string);
  style?: {
    [key: string]: string | number
  }
  icon?: string | ((key?: string) => string) | unknown;
  disabled?: boolean | ((key?: string) => boolean);
  divided?: boolean | ((key?: string) => boolean);
  enter?: (menu: menusItemType, args: unknown) => unknown;
  click?: (menu: menusItemType, args: unknown) => unknown;
  children?: Array<menusItemType>;
  tip?: string | ((key?: string) => string);
  hidden?: boolean | ((key?: string) => boolean);
  clickToClose?: boolean | ((key?: string) => boolean);
}

type menusType = {
  menus: Array<menusItemType>;
  menusClass?: string;
  itemClass?: string;
  minWidth?: number | string;
  maxWidth?: number | string;
  zIndex?: number | string;
  direction?: "left" | "right";
}

type componentMenusType = menusType & {
  event: MouseEvent;
  open: boolean;
  args?: unknown
}

declare module 'vue-vantis-menus' {
  export const Vue3Menus: import('vue').DefineComponent<componentMenusType, componentMenusType, componentMenusType, componentMenusType, componentMenusType,
    componentMenusType, componentMenusType, componentMenusType, componentMenusType, componentMenusType, componentMenusType, componentMenusType>;

  export const menusEvent: (event: MouseEvent, menus: menusType | Array<menusItemType>, args: unknown) => void;

  export const directive: import('vue').Directive<any, menusType | Array<menusItemType>>;

  const install: (app: import('vue').App, options: {
    name: string
  }) => unknown;
  export default install;
}

export {
  menusType,
  menusItemType
}
