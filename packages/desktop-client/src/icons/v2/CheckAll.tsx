﻿import * as React from 'react';
import type { SVGProps } from 'react';

export const SvgCheckAll = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 26 26"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M5 0C2.255 0 0 2.255 0 5v12c0 2.745 2.255 5 5 5h12c2.745 0 5-2.255 5-5V5c0-2.745-2.255-5-5-5H5zm0 2h12c1.655 0 3 1.345 3 3v12c0 1.655-1.345 3-3 3H5c-1.655 0-3-1.345-3-3V5c0-1.655 1.345-3 3-3zm19 3.025V21c0 1.654-1.346 3-3 3H5.025c.913 1.207 2.348 2 3.975 2h12c2.757 0 5-2.243 5-5V9c0-1.627-.793-3.062-2-3.975zm-8.826.98a.498.498 0 0 0-.32.21l-4.782 7.092-2.16-2.16a.5.5 0 0 0-.707 0l-1.059 1.06a.5.5 0 0 0 0 .707l3.22 3.22a1.254 1.254 0 0 0 1.911-.173l5.633-8.326a.5.5 0 0 0-.127-.696l-1.234-.851a.502.502 0 0 0-.375-.082z"
      fill="currentColor"
    />
  </svg>
);
