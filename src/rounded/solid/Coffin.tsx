import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Coffin = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m14,24h-3.944c-2.358,0-4.418-1.677-4.896-3.987l-2.035-9.837c-.238-1.158-.133-2.348.305-3.444l1.436-3.589c.764-1.909,2.586-3.143,4.643-3.143h5.042c2.057,0,3.879,1.234,4.643,3.144l1.436,3.588c.438,1.098.544,2.289.305,3.445l-2.035,9.837c-.478,2.31-2.537,3.987-4.896,3.987Z"/></svg>

);
