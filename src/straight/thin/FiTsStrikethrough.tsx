import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsStrikethrough = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,11.5v1H0v-1h8.151l-1.845-.475c-2.476-.638-4.205-2.868-4.205-5.425C2.101,2.513,4.614,0,7.702,0h8.798c3.088,0,5.601,2.513,5.601,5.601v1.399h-1v-1.399c0-2.537-2.064-4.601-4.601-4.601H7.702c-2.537,0-4.601,2.063-4.601,4.601,0,2.101,1.42,3.933,3.454,4.456l5.61,1.443h11.835Zm-5.074,3c1.323.823,2.175,2.277,2.175,3.899,0,2.537-2.064,4.601-4.601,4.601H7.702c-2.537,0-4.601-2.063-4.601-4.601v-1.399h-1v1.399c0,3.088,2.513,5.601,5.601,5.601h8.798c3.088,0,5.601-2.513,5.601-5.601,0-1.501-.608-2.88-1.601-3.899h-1.573Z"/></svg>

);
