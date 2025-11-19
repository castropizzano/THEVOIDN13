import { useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useLocation } from 'react-router-dom';

// Generate a session ID that persists for the browser session
const getSessionId = () => {
  let sessionId = sessionStorage.getItem('thevoidn13_session');
  if (!sessionId) {
    sessionId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
    sessionStorage.setItem('thevoidn13_session', sessionId);
  }
  return sessionId;
};

// Generate or retrieve a visitor ID that persists across sessions
const getVisitorId = () => {
  let visitorId = localStorage.getItem('thevoidn13_visitor');
  if (!visitorId) {
    visitorId = `${Date.now()}-${Math.random().toString(36).substring(7)}`;
    localStorage.setItem('thevoidn13_visitor', visitorId);
  }
  return visitorId;
};

// Rate limiting to prevent analytics spam
const RATE_LIMIT = 100; // max events per session
const checkRateLimit = () => {
  const sessionEventCount = sessionStorage.getItem('analytics_count') || '0';
  const count = parseInt(sessionEventCount);
  
  if (count >= RATE_LIMIT) {
    return false; // Rate limit exceeded
  }
  
  sessionStorage.setItem('analytics_count', String(count + 1));
  return true;
};

export const usePageView = () => {
  const location = useLocation();
  const trackedRef = useRef(false);

  useEffect(() => {
    // Prevent duplicate tracking on mount
    if (trackedRef.current) return;
    trackedRef.current = true;

    const trackPageView = async () => {
      // Check rate limit before tracking
      if (!checkRateLimit()) {
        console.warn('Analytics rate limit exceeded');
        return;
      }
      
      try {
        await supabase.from('page_views').insert({
          page_path: location.pathname,
          page_title: document.title,
          referrer: document.referrer || null,
          user_agent: navigator.userAgent,
          session_id: getSessionId(),
          visitor_id: getVisitorId(),
        });
      } catch (error) {
        console.error('Analytics tracking error:', error);
      }
    };

    trackPageView();

    // Reset on path change
    return () => {
      trackedRef.current = false;
    };
  }, [location.pathname]);
};

export const useTrackSectionEngagement = () => {
  const trackEngagement = async (
    sectionName: string,
    actionType: 'view' | 'scroll' | 'interact',
    durationSeconds?: number
  ) => {
    // Check rate limit before tracking
    if (!checkRateLimit()) {
      return;
    }
    
    try {
      await supabase.from('section_engagement').insert({
        section_name: sectionName,
        action_type: actionType,
        duration_seconds: durationSeconds || null,
        session_id: getSessionId(),
      });
    } catch (error) {
      console.error('Section engagement tracking error:', error);
    }
  };

  return { trackEngagement };
};

export const useTrackSearch = () => {
  const trackSearch = async (query: string, resultsCount: number) => {
    // Check rate limit before tracking
    if (!checkRateLimit()) {
      return;
    }
    
    try {
      await supabase.from('search_queries').insert({
        query,
        results_count: resultsCount,
        session_id: getSessionId(),
      });
    } catch (error) {
      console.error('Search tracking error:', error);
    }
  };

  return { trackSearch };
};
