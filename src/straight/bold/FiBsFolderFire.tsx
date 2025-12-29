import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsFolderFire = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M18,10c-1.821,2.103-1.455,6-2.718,6-.606,0-1.287-2.087-1.287-2.087-.995,1.027-1.995,2.361-1.995,4.087,0,3.314,2.686,6,6,6s6-2.686,6-6c0-3.474-4.105-6.105-6-8Zm1.414,11.414c-.781,.781-2.048,.781-2.829,0-.781-.782-.781-2.048,0-2.829l1.415-1.415,1.415,1.415h0c.781,.782,.781,2.048,0,2.829Zm4.586-15.914v7.492c-.922-1.145-2.021-2.131-3-2.983v-3.009H3v12h7.069c.136,1.082,.488,2.096,1.013,3H0V3.5C0,1.57,1.57,0,3.5,0h4.854l4,2h8.146c1.93,0,3.5,1.57,3.5,3.5Z"/>
</svg>

);
