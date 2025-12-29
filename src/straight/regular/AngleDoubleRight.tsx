import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AngleDoubleRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><g id="_01_align_center" data-name="01 align center"><path d="M22.121,9.879,12.246,0,10.832,1.418l9.875,9.875a1,1,0,0,1,0,1.414L10.819,22.6l1.414,1.414,9.888-9.888a3,3,0,0,0,0-4.242Z"/><path d="M13.535,11.293,2.262.019.847,1.433,11.414,12,.836,22.578,2.25,23.993,13.535,12.707A1,1,0,0,0,13.535,11.293Z"/></g></svg>

);
