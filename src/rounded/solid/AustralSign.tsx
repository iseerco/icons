import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const AustralSign = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M24,16c0-.55-.45-1-1-1h-2.07l-.79-2h2.86c.55,0,1-.45,1-1s-.45-1-1-1h-3.64l-3.21-8.17c-.68-1.74-2.27-2.83-4.14-2.83s-3.46,1.08-4.14,2.83l-3.21,8.17H1c-.55,0-1,.45-1,1s.45,1,1,1H3.86l-.79,2H1c-.55,0-1,.45-1,1s.45,1,1,1h1.29L.07,22.65c-.2,.51,.05,1.09,.57,1.3,.51,.2,1.09-.05,1.3-.57l2.5-6.38h15.13l2.5,6.38c.15,.39,.53,.63,.93,.63,.12,0,.25-.02,.37-.07,.51-.2,.77-.78,.57-1.3l-2.22-5.65h1.29c.55,0,1-.45,1-1ZM9.72,3.56c.45-1.15,1.47-1.56,2.28-1.56s1.83,.41,2.28,1.56l2.92,7.44H6.79l2.92-7.44ZM5.22,15l.79-2h11.99l.79,2H5.22Z"/></svg>

);
