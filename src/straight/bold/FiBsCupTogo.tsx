import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsCupTogo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m21.73,5l-.437-2.186c-.326-1.63-1.77-2.814-3.432-2.814H6.14c-1.663,0-3.106,1.184-3.432,2.814l-.437,2.186H.999v3h1.167l1.524,12.91c.208,1.761,1.702,3.09,3.476,3.09h9.667c1.773,0,3.268-1.328,3.476-3.09l1.524-12.91h1.167v-3h-1.269ZM5.649,3.402c.047-.233.253-.402.491-.402h11.721c.238,0,.444.169.491.402l.32,1.598H5.329l.32-1.598Zm11.68,17.156c-.03.252-.243.442-.497.442H7.166c-.253,0-.467-.189-.497-.441l-.302-2.559h11.264l-.302,2.558Zm1.128-9.558H5.541l-.354-3h13.625l-.354,3Z"/>
</svg>

);
