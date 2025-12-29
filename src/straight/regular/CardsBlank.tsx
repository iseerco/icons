import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const CardsBlank = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M21.85,2.977L12.414,.121c-.768-.225-1.579-.135-2.283,.25-.702,.386-1.213,1.021-1.435,1.782l-.555,1.848H3c-1.654,0-3,1.346-3,3V24H16v-2.045l3.099,1.151L23.88,6.693c.462-1.588-.453-3.257-2.03-3.716Zm-7.85,19.023H2V7c0-.551,.448-1,1-1H13c.552,0,1,.449,1,1v15Zm7.96-15.866l-4.18,14.348-1.78-.662V7c0-1.654-1.346-3-3-3h-2.77l.385-1.28c.075-.256,.245-.467,.479-.596,.235-.129,.505-.158,.751-.086l9.436,2.856c.529,.154,.835,.711,.681,1.24Z"/>
</svg>

);
