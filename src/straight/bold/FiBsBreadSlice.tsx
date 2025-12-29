import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBreadSlice = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22,23H2V10.347C-1.954,7.352.466.912,5.318,1H18.682C23.536.912,25.953,7.353,22,10.347ZM5,20H19V8.7l.745-.434A2.258,2.258,0,0,0,18.682,4H5.318A2.258,2.258,0,0,0,4.255,8.265L5,8.7ZM8.5,10a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,8.5,10Zm5,5a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,13.5,15Zm-5,0a1.5,1.5,0,0,0,0,3A1.5,1.5,0,0,0,8.5,15Z"/></svg>

);
