import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrArrowTurnDownLeft = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M23.5,3c-.28,0-.5,.22-.5,.5V11.5c0,1.93-1.57,3.5-3.5,3.5H1.09c.07-.21,.19-.4,.36-.57l5.41-5.59c.19-.2,.19-.51-.01-.71-.2-.19-.51-.19-.71,.01L.73,13.73c-.97,.97-.97,2.56,0,3.53l5.41,5.59c.1,.1,.23,.15,.36,.15s.25-.05,.35-.14c.2-.19,.2-.51,.01-.71L1.44,16.56c-.16-.16-.28-.36-.35-.56H19.5c2.48,0,4.5-2.02,4.5-4.5V3.5c0-.28-.22-.5-.5-.5Z"/></svg>

);
