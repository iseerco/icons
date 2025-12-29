import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsPriorityImportance = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m13,12h-6v-1h6v1ZM0,17h5v5H0v-5Zm1,4h3v-3H1v3Zm6-1h10v-1H7v1Zm0-17v1h17v-1H7ZM0,9h5v5H0v-5Zm1,4h3v-3H1v3ZM0,1h5v5H0V1Zm1,4h3v-3H1v3Zm17.439,1.439l-3.442,3.442.707.707,3.296-3.295v16.707h1V7.292l3.276,3.277.707-.707-3.423-3.424c-.586-.583-1.537-.583-2.121,0Z"/>
</svg>

);
