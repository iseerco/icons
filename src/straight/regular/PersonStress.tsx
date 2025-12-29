import * as React from 'react';

interface Props extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  color?: string;
  className?: string;
}

export const PersonStress = ({ size = 24, color = 'currentColor', className, ...props }: Props) => (
  
<svg {...props} width={size} height={size} viewBox="0 0 24 24" fill={color} className={className}>
  <path d="M12,10c1.657,0,3,1.343,3,3s-1.343,3-3,3-3-1.343-3-3,1.343-3,3-3Zm10-1h-2v6.323l-4.192,1.677h-7.615l-4.192-1.677v-6.323H2v7.677l5,2v5.323h2v-5h6v5h2v-5.323l5-2v-7.677ZM5.964,6.787l1.636-1.636,1.899,2.85,.5-.5-.869-5.975c-.108-.532-.765-.73-1.149-.346l-1.626,1.626L5,0,2.712,2.288l2.15,4.335c.22,.41,.773,.492,1.102,.163Zm10.486-1.636l1.636,1.636c.329,.329,.883,.247,1.102-.163l2.15-4.335-2.288-2.288-1.357,2.804-1.626-1.626c-.384-.384-1.041-.186-1.149,.346l-.869,5.975,.5,.5,1.899-2.85Z"/>
</svg>

);
