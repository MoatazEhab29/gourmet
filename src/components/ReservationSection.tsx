import { useState, type FormEvent } from 'react';
import { CalendarDays, Clock, Users, MessageSquare, User, Mail, Phone, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface ReservationForm {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: number;
  special_requests: string;
}

type SubmitState = 'idle' | 'loading' | 'success' | 'error';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM',
  '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM',
  '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM',
];

export default function ReservationSection() {
  const [form, setForm] = useState<ReservationForm>({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    special_requests: '',
  });
  const [submitState, setSubmitState] = useState<SubmitState>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const today = new Date().toISOString().split('T')[0];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'guests' ? parseInt(value, 10) : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitState('loading');
    setErrorMsg('');

    try {
      const { error } = await supabase.from('reservations').insert({
        name: form.name,
        email: form.email,
        phone: form.phone,
        reservation_date: form.date,
        reservation_time: form.time,
        guests: form.guests,
        special_requests: form.special_requests || null,
      });

      if (error) throw error;

      setSubmitState('success');
      setForm({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        guests: 2,
        special_requests: '',
      });
    } catch (err) {
      setSubmitState('error');
      setErrorMsg(
        err instanceof Error
          ? err.message
          : 'Something went wrong. Please try again.'
      );
    }
  };

  const inputClass =
    'w-full bg-charcoal-900 border border-charcoal-700 rounded-xl pl-11 pr-4 py-3 text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all duration-200 text-sm';

  const labelClass =
    'absolute left-3 top-1/2 -translate-y-1/2 text-charcoal-500 pointer-events-none';

  return (
    <section id="reservation" className="relative py-24 md:py-32 bg-charcoal-950 overflow-hidden">
      {/* Ambient background */}
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.pexels.com/photos/31970869/pexels-photo-31970869.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt=""
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal-950 via-charcoal-950/80 to-charcoal-950/60" />
      </div>

      <div className="relative max-w-5xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="text-gold-400 text-sm font-medium tracking-[0.25em] uppercase mb-3">
            Reservations
          </p>
          <h2 className="font-serif text-4xl md:text-5xl font-light text-charcoal-50">
            Reserve Your <span className="italic text-gold-400">Experience</span>
          </h2>
          <p className="mt-4 text-charcoal-400 max-w-xl mx-auto leading-relaxed">
            Secure your table in a few simple steps. We look forward to
            welcoming you.
          </p>
        </div>

        <div className="bg-charcoal-900/80 backdrop-blur-xl rounded-3xl border border-charcoal-700/50 shadow-2xl shadow-black/40 p-6 md:p-10">
          {submitState === 'success' ? (
            <div className="text-center py-12">
              <CheckCircle2 className="w-16 h-16 text-success-500 mx-auto mb-6" />
              <h3 className="font-serif text-3xl text-charcoal-50 mb-3">
                Reservation Confirmed
              </h3>
              <p className="text-charcoal-400 max-w-md mx-auto leading-relaxed">
                Thank you, your table request has been received. We'll send a
                confirmation to your email shortly.
              </p>
              <button
                onClick={() => setSubmitState('idle')}
                className="mt-8 px-8 py-3 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold rounded-full transition-all duration-300 hover:scale-105"
              >
                Make Another Reservation
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className={labelClass}>
                    <User className="w-5 h-5" />
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Full Name"
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>
                    <Mail className="w-5 h-5" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Phone & Guests */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className={labelClass}>
                    <Phone className="w-5 h-5" />
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>
                    <Users className="w-5 h-5" />
                  </label>
                  <select
                    name="guests"
                    value={form.guests}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n === 1 ? 'Guest' : 'Guests'}
                      </option>
                    ))}
                    <option value={9}>8+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Date & Time */}
              <div className="grid md:grid-cols-2 gap-5">
                <div className="relative">
                  <label className={labelClass}>
                    <CalendarDays className="w-5 h-5" />
                  </label>
                  <input
                    type="date"
                    name="date"
                    required
                    min={today}
                    value={form.date}
                    onChange={handleChange}
                    className={inputClass}
                  />
                </div>
                <div className="relative">
                  <label className={labelClass}>
                    <Clock className="w-5 h-5" />
                  </label>
                  <select
                    name="time"
                    required
                    value={form.time}
                    onChange={handleChange}
                    className={inputClass}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Special requests */}
              <div className="relative">
                <label className="absolute left-3 top-3.5 text-charcoal-500 pointer-events-none">
                  <MessageSquare className="w-5 h-5" />
                </label>
                <textarea
                  name="special_requests"
                  rows={3}
                  value={form.special_requests}
                  onChange={handleChange}
                  placeholder="Special requests — dietary needs, celebrations, seating preferences..."
                  className="w-full bg-charcoal-900 border border-charcoal-700 rounded-xl pl-11 pr-4 py-3 text-charcoal-100 placeholder-charcoal-500 focus:outline-none focus:border-gold-500 focus:ring-1 focus:ring-gold-500/30 transition-all duration-200 text-sm resize-none"
                />
              </div>

              {/* Error message */}
              {submitState === 'error' && (
                <div className="flex items-center gap-3 p-4 bg-error-500/10 border border-error-500/30 rounded-xl text-error-400 text-sm">
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitState === 'loading'}
                className="w-full py-4 bg-gold-500 hover:bg-gold-400 text-charcoal-900 font-semibold rounded-xl transition-all duration-300 hover:shadow-xl hover:shadow-gold-500/30 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitState === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Securing Your Table...
                  </>
                ) : (
                  'Confirm Reservation'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
