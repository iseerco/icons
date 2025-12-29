import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsGrass = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M24,8.034c-2.044,.715-3.593,1.861-4.774,3.201-.96,3.736-1.178,6.916-1.217,9.765h-2.061c-.054-6.145,1.936-15.28,6.785-20.896-6.65,1.185-10.371,5.244-12.416,9.655-1.277-3.316-3.491-6.418-7.321-7.759,3.785,5.98,4.789,13.042,4.97,18.19-.009,.283-.015,.556-.016,.81h-2.469c0-1.856-.239-4.884-.922-8.14-1.4-.988-3.278-2.078-4.56-2.527,2.239,3.582,2.87,6.507,2.978,10.667H0v3H24v-3h-3.011c-.05-4.489-.131-8.957,3.011-12.966Zm-8.825-.621c-1.759,5.093-2.115,9.745-2.167,13.586h-1.986c.026-2.837,.313-8.708,4.152-13.586Z"/>
</svg>

);
