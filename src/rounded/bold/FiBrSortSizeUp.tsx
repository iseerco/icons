import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSortSizeUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,18v2c0,1.65-1.35,3-3,3h-2c-1.65,0-3-1.35-3-3v-2c0-1.65,1.35-3,3-3h2c1.65,0,3,1.35,3,3ZM21,1h-4c-1.65,0-3,1.35-3,3v4c0,1.65,1.35,3,3,3h4c1.65,0,3-1.35,3-3V4c0-1.65-1.35-3-3-3Zm-12.03,.03c-1.36-1.36-3.59-1.37-4.92-.03L.97,3.91c-.6,.57-.63,1.52-.06,2.12,.57,.6,1.52,.63,2.12,.06l1.97-1.86V22.5c0,.83,.67,1.5,1.5,1.5s1.5-.67,1.5-1.5V4.23l1.97,1.86c.29,.27,.66,.41,1.03,.41,.4,0,.8-.16,1.09-.47,.57-.6,.54-1.55-.06-2.12l-3.06-2.88Z"/></svg>

);
