import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrGunSquirt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.5,6h-.708c-.655-2.306-2.78-4-5.292-4H6v-.5c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v1.102C1.221,3.514,0,5.367,0,7.5c0,1.894.963,3.568,2.425,4.558L.109,20.332c-.516,1.842.869,3.668,2.782,3.668h0c1.295,0,2.433-.862,2.782-2.11l.529-1.89h2.798v.5c0,.828.672,1.5,1.5,1.5s1.5-.672,1.5-1.5v-4c0-.828-.672-1.5-1.5-1.5s-1.5.672-1.5,1.5v.5h-1.958l1.12-4h8.338c2.512,0,4.637-1.694,5.292-4h.708c.828,0,1.5-.672,1.5-1.5s-.672-1.5-1.5-1.5Zm-6,4H5.5c-1.379,0-2.5-1.121-2.5-2.5s1.121-2.5,2.5-2.5h11c1.379,0,2.5,1.121,2.5,2.5s-1.121,2.5-2.5,2.5Z"/>
</svg>

);
