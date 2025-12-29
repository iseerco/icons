import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsO = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-5.514,0-10-4.486-10-10v-4C2,4.486,6.486,0,12,0s10,4.486,10,10v4c0,5.514-4.486,10-10,10ZM12,1C7.037,1,3,5.038,3,10v4c0,4.963,4.037,9,9,9s9-4.037,9-9v-4c0-4.962-4.037-9-9-9Z"/></svg>

);
