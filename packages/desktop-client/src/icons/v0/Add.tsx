﻿import * as React from 'react';
import type { SVGProps } from 'react';

export const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    {...props}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    style={{
      color: 'inherit',
      ...props.style,
    }}
  >
    <path
      d="M23 11.5a1.5 1.5 0 0 1-1.5 1.5h-20a1.5 1.5 0 0 1 0-3h20a1.5 1.5 0 0 1 1.5 1.5Z"
      fill="currentColor"
    />
    <path
      d="M11.5 23a1.5 1.5 0 0 1-1.5-1.5v-20a1.5 1.5 0 0 1 3 0v20a1.5 1.5 0 0 1-1.5 1.5Z"
      fill="currentColor"
    />
  </svg>
);
