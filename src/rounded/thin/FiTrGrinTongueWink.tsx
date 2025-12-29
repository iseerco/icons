import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrGrinTongueWink = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M16.5,15H7.5c-.276,0-.5,.224-.5,.5s.224,.5,.5,.5h1.5v.5c0,1.683,1.147,3.5,3,3.5s3-1.817,3-3.5v-.5h1.5c.276,0,.5-.224,.5-.5s-.224-.5-.5-.5Zm-2.5,1.5c0,1.202-.765,2.5-2,2.5s-2-1.298-2-2.5v-.5h4v.5ZM12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11ZM16.5,7c-1.378,0-2.5,1.122-2.5,2.5,0,1.5,1.445,1.5,2.5,1.5s2.5,0,2.5-1.5c0-1.378-1.122-2.5-2.5-2.5Zm0,3c-1.353,0-1.5-.101-1.5-.5,0-.827,.673-1.5,1.5-1.5s1.5,.673,1.5,1.5c0,.399-.147,.5-1.5,.5Zm-7,0H5.5c-.276,0-.5-.224-.5-.5s.224-.5,.5-.5h4c.276,0,.5,.224,.5,.5s-.224,.5-.5,.5Z"/></svg>

);
