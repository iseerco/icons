import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsFaceViewfinder = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m2.5,23h5.5v1H2.5c-1.379,0-2.5-1.122-2.5-2.5v-5.5h1v5.5c0,.827.673,1.5,1.5,1.5Zm20.5-1.5c0,.827-.673,1.5-1.5,1.5h-5.5v1h5.5c1.379,0,2.5-1.122,2.5-2.5v-5.5h-1v5.5ZM21.5,0h-5.5v1h5.5c.827,0,1.5.673,1.5,1.5v5.5h1V2.5c0-1.378-1.121-2.5-2.5-2.5ZM1,2.5c0-.827.673-1.5,1.5-1.5h5.5V0H2.5C1.121,0,0,1.122,0,2.5v5.5h1V2.5Zm8,8.5c.552,0,1-.448,1-1s-.448-1-1-1-1,.448-1,1,.448,1,1,1Zm6-2c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-3,11c-4.411,0-8-3.589-8-8S7.589,4,12,4s8,3.589,8,8-3.589,8-8,8Zm7-8c0-3.86-3.141-7-7-7s-7,3.14-7,7,3.141,7,7,7,7-3.14,7-7Zm-7,3c-1.76,0-3.134-1.341-3.147-1.354l-.706.708c.067.067,1.672,1.646,3.854,1.646s3.786-1.579,3.854-1.646l-.706-.708c-.014.014-1.388,1.354-3.147,1.354Z"/>
</svg>

);
