import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PlayMicrophone = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M11,21.978h1v2h-1C4.935,23.978,0,19.043,0,12.978H2c0,4.962,4.038,9,9,9Zm13-9h-2c0,.744-.101,1.463-.272,2.155l1.802,1.013c.303-1.004,.47-2.067,.47-3.168Zm-10,11.022l9.708-5.459-9.708-5.459v10.919Zm.38-13l5.414,3.045c.09-.34,.161-.688,.206-1.045v-4h-5v-2h4.931c-.495-3.94-3.859-7-7.931-7S4.564,3.06,4.069,7h4.931v2H4v2h5v2H4.069c.495,3.94,3.859,7,7.931,7V11h2.38Z"/>
</svg>

);
