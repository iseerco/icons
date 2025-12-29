import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const BracketRoundRight = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M10,24c-.29,0-.58-.13-.78-.38-.34-.43-.27-1.06,.16-1.4,.09-.07,4.63-3.84,4.63-10.22S9.42,1.82,9.37,1.78c-.43-.35-.5-.98-.15-1.41,.34-.43,.97-.5,1.4-.15,.22,.18,5.38,4.39,5.38,11.78s-5.16,11.61-5.38,11.78c-.18,.15-.41,.22-.62,.22Z"/></svg>

);
