import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ScannerGun = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m24,0v2h-7V0h7Zm-7,6h7v-2h-7v2Zm0,15h7v-2h-7v2Zm0-8h7v-2h-7v2Zm0-3h7v-3h-7v3Zm0,8h7v-3h-7v3Zm0,6h7v-2h-7v2ZM0,8c0,2.757,2.243,5,5,5h10V3H5C2.243,3,0,5.243,0,8Zm5,7c-.98,0-1.914-.203-2.761-.568L.113,20.757c-.41,1.318.327,2.72,1.645,3.129,1.319.41,2.72-.327,3.129-1.645l1.761-5.241h2.351v-2h-4Z"/>
</svg>

);
