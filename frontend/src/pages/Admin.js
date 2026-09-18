import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Lock, RefreshCw } from "lucide-react";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Admin() {
  const [token, setToken] = useState("");
  const [authed, setAuthed] = useState(false);
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(false);

  const load = async (t) => {
    setLoading(true);
    try {
      const { data } = await axios.get(`${API}/bookings`, {
        headers: { "X-Admin-Token": t },
      });
      setBookings(data);
      setAuthed(true);
    } catch (err) {
      toast.error("Invalid admin token.");
      setAuthed(false);
    } finally {
      setLoading(false);
    }
  };

  const setStatus = async (id, status) => {
    try {
      await axios.patch(`${API}/bookings/${id}?status=${status}`, {}, {
        headers: { "X-Admin-Token": token },
      });
      setBookings((bs) => bs.map((b) => (b.id === id ? { ...b, status } : b)));
      toast.success(`Marked as ${status}`);
    } catch {
      toast.error("Update failed.");
    }
  };

  if (!authed) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-cream-2 px-4 pt-20">
        <div className="bg-white rounded-2xl border border-stone-200 p-10 w-full max-w-sm text-center">
          <Lock className="mx-auto text-gold mb-4" size={30} />
          <h1 className="font-serif text-2xl mb-2">Admin Access</h1>
          <p className="text-sm text-stone-500 mb-6">Enter the admin token to view enquiries.</p>
          <input
            data-testid="admin-token-input"
            type="password"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && load(token)}
            placeholder="Admin token"
            className="form-input mb-4"
          />
          <button
            data-testid="admin-login-btn"
            onClick={() => load(token)}
            disabled={loading}
            className="w-full rounded-full bg-onyx text-cream py-3.5 text-xs uppercase tracking-[0.22em] hover:bg-gold hover:text-onyx transition-all"
          >
            {loading ? "Checking…" : "Enter"}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-cream-2 pt-28 pb-20 px-4 sm:px-8 lg:px-16" data-testid="admin-page">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="font-serif text-3xl">Enquiries</h1>
            <p className="text-sm text-stone-500">{bookings.length} total submissions</p>
          </div>
          <button
            data-testid="admin-refresh-btn"
            onClick={() => load(token)}
            className="flex items-center gap-2 rounded-full border border-onyx/30 px-5 py-2.5 text-xs uppercase tracking-[0.18em] hover:bg-onyx hover:text-cream transition-all"
          >
            <RefreshCw size={14} /> Refresh
          </button>
        </div>

        {bookings.length === 0 ? (
          <p className="text-stone-500">No enquiries yet.</p>
        ) : (
          <div className="space-y-4">
            {bookings.map((b) => (
              <div
                key={b.id}
                data-testid={`admin-booking-${b.id}`}
                className="bg-white rounded-xl border border-stone-200 p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-serif text-lg">{b.name}</h3>
                    <span
                      className={`text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        b.status === "new"
                          ? "bg-soft-pink text-onyx"
                          : b.status === "confirmed"
                          ? "bg-green-100 text-green-800"
                          : "bg-stone-200 text-stone-600"
                      }`}
                    >
                      {b.status}
                    </span>
                  </div>
                  <p className="text-sm text-stone-600">
                    {b.service} · {b.preferred_datetime}
                  </p>
                  <p className="text-xs text-stone-400 mt-1">
                    {b.email} · {b.phone}
                  </p>
                  {b.message && <p className="text-sm text-stone-500 mt-2 italic">"{b.message}"</p>}
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setStatus(b.id, "confirmed")}
                    className="text-xs px-3 py-2 rounded-full border border-green-300 text-green-700 hover:bg-green-50"
                  >
                    Confirm
                  </button>
                  <button
                    onClick={() => setStatus(b.id, "archived")}
                    className="text-xs px-3 py-2 rounded-full border border-stone-300 text-stone-500 hover:bg-stone-50"
                  >
                    Archive
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
