import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsAnalyseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m23.995,23.287l-6.584-6.584c1.607-1.775,2.596-4.12,2.596-6.697C20.006,4.492,15.52.006,10.006.006S.006,4.492.006,10.006s4.486,10,10,10c2.577,0,4.922-.989,6.697-2.596l6.584,6.584.707-.707ZM1.006,10.006C1.006,5.043,5.043,1.006,10.006,1.006s9,4.037,9,9-4.038,9-9,9S1.006,14.969,1.006,10.006Zm11.994,2.994h-1.5V5h-3v8h-1.5v-5h-3v6h12v-7h-3v6Zm-7,0h-1v-4h1v4Zm3.5-7h1v7h-1v-7Zm4.5,2h1v5h-1v-5Z"/>
</svg>

);
