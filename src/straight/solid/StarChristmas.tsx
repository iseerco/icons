import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const StarChristmas = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,24.038l-3.511-8.527L-.039,12l8.528-3.511L12-.038l3.511,8.527,8.528,3.511-8.528,3.511-3.511,8.527ZM6.957,6.957l.544-1.322L2,2l3.634,5.501,1.323-.545Zm10.086,0l1.279.527,3.678-5.483-5.483,3.678.526,1.279Zm0,10.087l-.526,1.279,5.483,3.678-3.678-5.483-1.279.527Zm-10.086,0l-1.279-.527-3.678,5.483,5.483-3.678-.526-1.279Z"/></svg>

);
