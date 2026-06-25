import "./App.css";
import Card from "./components/Card";
import { useNotifications } from "./hooks/useNotifications";

function App() {
  const { notifications } = useNotifications();

  return (
    <main className="app-container">
      <header>
        <h1>Campus Notifications</h1>
      </header>

      {notifications.length > 0 ? (
        <section>
          {notifications.map((notification) => (
            <Card
              key={notification.ID}
              data={notification}
            />
          ))}
        </section>
      ) : (
        <p>No notifications available.</p>
      )}
    </main>
  );
}

export default App;
