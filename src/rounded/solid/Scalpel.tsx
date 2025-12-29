import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Scalpel = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m24,3.797c0,.747-.291,1.449-.819,1.978l-9.048,9.034-4.03-3.957L19.23,1.815c1.049-1.049,2.896-1.052,3.951.004.527.527.818,1.229.818,1.978Zm-15.318,8.462L.302,20.557c-.152.151-.252.347-.285.558-.055.355.014.885.371,1.302.233.271.673.596,1.446.596.421,0,.792.008,1.007,0,1.632-.065,3.218-.435,4.715-1.096,2.382-1.054,4.375-3.253,5.106-5.748h0l-3.979-3.908Z"/></svg>

);
