import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
  ActivityIndicator,
  View,
} from 'react-native';
import { getColor, mergeStyles } from '../../lib/utils';

// Variant options for the button
export type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'ghost' | 'link';

// Size options for the button
export type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

// Button props interface
export interface ButtonProps extends TouchableOpacityProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  disabled?: boolean;
  style?: any;
  textStyle?: any;
}

export function Button({
  children,
  variant = 'default',
  size = 'default',
  loading = false,
  disabled = false,
  style,
  textStyle,
  ...props
}: ButtonProps) {
  // Generate styles based on variant and size
  const buttonStyles = [
    styles.base,
    styles.variants[variant],
    styles.sizes[size],
    disabled && styles.disabled,
    style,
  ];

  // Generate text styles based on variant
  const textStyles = [
    styles.text,
    styles.textVariants[variant],
    textStyle,
  ];

  return (
    <TouchableOpacity
      style={buttonStyles}
      disabled={disabled || loading}
      activeOpacity={0.7}
      {...props}>
      {loading ? (
        <ActivityIndicator 
          size="small" 
          color={variant === 'outline' || variant === 'ghost' || variant === 'link' 
            ? getColor('primary') 
            : getColor('primaryForeground')} 
        />
      ) : (
        typeof children === 'string' ? (
          <Text style={textStyles}>{children}</Text>
        ) : (
          children
        )
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  base: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    overflow: 'hidden',
  },
  // Variant styles
  variants: {
    default: {
      backgroundColor: getColor('primary'),
    },
    destructive: {
      backgroundColor: getColor('destructive'),
    },
    outline: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: getColor('border'),
    },
    secondary: {
      backgroundColor: getColor('secondary'),
    },
    ghost: {
      backgroundColor: 'transparent',
    },
    link: {
      backgroundColor: 'transparent',
      paddingVertical: 0,
      paddingHorizontal: 0,
    },
  },
  // Size styles
  sizes: {
    default: {
      paddingHorizontal: 16,
      paddingVertical: 8,
      minHeight: 40,
    },
    sm: {
      paddingHorizontal: 12,
      paddingVertical: 6,
      minHeight: 32,
    },
    lg: {
      paddingHorizontal: 24,
      paddingVertical: 10,
      minHeight: 48,
    },
    icon: {
      width: 40,
      height: 40,
      paddingHorizontal: 0,
      paddingVertical: 0,
    },
  },
  // Text base style
  text: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  // Text variant styles
  textVariants: {
    default: {
      color: getColor('primaryForeground'),
    },
    destructive: {
      color: 'white',
    },
    outline: {
      color: getColor('foreground'),
    },
    secondary: {
      color: getColor('secondaryForeground'),
    },
    ghost: {
      color: getColor('foreground'),
    },
    link: {
      color: getColor('primary'),
      textDecorationLine: 'underline',
    },
  },
  // Disabled state
  disabled: {
    opacity: 0.5,
  },
});