import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FileEdit = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m19.414,5h-4.414V.586l4.414,4.414Zm4.586,9.537c0,.678-.264,1.316-.744,1.795l-7.667,7.667h-3.59v-3.59l7.668-7.667c.99-.99,2.6-.99,3.59,0,.479.479.744,1.117.744,1.795Zm-14.001,5.044l8.253-8.252c.5-.5,1.096-.869,1.748-1.089v-3.239h-7V0H3C1.343,0,0,1.343,0,3v21h9.999v-4.419Z"/></svg>

);
