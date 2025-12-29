import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleSmallRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m10.5,19c-.123,0-.245-.045-.341-.135-.202-.188-.212-.505-.024-.707l4.142-4.43c.471-.471.723-1.08.723-1.729s-.252-1.258-.711-1.717l-4.154-4.441c-.188-.202-.178-.519.024-.707.201-.187.518-.179.707.023l4.142,4.43c.636.636.993,1.496.993,2.412s-.357,1.776-1.004,2.424l-4.13,4.418c-.099.105-.232.158-.365.158Z"/>
</svg>

);
