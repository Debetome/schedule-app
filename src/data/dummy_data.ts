interface Activity {
  id: string
  title: string;
  description: string;
  date: string; // Assuming date is in ISO string format (e.g., "2024-03-20")
  done: boolean;
}

const activities: Activity[] = [
  {
    id: "f8c9a137-1b91-46f1-9b4f-16377c3a1e11",
    title: "Complete React Project",
    description: "Finish building the React project for the client",
    date: "2024-03-20",
    done: false,
  },
  {
    id: "d9f7bc47-9dc8-4eb5-b2f6-2a5ee548d142",
    title: "Grocery Shopping",
    description: "Buy groceries for the week",
    date: "2024-03-21",
    done: false,
  },
  {
    id: "5e6c3d9d-3b32-4e5c-ba1a-9e80c2e1f8b9",
    title: "Exercise",
    description: "Go for a run in the park",
    date: "2024-03-22",
    done: true,
  },
];

export default activities;
