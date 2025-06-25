import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

if (!supabaseUrl || !supabaseAnonKey) {
  console.warn('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true
  }
});

// Auth helpers
export const auth = {
  signUp: async (email: string, password: string, userData: any) => {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData
      }
    });
    return { data, error };
  },

  signIn: async (email: string, password: string) => {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    return { data, error };
  },

  signOut: async () => {
    const { error } = await supabase.auth.signOut();
    return { error };
  },

  getCurrentUser: async () => {
    const { data: { user }, error } = await supabase.auth.getUser();
    return { user, error };
  },

  onAuthStateChange: (callback: (event: string, session: any) => void) => {
    return supabase.auth.onAuthStateChange(callback);
  }
};

// Database helpers
export const db = {
  // Users
  createUserProfile: async (userId: string, profileData: any) => {
    const { data, error } = await supabase
      .from('user_profiles')
      .insert({ user_id: userId, ...profileData })
      .select()
      .single();
    return { data, error };
  },

  getUserProfile: async (userId: string) => {
    const { data, error } = await supabase
      .from('user_profiles')
      .select('*')
      .eq('user_id', userId)
      .single();
    return { data, error };
  },

  // Providers
  getProviders: async (filters?: any) => {
    let query = supabase
      .from('providers')
      .select(`
        *,
        user_profiles(*),
        provider_specialties(*),
        reviews(rating)
      `);

    if (filters?.location) {
      // Add location-based filtering
    }

    if (filters?.category) {
      query = query.eq('category', filters.category);
    }

    const { data, error } = await query;
    return { data, error };
  },

  getProviderById: async (id: string) => {
    const { data, error } = await supabase
      .from('providers')
      .select(`
        *,
        user_profiles(*),
        provider_specialties(*),
        reviews(*),
        certifications(*)
      `)
      .eq('id', id)
      .single();
    return { data, error };
  },

  // Bookings
  createBooking: async (bookingData: any) => {
    const { data, error } = await supabase
      .from('bookings')
      .insert(bookingData)
      .select()
      .single();
    return { data, error };
  },

  getUserBookings: async (userId: string) => {
    const { data, error } = await supabase
      .from('bookings')
      .select(`
        *,
        client:user_profiles!client_id(*),
        provider:user_profiles!provider_id(*)
      `)
      .or(`client_id.eq.${userId},provider_id.eq.${userId}`)
      .order('created_at', { ascending: false });
    return { data, error };
  },

  // Messages
  getBookingMessages: async (bookingId: string) => {
    const { data, error } = await supabase
      .from('messages')
      .select(`
        *,
        sender:user_profiles(*)
      `)
      .eq('booking_id', bookingId)
      .order('created_at', { ascending: true });
    return { data, error };
  },

  sendMessage: async (messageData: any) => {
    const { data, error } = await supabase
      .from('messages')
      .insert(messageData)
      .select()
      .single();
    return { data, error };
  },

  // Service Categories
  getServiceCategories: async () => {
    const { data, error } = await supabase
      .from('service_categories')
      .select(`
        *,
        subcategories(*)
      `)
      .order('name');
    return { data, error };
  }
};