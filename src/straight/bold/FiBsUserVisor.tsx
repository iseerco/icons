import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBsUserVisor = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m21,20v4h-3v-4c0-1.103-.897-2-2-2h-8c-1.103,0-2,.897-2,2v4h-3v-4c0-2.757,2.243-5,5-5h8c2.757,0,5,2.243,5,5Zm-7.043-1c-.629.623-1.143,1.415-1.471,2.386-.229.719-.414,1.583-.486,2.614,0,.024,1.5-1.5,2.286-1.5.593,0,1.367.587,1.714,1-.1-.863-.257-1.515-.586-2.294-.329-.803-.836-1.591-1.457-2.206ZM4,8v-2c0-.552.448-1,1-1h.295c.863-2.887,3.541-5,6.705-5s5.842,2.112,6.705,5h.295c.552,0,1,.448,1,1v2c0,.552-.448,1-1,1h-.295c-.863,2.888-3.541,5-6.705,5s-5.842-2.113-6.705-5h-.295c-.552,0-1-.448-1-1Zm11.444,1h-6.888c.694,1.19,1.97,2,3.444,2s2.75-.81,3.444-2Zm-6.888-4h6.887c-.694-1.19-1.97-2-3.444-2s-2.75.81-3.444,2Z"/></svg>

);
