import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EggFried = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M13,10.5a3.5,3.5,0,0,1-7,0A3.5,3.5,0,0,1,13,10.5Zm11,1a6.48,6.48,0,0,1-2.342,4.99,2.534,2.534,0,0,0-.829,1.389A8.223,8.223,0,0,1,13,24,13.015,13.015,0,0,1,0,11,10.226,10.226,0,0,1,9.549.01a9.943,9.943,0,0,1,8.763,4.446,2.3,2.3,0,0,0,1.212.866A6.486,6.486,0,0,1,24,11.5ZM13,19a1,1,0,0,0-2,0A1,1,0,0,0,13,19Zm2-8.5c-.231-7.268-10.77-7.267-11,0C4.231,17.768,14.77,17.767,15,10.5ZM16,17a1,1,0,0,0-2,0A1,1,0,0,0,16,17Zm4-6a1,1,0,0,0-2,0A1,1,0,0,0,20,11Z"/></svg>

);
