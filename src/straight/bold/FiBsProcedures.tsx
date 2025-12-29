import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsProcedures = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m4,11.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5ZM18.279,3l-1.185,1.479L14.066.047l-2.3,2.953h-5.767v3h7.233l.675-.867,2.997,4.388,2.815-3.521h4.279v-3h-5.721Zm2.4,5.005l-2.396,2.995h2.217c.275,0,.5.225.5.5v3.5h-8v-3.5c0-.275.225-.5.5-.5h1.994l-2.049-2.999c-1.904.029-3.445,1.588-3.445,3.499v3.5H3V4H0v20h3v-3h18v3h3v-12.5c0-1.87-1.474-3.402-3.321-3.495Z"/></svg>

);
