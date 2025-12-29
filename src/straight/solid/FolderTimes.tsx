import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FolderTimes = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,9v14H24V9H0Zm12,12c-2.761,0-5-2.239-5-5s2.239-5,5-5,5,2.239,5,5-2.239,5-5,5ZM24,6v1H0v-3C0,2.343,1.343,1,3,1h5.236l4,2h8.764c1.657,0,3,1.343,3,3Zm-11.207,12.207l-1.793-1.793v-3.414h2v2.586l1.207,1.207-1.414,1.414Z"/></svg>

);
