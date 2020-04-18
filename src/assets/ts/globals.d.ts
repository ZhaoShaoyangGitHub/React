declare interface ajax_param {
  readonly url: string;
  data: {} | string;
  readonly method: "get" | "post";
  [propName: string]: any;
}

declare interface props {
  children?: ReactNode;
  readonly match: {
    isExact: boolean;
    params: {};
    path: string;
    url: string;
  };
  store?: any;
  readonly location: {
    [propName: string]: any;
  };
  readonly history: {
    [propName: string]: any;
  };
  [propsName: string]: any;
}
