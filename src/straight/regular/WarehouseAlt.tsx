import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const WarehouseAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.849,7.68L13.849,.637c-1.088-.852-2.609-.852-3.697,0L1.151,7.68c-.731,.572-1.151,1.434-1.151,2.363v13.957H6V13c0-.551,.448-1,1-1h10c.552,0,1,.449,1,1v11h6V10.043c0-.929-.42-1.791-1.151-2.363Zm-.849,14.32h-2V13c0-1.654-1.346-3-3-3H7c-1.654,0-3,1.346-3,3v9H2V10.043c0-.31,.14-.597,.384-.788L11.384,2.212c.363-.284,.869-.284,1.232,0l9,7.043c.244,.191,.384,.478,.384,.788v11.957Zm-14-2h3v4h-3v-4Zm0-6h3v4h-3v-4Zm5,6h3v4h-3v-4Z"/></svg>

);
