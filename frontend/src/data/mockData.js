
export const mockUsers= [
  {
    id: '1',
    name: 'John Doe',
    email: 'john@example.com',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop',
  },
  {
    id: '2',
    name: 'Jane Smith',
    email: 'jane@example.com',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
  },
];

export const mockTasks= [
  {
    id: '1',
    title: 'Design New Dashboard',
    description: 'Create wireframes and mockups for the new dashboard interface',
    status: 'IN_PROGRESS',
    dueDate: '2024-03-25',
    assigneeId: '1',
    createdBy: '2',
    comments: [
      {
        id: '1',
        taskId: '1',
        userId: '2',
        content: 'How are the wireframes coming along?',
        createdAt: '2024-03-20T10:00:00Z',
      },
    ],
  },
  {
    id: '2',
    title: 'Implement Authentication',
    description: 'Set up user authentication system with email/password',
    status: 'TODO',
    dueDate: '2024-03-28',
    assigneeId: '2',
    createdBy: '1',
    comments: [],
  },
];
