import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrCowbell = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M22.93,15.71l-1.1-6.18c-.44-2.48-2.49-4.31-4.96-4.51,.09-.33,.13-.67,.13-1.02,0-2.21-1.79-4-4-4h-2c-2.21,0-4,1.79-4,4,0,.35,.05,.69,.13,1.02-2.47,.2-4.52,2.04-4.96,4.51l-1.1,6.18c-.23,1.31,.12,2.66,.98,3.68,.86,1.02,2.11,1.61,3.45,1.61h2.63c.45,1.72,2.01,3,3.87,3s3.43-1.28,3.87-3h2.63c1.33,0,2.59-.59,3.45-1.61,.86-1.02,1.21-2.37,.98-3.68ZM11,3h2c.55,0,1,.45,1,1s-.45,1-1,1h-2c-.55,0-1-.45-1-1s.45-1,1-1Zm8.65,14.46c-.17,.2-.54,.54-1.15,.54H5.5c-.61,0-.98-.34-1.15-.54s-.43-.63-.33-1.23l1.1-6.18c.21-1.19,1.25-2.06,2.46-2.06h8.83c1.21,0,2.25,.87,2.46,2.06l1.1,6.18c.11,.6-.16,1.03-.33,1.23Z"/></svg>

);
