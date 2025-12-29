import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const Nine = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M19.992,7.871C19.807,3.626,16.533,.206,12.388,.009c-2.144-.101-4.222,.646-5.807,2.105-1.587,1.461-2.502,3.451-2.576,5.602-.073,2.101,.738,4.204,2.227,5.769,1.508,1.586,3.51,2.479,5.639,2.513,2.111,.024,4.2-.781,5.741-2.297,.135-.133,.265-.27,.389-.41v.708c0,4.411-3.589,8-8,8h-3c-.553,0-1,.448-1,1s.447,1,1,1h3c5.514,0,10-4.486,10-10,0,0-.003-6.087-.008-6.129Zm-7.992,6.129c-3.314,0-6-2.686-6-6s2.686-6,6-6,6,2.686,6,6-2.686,6-6,6Z"/></svg>

);
