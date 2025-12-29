import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PenFancySlash = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m8.028,12.25l3.836,3.836-1.204,5.42-9.132,2.495,6.009-6.009-1.414-1.414L.113,22.586l2.495-9.132,5.42-1.204Zm15.228-7.867c.479-.48.744-1.117.744-1.795s-.264-1.316-.744-1.795c-.99-.99-2.6-.99-3.59,0l-8.73,8.73L1.457.043.043,1.457l22.5,22.5,1.414-1.414-9.431-9.431,8.73-8.73Z"/>
</svg>

);
