import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsPrescriptionBottlePill = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m11.344,24h-5.844c-1.93,0-3.5-1.57-3.5-3.5V5H0v-2C0,1.343,1.343,0,3,0h16c1.657,0,3,1.343,3,3v2h-2v3.513c-.938-.332-1.948-.513-3-.513v-3H5v3h3v3h-3v2h3v3h-3v4.5c0,.275.225.5.5.5h3.436c.58,1.166,1.404,2.189,2.407,3Zm12.656-7c0,3.859-3.141,7-7,7s-7-3.141-7-7,3.141-7,7-7,7,3.141,7,7Zm-11,0c0,.554.113,1.082.317,1.562l5.244-5.244c-.48-.204-1.008-.317-1.562-.317-2.206,0-4,1.794-4,4Zm8,0c0-.554-.113-1.082-.317-1.562l-5.244,5.244c.48.204,1.008.317,1.562.317,2.206,0,4-1.794,4-4Z"/></svg>

);
