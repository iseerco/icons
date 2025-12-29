import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTableList = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m19.5,2H4.5C2.019,2,0,4.019,0,6.5v10c0,2.481,2.019,4.5,4.5,4.5h15c2.481,0,4.5-2.019,4.5-4.5V6.5c0-2.481-2.019-4.5-4.5-4.5ZM1,9h5v5H1v-5Zm6,0h16v5H7v-5Zm16-2.5v1.5H7V3h12.5c1.93,0,3.5,1.57,3.5,3.5ZM4.5,3h1.5v5H1v-1.5c0-1.93,1.57-3.5,3.5-3.5Zm-3.5,13.5v-1.5h5v5h-1.5c-1.93,0-3.5-1.57-3.5-3.5Zm18.5,3.5H7v-5h16v1.5c0,1.93-1.57,3.5-3.5,3.5Z"/>
</svg>

);
