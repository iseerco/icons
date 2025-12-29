import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonDress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm9.761,12.174l-3.238-3.548,1.109,8.874h-2.133v4h-2v-4h-2v4h-2v-4h-2.133l1.109-8.874-3.238,3.548-1.478-1.349s5.807-6.366,5.85-6.41l.023-.025h.001c.547-.552,1.304-.891,2.131-.891h1.469c.827,0,1.584,.339,2.131,.892h.001s.023,.024,.023,.024c.043,.044,5.85,6.41,5.85,6.41l-1.478,1.349Zm-6.527-6.674h-1.469c-.473,0-.9,.288-.992,.876l-1.141,9.124h5.734l-1.141-9.124c-.074-.581-.487-.876-.992-.876Z"/></svg>

);
