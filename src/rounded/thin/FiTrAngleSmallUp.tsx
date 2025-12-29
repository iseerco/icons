import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiTrAngleSmallUp = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="m18.5,15c-.122,0-.245-.045-.342-.135l-4.43-4.143c-.941-.939-2.527-.928-3.445-.012l-4.441,4.154c-.202.188-.519.178-.707-.023-.188-.202-.178-.519.023-.707l4.43-4.143c1.271-1.271,3.541-1.283,4.836.012l4.418,4.131c.201.188.212.505.023.707-.099.105-.231.158-.365.158Z"/>
</svg>

);
