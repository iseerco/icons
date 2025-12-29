import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsTrademark = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M0,5H11v1H6v13h-1V6H0v-1Zm23.11,.04c-.51-.14-1.05,.1-1.36,.6l-3.75,6.69-3.76-6.71c-.3-.49-.84-.73-1.35-.59-.54,.15-.89,.67-.89,1.32v12.63h1V6.37c0-.23,.09-.34,.16-.36,.08-.02,.16,.03,.22,.13l4.62,8.25,4.61-8.24c.06-.11,.15-.16,.23-.14,.07,.02,.16,.13,.16,.36v12.63h1V6.37c0-.65-.35-1.17-.89-1.32Z"/></svg>

);
