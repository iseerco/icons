import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsCodeSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.579,21.422L.622,13.465c-.378-.378-.586-.88-.586-1.415s.208-1.037,.586-1.414L8.629,2.629l.707,.707L1.329,11.343c-.189,.189-.293,.44-.293,.707s.104,.519,.293,.708l7.957,7.957-.707,.707Zm14.8-7.957c.378-.378,.586-.88,.586-1.415s-.208-1.037-.586-1.414L15.371,2.629l-.707,.707,8.007,8.007c.189,.189,.293,.44,.293,.707s-.104,.519-.293,.708l-7.957,7.957,.707,.707,7.957-7.957Z"/></svg>

);
