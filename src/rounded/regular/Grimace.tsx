import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grimace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12.013,12.013,0,0,0,0,12c.6,15.9,23.4,15.893,24,0A12.013,12.013,0,0,0,12,0Zm0,22A10.011,10.011,0,0,1,2,12C2.5-1.248,21.5-1.244,22,12A10.011,10.011,0,0,1,12,22ZM7,9.5a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,7,9.5Zm7,0a1.5,1.5,0,0,1,3,0A1.5,1.5,0,0,1,14,9.5ZM16,13H8a3,3,0,0,0,0,6h8A3,3,0,0,0,16,13Zm-3,2v2H11V15ZM7,16a1,1,0,0,1,1-1H9v2H8A1,1,0,0,1,7,16Zm9,1H15V15h1A1,1,0,0,1,16,17Z"/></svg>

);
