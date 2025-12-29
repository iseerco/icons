import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPuzzlePiece = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M20.842,12A19.074,19.074,0,0,0,18,12.477V9.5A3.5,3.5,0,0,0,14.5,6H11.521c.061-.337.128-.7.193-1.033A12.623,12.623,0,0,0,12,3.158,2.949,2.949,0,0,0,9,0,2.949,2.949,0,0,0,6,3.158a13.691,13.691,0,0,0,.3,1.913c.058.308.118.627.173.929H3.409A3.419,3.419,0,0,0,0,9.422V24H18V17.521A19.065,19.065,0,0,0,20.842,18a3,3,0,1,0,0-6ZM15,21H11.521c.061-.337.128-.7.193-1.033A12.623,12.623,0,0,0,12,18.158,2.949,2.949,0,0,0,9,15a2.949,2.949,0,0,0-3,3.158,13.691,13.691,0,0,0,.3,1.913c.058.308.118.627.173.929H3V9.422A.421.421,0,0,1,3.409,9H14.5a.5.5,0,0,1,.5.5Z"/></svg>

);
