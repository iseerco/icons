import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsBucket = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23,8h-1.202c-.656-3.216-2.862-5.871-5.798-7.159v-.841h-8v.841c-2.937,1.288-5.143,3.943-5.798,7.159h-1.202v3h1.307l3,13h13.387l3-13h1.307v-3Zm-15-3.736v.736h8v-.736c1.28.896,2.248,2.206,2.705,3.736H5.295c.458-1.53,1.425-2.841,2.705-3.736Zm8.307,16.736H7.693l-1.154-5h8.869l.692-3H5.847l-.461-2h13.228l-2.308,10Z"/>
</svg>

);
