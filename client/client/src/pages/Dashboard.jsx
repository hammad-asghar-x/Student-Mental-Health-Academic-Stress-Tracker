import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-slate-800">Student Dashboard</h1>
          <button onClick={handleLogout} className="text-rose-500 hover:text-rose-700 font-medium">Logout</button>
        </div>
        <p className="text-slate-600">Welcome, <span className="font-bold text-blue-600">{user?.name}</span>!</p>
        <p className="text-slate-500 text-sm mt-2">Role: {user?.role} | ID: {user?.studentId}</p>
        <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800">
           Dashboard features coming in Phase 6!
        </div>
      </div>
    </div>
  );
}

export default Dashboard;