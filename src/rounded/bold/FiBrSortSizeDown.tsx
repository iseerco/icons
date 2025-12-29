import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortSizeDown = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,4v4c0,1.65-1.35,3-3,3h-4c-1.65,0-3-1.35-3-3V4c0-1.65,1.35-3,3-3h4c1.65,0,3,1.35,3,3Zm-3,11h-2c-1.65,0-3,1.35-3,3v2c0,1.65,1.35,3,3,3h2c1.65,0,3-1.35,3-3v-2c0-1.65-1.35-3-3-3Zm-11.03,2.91l-1.97,1.86V1.5c0-.83-.67-1.5-1.5-1.5s-1.5,.67-1.5,1.5V19.77l-1.97-1.86c-.6-.57-1.55-.54-2.12,.06-.57,.6-.54,1.55,.06,2.12l3.05,2.88c.66,.66,1.54,1.03,2.48,1.03s1.81-.36,2.44-1l3.09-2.91c.6-.57,.63-1.52,.06-2.12-.57-.6-1.52-.63-2.12-.06Z"/></svg>

);
