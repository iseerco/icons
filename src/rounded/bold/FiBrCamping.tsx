import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCamping = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M5.324,23.982H18.681a5.31,5.31,0,0,0,4.8-7.587l-6.661-13.3A5.27,5.27,0,0,0,12,.019h0A5.251,5.251,0,0,0,7.2,3.054L.5,16.434a5.311,5.311,0,0,0,4.823,7.548Zm-2.11-6.266L9.9,4.358a2.321,2.321,0,0,1,4.224.039l6.662,13.3a2.311,2.311,0,0,1-2.1,3.284H16.659l-2.952-5.895a1.882,1.882,0,0,0-3.412,0l-2.95,5.9H5.324a2.311,2.311,0,0,1-2.11-3.266Z"/></svg>

);
