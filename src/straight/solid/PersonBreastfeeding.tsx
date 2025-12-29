import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonBreastfeeding = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,12c-3.309,0-6-2.691-6-6S8.691,0,12,0s6,2.691,6,6-2.691,6-6,6Zm8.805,5.066c-1.061-1.892-3.066-3.066-5.234-3.066h-7.141c-2.168,0-4.174,1.175-5.234,3.067l-2.195,4.81v1.295l1.237,.828H12.269l-3.269-2.451v-4.549h2v3.451l4.692,3.549h6.07l1.237-.828v-1.295l-2.195-4.811Zm-5.305,4.934c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5,2.5,1.119,2.5,2.5-1.119,2.5-2.5,2.5Z"/>
</svg>

);
