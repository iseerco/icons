import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrTerminal = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.26,10.23c.98,.98,.98,2.57,0,3.54L.85,21.86c-.1,.09-.22,.14-.35,.14-.13,0-.26-.05-.36-.15-.19-.2-.19-.52,.01-.71L8.57,13.05c.58-.58,.58-1.53,0-2.11L.15,2.86c-.2-.19-.21-.51-.01-.71,.19-.2,.51-.21,.71-.01L9.26,10.23Zm14.24,10.77H10.5c-.28,0-.5,.22-.5,.5s.22,.5,.5,.5h13c.28,0,.5-.22,.5-.5s-.22-.5-.5-.5Z"/></svg>

);
