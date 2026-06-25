import { useEffect, useState } from "react";
import { getNotifications } from "../api/notifications";
import { createLog } from "../api/logger";

const typeWeight = {
  Placement: 1,
  Result: 2,
  Event: 3,
};

export const useNotifications = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        await createLog(
          "frontend",
          "info",
          "hook",
          "Loading notification feed"
        );

        const notifications = await getNotifications();

        const orderedNotifications = [...notifications].sort(
          (first, second) => {
            const priorityDiff =
              typeWeight[first.Type] -
              typeWeight[second.Type];

            if (priorityDiff !== 0) {
              return priorityDiff;
            }

            return (
              new Date(second.Timestamp) -
              new Date(first.Timestamp)
            );
          }
        );

        setItems(orderedNotifications.slice(0, 10));

        await createLog(
          "frontend",
          "info",
          "hook",
          "Notification feed loaded successfully"
        );
      } catch {
        await createLog(
          "frontend",
          "error",
          "hook",
          "Unable to load notifications"
        );
      }
    };

    fetchData();
  }, []);

  return {
    notifications: items,
  };
};