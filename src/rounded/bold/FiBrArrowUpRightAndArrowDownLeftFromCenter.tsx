import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrArrowUpRightAndArrowDownLeftFromCenter = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10.561,13.439c.586,.585,.586,1.536,0,2.121l-5.439,5.439h2.379c.828,0,1.5,.671,1.5,1.5s-.672,1.5-1.5,1.5H3.5c-1.93,0-3.5-1.57-3.5-3.5v-4c0-.829,.672-1.5,1.5-1.5s1.5,.671,1.5,1.5v2.379l5.439-5.439c.586-.586,1.535-.586,2.121,0ZM20.5,0h-4c-.828,0-1.5,.671-1.5,1.5s.672,1.5,1.5,1.5h2.379l-5.439,5.439c-.586,.585-.586,1.536,0,2.121,.293,.293,.677,.439,1.061,.439s.768-.146,1.061-.439l5.439-5.439v2.379c0,.829,.672,1.5,1.5,1.5s1.5-.671,1.5-1.5V3.5c0-1.93-1.57-3.5-3.5-3.5Z"/></svg>

);
