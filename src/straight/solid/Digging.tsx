import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Digging = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m11.379,24l3.091-4.415L.936,10.325l1.129-1.65,2.739,1.874.919-2.561c.289-.806.91-1.451,1.705-1.771.795-.32,1.689-.284,2.456.098l.47.177c1.148.572,2.022,1.552,2.461,2.759l1.425,4.143-1.881.684-1.424-4.143c-.039-.106-.094-.202-.143-.302l-1.407,3.923,6.232,4.393,3.474-4.962,4.957,11.015h-12.668Zm.121-19c1.381,0,2.5-1.119,2.5-2.5s-1.119-2.5-2.5-2.5-2.5,1.119-2.5,2.5,1.119,2.5,2.5,2.5ZM0,24h2.154l2.827-7.878-1.729-1.183L0,24Zm8,0h2v-4.443l-2-1.368v5.812Z"/>
</svg>

);
