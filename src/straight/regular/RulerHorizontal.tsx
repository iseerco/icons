import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const RulerHorizontal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21,7H3c-1.654,0-3,1.346-3,3v7H24v-7c0-1.654-1.346-3-3-3Zm1,8h-3v-3h-2v3h-2v-3h-2v3h-2v-3h-2v3h-2v-3h-2v3H2v-5c0-.552,.448-1,1-1H21c.552,0,1,.448,1,1v5Z"/></svg>

);
