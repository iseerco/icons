import React from 'react';
import type { IconProps } from '../../types';

export const FiBsBooks: React.FC<IconProps> = ({ 
  size = 24, 
  color = 'currentColor',
  className = '',
  ...props 
}) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width={size} height={size} {...props}><path d="M12,16H7V8h5v8ZM5,8H0v8H5V8Zm7-3V2c0-1.105-.895-2-2-2h-3V5h5Zm-5,14v5h5v-5H7Zm-7,0v5H5v-5H0ZM5,5V0H2C.895,0,0,.895,0,2v3H5Zm14.122,2.237l-4.762,1.524,2.617,8.098,4.762-1.524-2.617-8.098Zm-.915-2.857l-.915-2.857c-.337-1.052-1.463-1.632-2.515-1.295l-.952,.305c-1.052,.337-1.632,1.463-1.295,2.515l.915,2.857,4.762-1.524Zm-.315,15.337l1.346,4.283,4.762-1.524-1.346-4.283-4.762,1.524Z"/></svg>
);

FiBsBooks.displayName = 'FiBsBooks';
