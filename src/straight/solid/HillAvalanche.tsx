import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const HillAvalanche = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  <svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m0 1 23 23h-20c-1.654 0-3-1.346-3-3zm17.793 14.935c1.353 1.412 3.789 1.411 5.142 0 1.411-1.353 1.411-3.788 0-5.142l-1.414 1.415c.636.609.635 1.704 0 2.313-.619.618-1.701.612-2.307.007l-3.766-3.84c.477.201 1.002.313 1.552.313 2.209 0 4-1.791 4-4 0-1.899-1.327-3.481-3.101-3.89 0-.003 0-.005 0-.008-.409-1.774-2.002-3.102-3.898-3.102-.636 0-1.251.152-1.812.444-1.337-.741-3.043-.54-4.162.581-1.356 1.297-1.357 3.648-.007 4.943l9.774 9.967z"/></svg>
);
