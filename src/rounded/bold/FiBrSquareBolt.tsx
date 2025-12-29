import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrSquareBolt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M15.75,11.61c.37,.68,.33,1.51-.1,2.16l-2.88,4.54c-.29,.45-.77,.7-1.27,.7-.28,0-.55-.08-.8-.23-.7-.44-.91-1.37-.46-2.07l2.03-3.2h-2.15c-.67,0-1.3-.32-1.7-.85-.4-.54-.52-1.23-.33-1.87,.04-.13,.09-.25,.17-.37l2.97-4.71c.44-.7,1.37-.91,2.07-.47,.7,.44,.91,1.37,.47,2.07l-2.02,3.2h2.15c.78,0,1.49,.42,1.85,1.11Zm8.25-6.11v13c0,3.03-2.47,5.5-5.5,5.5H5.5c-3.03,0-5.5-2.47-5.5-5.5V5.5C0,2.47,2.47,0,5.5,0h13c3.03,0,5.5,2.47,5.5,5.5Zm-3,0c0-1.38-1.12-2.5-2.5-2.5H5.5c-1.38,0-2.5,1.12-2.5,2.5v13c0,1.38,1.12,2.5,2.5,2.5h13c1.38,0,2.5-1.12,2.5-2.5V5.5Z"/></svg>

);
