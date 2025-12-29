import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UserVolunteer = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,14c-4.963,0-9,4.038-9,9,0,.552,.447,1,1,1H20c.553,0,1-.448,1-1,0-4.962-4.037-9-9-9Zm.732,8.135c-.438,.367-1.072,.367-1.51,0-.967-.81-2.519-2.625-2.519-3.924,0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801c0-.995,.733-1.801,1.637-1.801s1.637,.806,1.637,1.801c0,1.299-1.552,3.114-2.519,3.924Zm-.732-10.135c-3.309,0-6-2.691-6-6S8.691,0,12,0s6,2.691,6,6-2.691,6-6,6Z"/>
</svg>

);
