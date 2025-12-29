import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsLoopSquare = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M23.354,9.646l-4.354-4.354v15.207c0,1.93-1.57,3.5-3.5,3.5H6v-1H15.5c1.379,0,2.5-1.121,2.5-2.5V5.293l-4.354,4.354-.707-.707,4.5-4.5c.584-.585,1.537-.585,2.121,0l4.5,4.5-.707,.707Zm-12.293,5.414l-.707-.707-4.354,4.354V3.5c0-1.378,1.121-2.5,2.5-2.5h9.5V0H8.5c-1.93,0-3.5,1.57-3.5,3.5v15.207L.646,14.354-.061,15.061l4.5,4.5c.292,.292,.677,.438,1.061,.438s.769-.146,1.061-.438l4.5-4.5Z"/>
</svg>

);
