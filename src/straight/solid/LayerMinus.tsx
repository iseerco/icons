import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LayerMinus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,11.7l-12,7.2L0,11.7v-2.332l12,7.2,12-7.2v2.332Zm-.056-4.469L12,.064,.056,7.23l11.944,7.166,11.944-7.166Zm-9.944,12.468l-2,1.2L0,13.699v2.332l12,7.2,2-1.2v-2.332Zm10-.699h-8v2h8v-2Z"/></svg>

);
