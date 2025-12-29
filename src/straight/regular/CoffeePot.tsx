import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CoffeePot = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.4,2A25.115,25.115,0,0,1,22,13h2A26.226,26.226,0,0,0,20.856.485L20.565,0H1.525L3.886,5.9C3,7.416.4,12.535,0,20.856A3.008,3.008,0,0,0,3,24H18a3.008,3.008,0,0,0,3-3.144c-.414-8.723-3.259-13.927-4-15.146V2Zm-.677,19.688A1,1,0,0,1,18,22H3a1,1,0,0,1-1-1.049A37.871,37.871,0,0,1,2.96,14H15.974c-.184-.725-.379-1.394-.577-2H3.5A25.186,25.186,0,0,1,5.566,7h9.868A31.961,31.961,0,0,1,19,20.951.992.992,0,0,1,18.725,21.688ZM15,5H5.678l-1.2-3H15Z"/></svg>

);
