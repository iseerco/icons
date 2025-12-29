import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsRoadBarrier = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23,2v2H1V2H0V22H1V14H23v8h1V2h-1Zm0,4.293l-6.707,6.707h-4.586L19.707,5h3.293v1.293Zm-12.707,6.707H5.707L13.707,5h4.586L10.293,13ZM6.293,5L1,10.293V5H6.293ZM1,11.707L7.707,5h4.586L4.293,13H1v-1.293Zm16.707,1.293l5.293-5.293v5.293h-5.293Z"/>
</svg>

);
