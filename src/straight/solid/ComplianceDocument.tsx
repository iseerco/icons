import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const ComplianceDocument = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.454,24.111l-.604-.306c-1.135-.566-4.85-2.699-4.85-6.27v-3.536c0-.862.551-1.625,1.37-1.896l4.13-1.369,4.13,1.369c.819.271,1.37,1.034,1.37,1.896v3.536c0,4.03-3.764,5.858-4.917,6.322l-.629.253ZM15,.586v4.414h4.414L15,.586Zm-3.56,19.414h-6.44v-2h6.015c-.01-.152-.015-.307-.015-.464v-1.536h-6v-2h6c0-1.727,1.102-3.252,2.741-3.795l4.759-1.578,1.5.497v-2.124h-7V0H3C1.343,0,0,1.343,0,3v21h14.478c-1.173-.947-2.402-2.277-3.038-4Z"/>
</svg>

);
