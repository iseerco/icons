import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const SendMoney = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m22,12h2c0,6.617-5.383,12-12,12S0,18.617,0,12,5.383,0,12,0v2C6.486,2,2,6.486,2,12s4.486,10,10,10,10-4.486,10-10Zm-11-6v1c-1.654,0-3,1.346-3,3,0,1.359.974,2.51,2.315,2.733l3.04.506c.374.062.645.382.645.761,0,.552-.448,1-1,1h-2c-.552,0-1-.448-1-1h-2c0,1.654,1.346,3,3,3v1h2v-1c1.654,0,3-1.346,3-3,0-1.359-.974-2.51-2.315-2.733l-3.04-.506c-.374-.062-.645-.382-.645-.761,0-.552.448-1,1-1h2c.552,0,1,.448,1,1h2c0-1.654-1.346-3-3-3v-1h-2ZM22,0h-5v2h3.586l-4.293,4.293,1.414,1.414,4.293-4.293v3.586h2V2c0-1.103-.897-2-2-2Z"/>
</svg>

);
