import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTsBluetoothAlt = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M19.811,6.513L11.677,0h-.677V10.803L4.802,6.102l-.604,.797,6.725,5.102-6.725,5.102,.604,.797,6.198-4.702v10.803h.763l8.047-6.513-7.233-5.487,7.233-5.487ZM12,1.478l6.189,5.009-6.189,4.695V1.478Zm6.189,16.035l-6.189,5.009V12.817l6.189,4.695Z"/>
</svg>

);
