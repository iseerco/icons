import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonDressSimple = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M9.5,2.5c0-1.381,1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5-2.5-1.119-2.5-2.5Zm5.5,17.5v4h-2v-4h-2v4h-2v-4h-2.133l1.422-11.372c.187-1.498,1.467-2.628,2.977-2.628h1.469c1.51,0,2.79,1.13,2.977,2.628l1.422,11.372h-2.133Zm-5.867-2h5.734l-1.141-9.124c-.062-.5-.489-.876-.992-.876h-1.469c-.503,0-.93,.376-.992,.876l-1.141,9.124Z"/></svg>

);
