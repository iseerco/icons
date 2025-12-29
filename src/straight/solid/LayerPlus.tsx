import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const LayerPlus = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,9.367v2.332l-12,7.2L0,11.7v-2.332l12,7.2,12-7.2Zm-.056-2.137L12,.064,.056,7.23l11.944,7.166,11.944-7.166ZM0,13.699v2.332l12,7.2,2-1.2v-2.332l-2,1.2L0,13.699Zm21,2.301h-2v3h-3v2h3v3h2v-3h3v-2h-3v-3Z"/></svg>

);
