// Utility functions for styling and component composition

// Merges multiple style objects together
export function mergeStyles(...styles: any[]) {
  return Object.assign({}, ...styles.filter(Boolean));
}

// Color palette based on web app
export const colors = {
  // Light mode colors
  light: {
    background: '#FFFFFF',
    foreground: '#252525',
    primary: '#333333',
    primaryForeground: '#FBFBFB',
    secondary: '#F7F7F7',
    secondaryForeground: '#333333',
    muted: '#F7F7F7',
    mutedForeground: '#8D8D8D',
    accent: '#F7F7F7',
    accentForeground: '#333333',
    destructive: '#F43F5E',
    border: '#EBEBEB',
    input: '#EBEBEB',
  },
  // Dark mode colors
  dark: {
    background: '#252525',
    foreground: '#FBFBFB',
    primary: '#EBEBEB',
    primaryForeground: '#333333',
    secondary: '#444444',
    secondaryForeground: '#FBFBFB',
    muted: '#444444',
    mutedForeground: '#B4B4B4',
    accent: '#444444',
    accentForeground: '#FBFBFB',
    destructive: '#FF6B8B',
    border: 'rgba(255, 255, 255, 0.1)',
    input: 'rgba(255, 255, 255, 0.15)',
  }
};

// Theme-aware color function (for future dark mode support)
export function getColor(colorName: keyof typeof colors.light) {
  // Currently just returns light colors
  // TODO: Add dark mode detection and switching
  return colors.light[colorName];
}