import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const EnvelopeOpenText = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.769,9.343l-1.769-1.694V3c0-1.654-1.346-3-3-3H6c-1.654,0-3,1.346-3,3V7.651l-1.766,1.691C.451,10.093,.001,11.146,.001,12.231v11.769H24V12.231c0-1.086-.448-2.139-1.231-2.889ZM6,2h12c.552,0,1,.449,1,1V12.242l-4.879,4.879c-1.133,1.133-3.109,1.133-4.243,0l-4.878-4.879V3c0-.551,.449-1,1-1ZM22,22H2V12.231c.001-.051,.004-.102,.008-.153l6.456,6.457c.945,.944,2.2,1.464,3.536,1.464s2.591-.52,3.535-1.464l6.458-6.459c.004,.051,.007,.103,.007,.154v9.769Zm-5-15H7v-2h10v2Zm-2,4H7v-2H15v2Z"/></svg>

);
