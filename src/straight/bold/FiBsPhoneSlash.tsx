import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPhoneSlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M21.814.064,10.256,11.623a12.246,12.246,0,0,1-1.167-1.93l2.963-2.962L5.41.09,1.766,3.734A6.055,6.055,0,0,0,0,8.058C0,11.089,1.577,14.55,4.277,17.6L.064,21.814l2.122,2.122,21.75-21.75ZM3,8.058a3.08,3.08,0,0,1,.886-2.2L5.41,4.332l2.4,2.4L5.541,9l.369.919a15.388,15.388,0,0,0,2.216,3.835l-1.72,1.72C4.281,13.02,3,10.3,3,8.058Zm14.269,3.89L23.91,18.59l-3.645,3.645A6.055,6.055,0,0,1,15.942,24,14.207,14.207,0,0,1,8.13,21.074l2.162-2.163A10.916,10.916,0,0,0,15.942,21a3.076,3.076,0,0,0,2.2-.885l1.524-1.525-2.4-2.4-2.255,2.256-.908-.346a15.032,15.032,0,0,1-2.033-.97Z"/></svg>

);
