import React, { useState } from 'react';
import { 
  Calendar, Plus, ChevronLeft, ChevronRight,
  Crown, Cross, DollarSign, Heart, Scissors, Stethoscope,
  AlertTriangle, CheckCircle, Target
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  CalendarEvent, 
  Category, 
  FilterCategories, 
  Notification, 
  ViewType, 
  UserType 
} from '@/types/calendar';

const UnifiedLifeCalendar: React.FC = () => {
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [currentView, setCurrentView] = useState<ViewType>('month');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [currentUser, setCurrentUser] = useState<UserType>('kofie');
  const [showEventModal, setShowEventModal] = useState<boolean>(false);
  const [editingEvent, setEditingEvent] = useState<CalendarEvent | null>(null);
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const [filterCategories, setFilterCategories] = useState<FilterCategories>({
    business: true,
    spiritual: true,
    personal: true,
    financial: true,
    health: true,
    family: true
  });

  const [newEvent, setNewEvent] = useState<Partial<CalendarEvent>>({
    title: '',
    category: 'business',
    subcategory: '',
    start: '',
    end: '',
    description: '',
    location: '',
    recurring: 'none',
    reminders: [],
    color: 'bg-primary'
  });

  const [events, setEvents] = useState<CalendarEvent[]>([
    {
      id: 1,
      title: "Marcus Johnson - Biden Cut & Hot Shave",
      category: "business",
      subcategory: "client_appointment",
      start: "2025-01-12T10:00:00",
      end: "2025-01-12T11:30:00",
      client: {
        name: "Marcus Johnson",
        phone: "(555) 123-4567",
        service: "Biden Cut + Hot Shave",
        expectedRevenue: 75,
        notes: "Prefers conversation about sports, regular every 2 weeks"
      },
      status: "confirmed",
      recurring: "bi-weekly",
      color: "bg-primary",
      reminders: []
    },
    {
      id: 2,
      title: "Morning Prayer & Bible Study",
      category: "spiritual",
      subcategory: "daily_practice",
      start: "2025-01-12T06:00:00",
      end: "2025-01-12T07:00:00",
      description: "Daily spiritual foundation - prayer, scripture, meditation",
      recurring: "daily",
      color: "bg-spiritual",
      reminders: []
    },
    {
      id: 3,
      title: "Weekly Financial Review",
      category: "financial",
      subcategory: "stewardship",
      start: "2025-01-12T19:00:00",
      end: "2025-01-12T20:30:00",
      description: "Review weekly income, allocate to envelopes, plan investments",
      recurring: "weekly",
      color: "bg-success",
      reminders: []
    },
    {
      id: 4,
      title: "Morning Workout - Strength Training",
      category: "health",
      subcategory: "fitness",
      start: "2025-01-12T07:30:00",
      end: "2025-01-12T08:30:00",
      description: "Upper body strength training + cardio",
      recurring: "daily",
      color: "bg-health",
      reminders: []
    },
    {
      id: 5,
      title: "Date Night with Dr. Lachele",
      category: "family",
      subcategory: "marriage",
      start: "2025-01-12T18:00:00",
      end: "2025-01-12T22:00:00",
      description: "Quality time together - dinner and conversation",
      recurring: "weekly",
      color: "bg-family",
      reminders: []
    }
  ]);

  const categories: Record<string, Category> = {
    business: {
      label: 'Business Operations',
      icon: Scissors,
      color: 'text-primary',
      bgColor: 'bg-primary',
      subcategories: {
        client_appointment: 'Client Appointments',
        operations: 'Business Operations',
        marketing: 'Marketing & Growth',
        admin: 'Administrative Tasks'
      }
    },
    spiritual: {
      label: 'Spiritual Life',
      icon: Cross,
      color: 'text-spiritual',
      bgColor: 'bg-spiritual',
      subcategories: {
        daily_practice: 'Daily Practices',
        church: 'Church & Worship',
        study: 'Bible Study',
        ministry: 'Ministry Work'
      }
    },
    financial: {
      label: 'Financial Stewardship',
      icon: DollarSign,
      color: 'text-success',
      bgColor: 'bg-success',
      subcategories: {
        stewardship: 'Financial Review',
        bills: 'Bills & Payments',
        investments: 'Investment Planning',
        goals: 'Financial Goals'
      }
    },
    health: {
      label: 'Health & Vitality',
      icon: Stethoscope,
      color: 'text-health',
      bgColor: 'bg-health',
      subcategories: {
        fitness: 'Exercise & Fitness',
        nutrition: 'Nutrition & Meals',
        medical: 'Medical Appointments',
        wellness: 'Mental/Emotional Wellness'
      }
    },
    family: {
      label: 'Family & Personal',
      icon: Heart,
      color: 'text-family',
      bgColor: 'bg-family',
      subcategories: {
        marriage: 'Marriage & Romance',
        recreation: 'Family Fun',
        education: 'Learning & Growth',
        social: 'Social Events'
      }
    },
    personal: {
      label: 'Personal Development',
      icon: Target,
      color: 'text-accent',
      bgColor: 'bg-accent',
      subcategories: {
        learning: 'Education & Learning',
        hobbies: 'Hobbies & Interests',
        goals: 'Personal Goals',
        reflection: 'Reflection & Planning'
      }
    }
  };

  // Get events for current view (currently unused but kept for future week view implementation)
  // const getEventsForView = (): CalendarEvent[] => {
  //   return events.filter(event => {
  //     if (!filterCategories[event.category]) return false;
    
  //     const eventDate = new Date(event.start);
  //     const viewDate = currentView === 'month' ? currentDate : selectedDate;
    
  //     if (currentView === 'month') {
  //       return eventDate.getMonth() === viewDate.getMonth() && 
  //              eventDate.getFullYear() === viewDate.getFullYear();
  //     } else if (currentView === 'week') {
  //       const weekStart = new Date(viewDate);
  //       weekStart.setDate(viewDate.getDate() - viewDate.getDay());
  //       const weekEnd = new Date(weekStart);
  //       weekEnd.setDate(weekStart.getDate() + 6);
  //       return eventDate >= weekStart && eventDate <= weekEnd;
  //     } else {
  //       return eventDate.toDateString() === viewDate.toDateString();
  //     }
  //   });
  // };

  // Get events for specific date
  const getEventsForDate = (date: Date): CalendarEvent[] => {
    return events.filter(event => {
      if (!filterCategories[event.category]) return false;
      const eventDate = new Date(event.start);
      return eventDate.toDateString() === date.toDateString();
    });
  };

  // Calendar navigation
  const navigateCalendar = (direction: number): void => {
    const newDate = new Date(currentDate);
    if (currentView === 'month') {
      newDate.setMonth(newDate.getMonth() + direction);
    } else if (currentView === 'week') {
      newDate.setDate(newDate.getDate() + (direction * 7));
    } else {
      newDate.setDate(newDate.getDate() + direction);
    }
    setCurrentDate(newDate);
    setSelectedDate(newDate);
  };

  // Create notification
  const createNotification = (message: string, type: 'success' | 'error' | 'warning' = 'success'): void => {
    const notification: Notification = {
      id: Date.now(),
      message,
      type,
      created: new Date()
    };
    setNotifications(prev => [notification, ...prev.slice(0, 2)]);
  
    setTimeout(() => {
      setNotifications(prev => prev.filter(n => n.id !== notification.id));
    }, 3000);
  };

  // Add new event
  const addEvent = (): void => {
    const categoryColor: Record<string, string> = {
      business: 'bg-primary',
      spiritual: 'bg-spiritual', 
      financial: 'bg-success',
      health: 'bg-health',
      family: 'bg-family',
      personal: 'bg-accent'
    };

    const event: CalendarEvent = {
      id: Date.now(),
      title: newEvent.title || '',
      category: newEvent.category || 'business',
      subcategory: newEvent.subcategory || '',
      start: newEvent.start || '',
      end: newEvent.end || newEvent.start || '',
      description: newEvent.description,
      location: newEvent.location,
      recurring: newEvent.recurring || 'none',
      reminders: newEvent.reminders || [],
      color: categoryColor[newEvent.category || 'business'] || 'bg-primary'
    };
  
    setEvents(prev => [...prev, event]);
    setNewEvent({
      title: '', category: 'business', subcategory: '', start: '', end: '',
      description: '', location: '', recurring: 'none', reminders: [], color: 'bg-primary'
    });
    setShowEventModal(false);
  
    createNotification(`Event "${event.title}" created successfully!`, 'success');
  };

  // Calendar Header
  const CalendarHeader: React.FC = () => (
    <div className="glass-card p-6 mb-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3">
            <Crown className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-display font-bold gradient-text">
              Divine Life Calendar
            </h1>
          </div>
          <div className="text-muted-foreground">|</div>
          <div className="flex space-x-2">
            <Button
              onClick={() => setCurrentUser('kofie')}
              variant={currentUser === 'kofie' ? 'default' : 'outline'}
              size="sm"
            >
              👑 Dr. Kofie
            </Button>
            <Button
              onClick={() => setCurrentUser('lachele')}
              variant={currentUser === 'lachele' ? 'default' : 'outline'}
              size="sm"
            >
              👑 Dr. Lachele
            </Button>
          </div>
        </div>
      
        <div className="flex items-center space-x-4">
          <div className="flex space-x-1">
            {(['month', 'week', 'day'] as ViewType[]).map(view => (
              <Button
                key={view}
                onClick={() => setCurrentView(view)}
                variant={currentView === view ? 'default' : 'outline'}
                size="sm"
                className="capitalize"
              >
                {view}
              </Button>
            ))}
          </div>
          <Button
            onClick={() => setShowEventModal(true)}
            className="glow-primary"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Event
          </Button>
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button
            onClick={() => navigateCalendar(-1)}
            variant="outline"
            size="sm"
          >
            <ChevronLeft className="h-5 w-5" />
          </Button>
          <h2 className="text-2xl font-semibold text-foreground">
            {currentView === 'month' && currentDate.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            {currentView === 'week' && `Week of ${currentDate.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}`}
            {currentView === 'day' && selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </h2>
          <Button
            onClick={() => navigateCalendar(1)}
            variant="outline"
            size="sm"
          >
            <ChevronRight className="h-5 w-5" />
          </Button>
          <Button
            onClick={() => {
              const today = new Date();
              setCurrentDate(today);
              setSelectedDate(today);
            }}
            variant="secondary"
            size="sm"
          >
            Today
          </Button>
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-muted-foreground text-sm font-medium">Show:</span>
          {Object.entries(categories).map(([key, category]) => {
            const Icon = category.icon;
            const isActive = filterCategories[key as keyof FilterCategories];
            return (
              <Button
                key={key}
                onClick={() => setFilterCategories(prev => ({ ...prev, [key]: !prev[key as keyof FilterCategories] }))}
                variant={isActive ? "default" : "outline"}
                size="sm"
                className="flex items-center space-x-2"
              >
                <Icon className="h-4 w-4" />
                <span className="hidden lg:inline capitalize">{key}</span>
                {isActive && <span className="text-xs">✓</span>}
              </Button>
            );
          })}
        </div>
      </div>
    
      <div className="mt-4 text-muted-foreground text-sm">
        View: {currentView} | Selected: {selectedDate.toLocaleDateString()} | User: {currentUser}
      </div>
    </div>
  );

  // Month View
  const MonthView: React.FC = () => {
    const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
    const startDate = new Date(firstDay);
    startDate.setDate(startDate.getDate() - firstDay.getDay());
  
    const days: Date[] = [];
    const currentDateLoop = new Date(startDate);
  
    while (days.length < 42) {
      days.push(new Date(currentDateLoop));
      currentDateLoop.setDate(currentDateLoop.getDate() + 1);
    }

    return (
      <div className="glass-card overflow-hidden">
        <div className="grid grid-cols-7 bg-muted/50">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
            <div key={day} className="p-4 text-center font-semibold text-muted-foreground border-r border-border last:border-r-0">
              {day}
            </div>
          ))}
        </div>
      
        <div className="grid grid-cols-7">
          {days.map((day, index) => {
            const dayEvents = getEventsForDate(day);
            const isCurrentMonth = day.getMonth() === currentDate.getMonth();
            const isToday = day.toDateString() === new Date().toDateString();
            const isSelected = day.toDateString() === selectedDate.toDateString();
          
            return (
              <div
                key={index}
                className={`min-h-32 p-2 border-r border-b border-border last:border-r-0 transition-all cursor-pointer hover:bg-accent/50 ${
                  isCurrentMonth ? 'bg-background' : 'bg-muted/20'
                } ${isSelected ? 'ring-2 ring-primary' : ''}`}
                onClick={() => {
                  setSelectedDate(new Date(day));
                  setCurrentDate(new Date(day));
                  setCurrentView('day');
                }}
              >
                <div className={`text-sm font-medium mb-2 ${
                  isToday ? 'bg-primary text-primary-foreground w-6 h-6 rounded-full flex items-center justify-center' :
                  isCurrentMonth ? 'text-foreground' : 'text-muted-foreground'
                }`}>
                  {day.getDate()}
                </div>
              
                <div className="space-y-1">
                  {dayEvents.slice(0, 3).map(event => (
                    <div
                      key={event.id}
                      className={`text-xs p-1 rounded ${event.color} text-white truncate`}
                      title={event.title}
                    >
                      {event.title}
                    </div>
                  ))}
                  {dayEvents.length > 3 && (
                    <div className="text-xs text-muted-foreground">
                      +{dayEvents.length - 3} more
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  // Day View
  const DayView: React.FC = () => {
    const dayEvents = getEventsForDate(selectedDate);
    const hours = Array.from({ length: 24 }, (_, i) => i);

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card">
          <div className="p-4 bg-muted/50 rounded-t-xl">
            <h3 className="text-xl font-semibold text-foreground">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </h3>
          </div>
        
          <div className="max-h-96 overflow-y-auto">
            {hours.map(hour => {
              const hourEvents = dayEvents.filter(event => {
                const eventHour = new Date(event.start).getHours();
                return eventHour === hour;
              });
            
              return (
                <div key={hour} className="flex border-b border-border">
                  <div className="w-20 p-3 text-sm text-muted-foreground bg-muted/30">
                    {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                  </div>
                  <div className="flex-1 p-3 min-h-16">
                    {hourEvents.map(event => (
                      <div
                        key={event.id}
                        className={`p-3 rounded-lg ${event.color} text-white mb-2 cursor-pointer hover:opacity-90 transition-all`}
                        onClick={() => setEditingEvent(event)}
                      >
                        <div className="font-semibold">{event.title}</div>
                        <div className="text-sm opacity-90">
                          {new Date(event.start).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })} - 
                          {new Date(event.end).toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}
                        </div>
                        {event.description && (
                          <div className="text-sm opacity-80 mt-1">{event.description}</div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="space-y-6">
          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Day Overview</h4>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Total Events:</span>
                <span className="text-foreground font-semibold">{dayEvents.length}</span>
              </div>
              {Object.entries(categories).map(([key, category]) => {
                const categoryEvents = dayEvents.filter(e => e.category === key);
                if (categoryEvents.length === 0) return null;
                const Icon = category.icon;
                return (
                  <div key={key} className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Icon className={`h-4 w-4 ${category.color}`} />
                      <span className="text-muted-foreground capitalize">{key}</span>
                    </div>
                    <span className={`font-semibold ${category.color}`}>{categoryEvents.length}</span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="glass-card p-6">
            <h4 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h4>
            <div className="space-y-2">
              <Button 
                onClick={() => {
                  setNewEvent(prev => ({
                    ...prev,
                    start: selectedDate.toISOString().split('T')[0] + 'T09:00',
                    end: selectedDate.toISOString().split('T')[0] + 'T10:00'
                  }));
                  setShowEventModal(true);
                }}
                className="w-full"
                variant="default"
              >
                Add New Event
              </Button>
              <Button 
                onClick={() => {
                  setNewEvent(prev => ({
                    ...prev,
                    title: 'Client Appointment',
                    category: 'business',
                    subcategory: 'client_appointment',
                    start: selectedDate.toISOString().split('T')[0] + 'T10:00',
                    end: selectedDate.toISOString().split('T')[0] + 'T11:30'
                  }));
                  setShowEventModal(true);
                }}
                className="w-full"
                variant="secondary"
              >
                Quick Client Booking
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Event Modal
  const EventModal: React.FC = () => {
    if (!showEventModal && !editingEvent) return null;

    const isEditing = !!editingEvent;
    const eventData = isEditing ? editingEvent : newEvent;

    const handleSave = (): void => {
      if (eventData.title && eventData.start) {
        if (isEditing) {
          setEvents(prev => prev.map(event => 
            event.id === editingEvent.id ? { ...editingEvent } : event
          ));
          setEditingEvent(null);
          createNotification(`Event "${eventData.title}" updated successfully!`, 'success');
        } else {
          addEvent();
        }
      } else {
        createNotification('Please fill in at least the title and start time.', 'error');
      }
    };

    const handleClose = (): void => {
      if (isEditing) {
        setEditingEvent(null);
      } else {
        setShowEventModal(false);
      }
    };

    const handleChange = (field: string, value: any): void => {
      if (isEditing) {
        setEditingEvent(prev => prev ? { ...prev, [field]: value } : null);
      } else {
        setNewEvent(prev => ({ ...prev, [field]: value }));
      }
    };

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <div className="glass-card p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-foreground">
              {isEditing ? 'Edit Event' : 'Create New Event'}
            </h3>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="sm"
            >
              ✕
            </Button>
          </div>

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Event title"
              value={eventData.title || ''}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
            />

            <div className="grid grid-cols-2 gap-4">
              <select
                value={eventData.category || 'business'}
                onChange={(e) => handleChange('category', e.target.value)}
                className="bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
              >
                {Object.entries(categories).map(([key, category]) => (
                  <option key={key} value={key}>{category.label}</option>
                ))}
              </select>

              <select
                value={eventData.subcategory || ''}
                onChange={(e) => handleChange('subcategory', e.target.value)}
                className="bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
              >
                <option value="">Select subcategory</option>
                {eventData.category && Object.entries(categories[eventData.category]?.subcategories || {}).map(([key, label]) => (
                  <option key={key} value={key}>{label}</option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-muted-foreground text-sm mb-1">Start Date & Time</label>
                <input
                  type="datetime-local"
                  value={eventData.start || ''}
                  onChange={(e) => handleChange('start', e.target.value)}
                  className="w-full bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-muted-foreground text-sm mb-1">End Date & Time</label>
                <input
                  type="datetime-local"
                  value={eventData.end || ''}
                  onChange={(e) => handleChange('end', e.target.value)}
                  className="w-full bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
                />
              </div>
            </div>

            <textarea
              placeholder="Description"
              value={eventData.description || ''}
              onChange={(e) => handleChange('description', e.target.value)}
              rows={3}
              className="w-full bg-background text-foreground p-3 rounded-lg border border-border focus:border-primary focus:outline-none"
            />

            <div className="flex space-x-4 mt-6">
              <Button
                onClick={handleSave}
                className="flex-1"
              >
                {isEditing ? 'Update Event' : 'Create Event'}
              </Button>
              {isEditing && (
                <Button
                  onClick={() => {
                    if (editingEvent) {
                      setEvents(prev => prev.filter(e => e.id !== editingEvent.id));
                      setEditingEvent(null);
                      createNotification('Event deleted successfully!', 'success');
                    }
                  }}
                  variant="destructive"
                >
                  Delete
                </Button>
              )}
              <Button
                onClick={handleClose}
                variant="outline"
              >
                Cancel
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CalendarHeader />
      
        {currentView === 'month' && <MonthView />}
        {currentView === 'week' && (
          <div className="text-center py-12">
            <Calendar className="h-16 w-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">Week View</h3>
            <p className="text-muted-foreground">Week view coming soon. Use Month or Day view for now.</p>
          </div>
        )}
        {currentView === 'day' && <DayView />}
      
        <EventModal />
      
        {notifications.length > 0 && (
          <div className="fixed bottom-4 right-4 space-y-2 z-50">
            {notifications.map(notification => (
              <div
                key={notification.id}
                className={`p-4 rounded-lg shadow-lg transition-all transform glass-card ${
                  notification.type === 'success' 
                    ? 'border-success text-success' 
                    : 'border-destructive text-destructive'
                }`}
              >
                <div className="flex items-center space-x-2">
                  {notification.type === 'success' ? (
                    <CheckCircle className="h-5 w-5" />
                  ) : (
                    <AlertTriangle className="h-5 w-5" />
                  )}
                  <span className="font-medium">{notification.message}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default UnifiedLifeCalendar;