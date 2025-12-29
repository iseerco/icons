import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CupTogo = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22.999,4h-1.492l-.338-1.616c-.29-1.381-1.524-2.384-2.936-2.384H5.767c-1.412,0-2.646,1.003-2.937,2.385l-.338,1.615H.999v2h22v-2ZM2.321,8l1.554,13.347c.176,1.513,1.457,2.653,2.979,2.653h10.291c1.523,0,2.804-1.141,2.979-2.653l1.554-13.347H2.321Zm3.061,9h13.234l-.233,2H5.615l-.233-2Zm-.349-3l-.233-2h14.399l-.233,2H5.033Z"/>
</svg>

);
