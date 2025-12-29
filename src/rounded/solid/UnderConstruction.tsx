import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const UnderConstruction = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.048,13h3.907l.596,2h-5.099l.596-2Zm1.753-5.886l-1.157,3.886h2.715l-1.159-3.886c-.089-.136-.311-.137-.399,0Zm-10.354,1.388L8.501,1.448c1.931-1.931,5.062-1.931,6.993,0l7.055,7.055c1.931,1.931,1.931,5.062,0,6.994l-7.055,7.055c-1.931,1.931-5.062,1.931-6.993,0L1.447,15.496c-1.931-1.931-1.931-5.062,0-6.993Zm10.553-3.491c-.889,0-1.671.502-2.041,1.311l-2.594,8.678h-.366c-.552,0-1,.448-1,1s.448,1,1,1h10c.552,0,1-.448,1-1s-.448-1-1-1h-.362l-2.598-8.678c-.37-.809-1.152-1.311-2.041-1.311Z"/>
</svg>

);
