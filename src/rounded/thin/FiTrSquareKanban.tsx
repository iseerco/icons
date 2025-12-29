import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrSquareKanban = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.5,0H4.5C2.02,0,0,2.02,0,4.5v15c0,2.48,2.02,4.5,4.5,4.5h15c2.48,0,4.5-2.02,4.5-4.5V4.5c0-2.48-2.02-4.5-4.5-4.5Zm3.5,19.5c0,1.93-1.57,3.5-3.5,3.5H4.5c-1.93,0-3.5-1.57-3.5-3.5V4.5c0-1.93,1.57-3.5,3.5-3.5h15c1.93,0,3.5,1.57,3.5,3.5v15ZM10,5.5v6c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V5.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Zm-4,0V14.5c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V5.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Zm8,0v13c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5V5.5c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Zm4,0v3c0,.28-.22,.5-.5,.5s-.5-.22-.5-.5v-3c0-.28,.22-.5,.5-.5s.5,.22,.5,.5Z"/></svg>

);
