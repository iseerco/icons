import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsMicrophone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,13c0,6.065-4.935,11-11,11h-2C4.935,24,0,19.065,0,13H1c0,5.514,4.486,10,10,10h2c5.514,0,10-4.486,10-10h1Zm-20-1v-4C4,3.589,7.589,0,12,0s8,3.589,8,8v4c0,4.411-3.589,8-8,8s-8-3.589-8-8Zm1.295-6h4.705v1H5.08c-.047,.328-.08,.66-.08,1v1.5h5v1H5v1.5c0,.34,.033,.672,.08,1h4.92v1H5.295c.863,2.887,3.541,5,6.705,5s5.842-2.113,6.705-5h-4.705v-1h4.92c.047-.328,.08-.66,.08-1v-1.5h-5v-1h5v-1.5c0-.34-.033-.672-.08-1h-4.92v-1h4.705c-.863-2.888-3.541-5-6.705-5S6.158,3.112,5.295,6Z"/>
</svg>

);
