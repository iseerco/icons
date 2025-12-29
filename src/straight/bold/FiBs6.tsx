import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBs6 = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M4.004,16c.134,4.256,3.513,7.815,7.646,7.992,2.154,.099,4.205-.66,5.782-2.119,1.578-1.46,2.488-3.445,2.563-5.591,.073-2.103-.737-4.207-2.225-5.771-1.484-1.562-3.54-2.477-5.64-2.511-1.914-.016-3.681,.587-5.131,1.753v-1.254c0-3.032,2.468-5.499,5.5-5.499h5.5V0h-5.5C7.813,.001,4,3.814,4,8.5l.004,7.5Zm7.996-5.005c2.761,0,5,2.239,5,5s-2.239,5-5,5-5-2.239-5-5,2.239-5,5-5Z"/></svg>

);
