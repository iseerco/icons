import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrinAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M11.993,15A21.923,21.923,0,0,0,18,14c-.615,2.28-2.664,5-6,5s-5.392-2.72-6.007-5A21.841,21.841,0,0,0,11.993,15ZM8,13c2.63-.074,2.63-5.927,0-6C5.37,7.074,5.37,12.927,8,13Zm8-6c-2.63.074-2.63,5.927,0,6C18.63,12.926,18.63,7.073,16,7Zm8,5A12.013,12.013,0,0,1,12,24C-3.9,23.4-3.893.6,12,0A12.013,12.013,0,0,1,24,12Zm-3,0a9.011,9.011,0,0,0-9-9C.077,3.453.08,20.549,12,21A9.011,9.011,0,0,0,21,12Z"/></svg>

);
