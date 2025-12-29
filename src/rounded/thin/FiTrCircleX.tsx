import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrCircleX = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="m12,0C5.383,0,0,5.383,0,12s5.383,12,12,12,12-5.383,12-12S18.617,0,12,0Zm0,23c-6.065,0-11-4.935-11-11S5.935,1,12,1s11,4.935,11,11-4.935,11-11,11Zm4.646-16.194l-4.014,5.194,4.014,5.194c.169.219.129.532-.09.701-.091.07-.198.104-.306.104-.149,0-.297-.066-.396-.194l-3.854-4.988-3.854,4.988c-.099.128-.246.194-.396.194-.107,0-.215-.034-.306-.104-.219-.169-.259-.482-.09-.701l4.014-5.194-4.014-5.194c-.169-.219-.129-.532.09-.701.217-.168.531-.13.701.09l3.854,4.988,3.854-4.988c.17-.22.484-.257.701-.09.219.169.259.482.09.701Z"/></svg>

);
