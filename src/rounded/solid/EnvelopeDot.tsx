import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeDot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20,8c-2.21,0-4-1.79-4-4S17.79,0,20,0s4,1.79,4,4-1.79,4-4,4Zm-8,7.42c.77,0,1.54-.29,2.12-.88l4.67-4.67c-2.73-.56-4.79-2.98-4.79-5.88,0-.34,.04-.67,.09-1H5c-1.81,0-3.38,.97-4.26,2.41L9.88,14.55c.58,.58,1.35,.88,2.12,.88Zm9.76-5.69l-6.23,6.23c-.97,.97-2.26,1.46-3.54,1.46s-2.56-.49-3.54-1.46L.05,7.54c-.01,.15-.05,.3-.05,.46v11c0,2.76,2.24,5,5,5h14c2.76,0,5-2.24,5-5l-.02-10.53c-.64,.57-1.39,1-2.22,1.26Z"/></svg>

);
