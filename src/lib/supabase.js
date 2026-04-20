import { createClient } from '@supabase/supabase-js';
import {
  PROFILE_DATA,
  SKILLS_DATA,
  EXPERIENCE_DATA,
  PROJECTS_DATA,
  EDUCATION_DATA,
  CERTIFICATIONS_DATA
} from '../data/localData';

// Check if Supabase credentials exist
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create Supabase client only if credentials exist
export const supabase = supabaseUrl && supabaseAnonKey
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Check if we should use local data
const useLocalData = !supabase;

// Portfolio data fetch functions with fallback to local data
export const getProfile = async () => {
  if (useLocalData) return PROFILE_DATA;
  try {
    const { data, error } = await supabase.from('profile').select('*').single();
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return PROFILE_DATA;
  }
};

export const getSkills = async () => {
  if (useLocalData) return SKILLS_DATA;
  try {
    const { data, error } = await supabase.from('skills').select('*').order('level', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return SKILLS_DATA;
  }
};

export const getExperience = async () => {
  if (useLocalData) return EXPERIENCE_DATA;
  try {
    const { data, error } = await supabase.from('experience').select('*').order('start_date', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return EXPERIENCE_DATA;
  }
};

export const getProjects = async () => {
  if (useLocalData) return PROJECTS_DATA;
  try {
    const { data, error } = await supabase.from('projects').select('*').order('featured', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return PROJECTS_DATA;
  }
};

export const getEducation = async () => {
  if (useLocalData) return EDUCATION_DATA;
  try {
    const { data, error } = await supabase.from('education').select('*').order('end_date', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return EDUCATION_DATA;
  }
};

export const getCertifications = async () => {
  if (useLocalData) return CERTIFICATIONS_DATA;
  try {
    const { data, error } = await supabase.from('certifications').select('*').order('date', { ascending: false });
    if (error) throw error;
    return data;
  } catch (error) {
    console.warn('Supabase fetch failed, using local data:', error.message);
    return CERTIFICATIONS_DATA;
  }
};

export const submitContactForm = async (formData) => {
  if (useLocalData) {
    console.log('Contact form submission (local mode):', formData);
    // Simulate successful submission
    return { success: true, message: 'Message received! (Demo mode)' };
  }
  try {
    const { data, error } = await supabase.from('contact_messages').insert([formData]);
    if (error) throw error;
    return data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

export const getAllPortfolioData = async () => {
  const [profile, skills, experience, projects, education, certifications] = await Promise.all([
    getProfile(),
    getSkills(),
    getExperience(),
    getProjects(),
    getEducation(),
    getCertifications()
  ]);

  return {
    profile,
    skills,
    experience,
    projects,
    education,
    certifications
  };
};
