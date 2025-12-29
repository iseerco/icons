import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Outdent = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m.83,13.228c-.443-.397-.443-1.092,0-1.489l4.17-3.739v8.967L.83,13.228ZM0,4v2h24v-2H0Zm0,17h24v-2H0v2Zm8-10h16v-2H8v2Zm0,5h16v-2H8v2Z"/></svg>

);
