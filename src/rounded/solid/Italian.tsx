import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Italian = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,9v12.854c.053,1.662-1.983,2.755-3.339,1.789l-3.964-2.644h-5.697c-1.45,0-2.747-.631-3.661-1.62l.569-.38h6.092c3.859,0,7-3.14,7-7V5c0-.193-.014-.383-.029-.573,1.776,.767,3.029,2.519,3.029,4.573ZM14,0H5C2.243,0,0,2.243,0,5v12.854c-.053,1.663,1.983,2.754,3.34,1.788l3.963-2.643h6.697c2.757,0,5-2.243,5-5V5c0-2.757-2.243-5-5-5ZM7.6,11.2c0,.442-.358,.8-.8,.8s-.8-.358-.8-.8V5.8c0-.442,.358-.8,.8-.8s.8,.358,.8,.8v5.4Zm5.2-4.601h-.9v4.601c0,.442-.358,.8-.8,.8s-.8-.358-.8-.8V6.6h-.9c-.442,0-.8-.358-.8-.8s.358-.8,.8-.8h3.4c.442,0,.8,.358,.8,.8s-.358,.8-.8,.8Z"/>
</svg>

);
