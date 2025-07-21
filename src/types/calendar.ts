export interface CalendarEvent {
  id: number;
  title: string;
  category: 'business' | 'spiritual' | 'personal' | 'financial' | 'health' | 'family';
  subcategory: string;
  start: string;
  end: string;
  description?: string;
  location?: string;
  recurring: 'none' | 'daily' | 'weekly' | 'bi-weekly' | 'monthly';
  reminders: string[];
  color: string;
  client?: {
    name: string;
    phone: string;
    service: string;
    expectedRevenue: number;
    notes: string;
  };
  status?: 'confirmed' | 'pending' | 'cancelled';
}

export interface Category {
  label: string;
  icon: any;
  color: string;
  bgColor: string;
  subcategories: Record<string, string>;
}

export interface FilterCategories {
  business: boolean;
  spiritual: boolean;
  personal: boolean;
  financial: boolean;
  health: boolean;
  family: boolean;
}

export interface Notification {
  id: number;
  message: string;
  type: 'success' | 'error' | 'warning';
  created: Date;
}

export type ViewType = 'month' | 'week' | 'day';
export type UserType = 'kofie' | 'lachele';