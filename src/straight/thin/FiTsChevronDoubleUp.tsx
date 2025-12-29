import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsChevronDoubleUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.181,12.974L12.354,2.146c-.189-.189-.518-.189-.707,0L.819,12.974l-.707-.707L10.939,1.439c.566-.566,1.555-.566,2.121,0l10.827,10.827-.707,.707Zm.707,8.673L12.471,10.229c-.26-.26-.682-.26-.941,0L.112,21.646l.707,.707L12,11.173l11.181,11.181,.707-.707Z"/></svg>

);
