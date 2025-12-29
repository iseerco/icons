import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Grimace = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm0,22A10,10,0,1,1,22,12,10.011,10.011,0,0,1,12,22ZM7,9.5A1.5,1.5,0,1,1,8.5,11,1.5,1.5,0,0,1,7,9.5Zm7,0A1.5,1.5,0,1,1,15.5,11,1.5,1.5,0,0,1,14,9.5ZM16,13H8a3,3,0,0,0,0,6h8a3,3,0,0,0,0-6Zm-3,2v2H11V15ZM7,16a1,1,0,0,1,1-1H9v2H8A1,1,0,0,1,7,16Zm9,1H15V15h1a1,1,0,0,1,0,2Z"/></svg>

);
