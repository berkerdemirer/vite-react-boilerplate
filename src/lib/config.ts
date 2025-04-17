import { ENV } from '@/lib/env';

export const config = {
  appName: 'My App',
  appUrl: ENV.VITE_APP_URL,
  appDescription: 'This is my app description',
  email: {
    from: 'abc@yourdomain.com',
  },
  company: {
    name: 'My Company',
    address: '123 Main St, City, Country',
    phone: '+1234567890',
    email: 'mycompany@domain.com',
    jurisdiction: 'Estonian jurisdiction',
  },
  social: {
    twitter: '@demirerberker',
  },
};
