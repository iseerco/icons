import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCrossReligion = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M12,24c-1.654,0-3-1.346-3-3V13H5c-1.654,0-3-1.346-3-3s1.346-3,3-3h4V3c0-1.654,1.346-3,3-3s3,1.346,3,3V7h4c1.654,0,3,1.346,3,3s-1.346,3-3,3h-4v8c0,1.654-1.346,3-3,3ZM5,8c-1.103,0-2,.897-2,2s.897,2,2,2h4.5c.276,0,.5,.224,.5,.5v8.5c0,1.103,.897,2,2,2s2-.897,2-2V12.5c0-.276,.224-.5,.5-.5h4.5c1.103,0,2-.897,2-2s-.897-2-2-2h-4.5c-.276,0-.5-.224-.5-.5V3c0-1.103-.897-2-2-2s-2,.897-2,2V7.5c0,.276-.224,.5-.5,.5H5Z"/></svg>

);
