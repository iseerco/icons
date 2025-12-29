import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const FiBrBracketsRound = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}><path d="M8.27,.69c.44,.7,.24,1.63-.46,2.07-.19,.12-4.81,3.18-4.81,9.23s4.19,9.15,4.37,9.28c.67,.48,.83,1.41,.36,2.09-.29,.41-.76,.64-1.23,.64-.3,0-.59-.09-.86-.27-.23-.16-5.64-4.04-5.64-11.73S5.94,.4,6.19,.23c.7-.44,1.63-.24,2.07,.46Zm10.66-.38c-.65-.51-1.59-.39-2.1,.26s-.4,1.59,.25,2.1c.16,.13,3.93,3.19,3.93,9.32s-4.18,9.14-4.37,9.27c-.67,.48-.84,1.41-.36,2.09,.29,.42,.76,.64,1.23,.64,.3,0,.6-.09,.86-.27,.23-.16,5.64-4.04,5.64-11.73S19.13,.48,18.92,.32Z"/></svg>

);
