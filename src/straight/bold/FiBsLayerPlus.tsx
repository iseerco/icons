import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsLayerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,11.303l12,7.2v3.499L0,14.802v-3.499Zm24-3.103v1.099l-12,7.2L0,9.299v-1.099L12,1l12,7.2Zm-4.916,.549l-7.084-4.25-7.084,4.25,7.084,4.25,7.084-4.25Zm1.916,6.25h-3v3h-3v3h3v3h3v-3h3v-3h-3v-3Z"/></svg>

);
