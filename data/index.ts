export type Expense = {
  id: number;
  category: string;
  amount: number;
  date: string;
  description: string;
  isDeleted: boolean;
  createdAt: string;
  updatedAt: string;
};

interface GroupedExpense {
  title: string;
  data: Expense[];
}

export const expenses: GroupedExpense[] = [
  {
    title: 'E',
    data: [
      {
        id: 3,
        category: 'Entertainment',
        amount: 100.0,
        date: '2024-09-13',
        description: 'Movie tickets',
        isDeleted: true,
        createdAt: '2024-09-13T18:00:00Z',
        updatedAt: '2024-09-14T10:00:00Z',
      },
      {
        id: 4,
        category: 'Entertainment',
        amount: 200.0,
        date: '2024-09-10',
        description: 'Concert tickets',
        isDeleted: false,
        createdAt: '2024-09-10T14:00:00Z',
        updatedAt: '2024-09-10T15:00:00Z',
      },
    ],
  },
  {
    title: 'F',
    data: [
      {
        id: 1,
        category: 'Food',
        amount: 50.5,
        date: '2024-09-15',
        description: 'Lunch at a restaurant',
        isDeleted: false,
        createdAt: '2024-09-15T12:00:00Z',
        updatedAt: '2024-09-15T12:00:00Z',
      },
      {
        id: 5,
        category: 'Food',
        amount: 30.0,
        date: '2024-09-14',
        description: 'Groceries',
        isDeleted: false,
        createdAt: '2024-09-14T10:00:00Z',
        updatedAt: '2024-09-14T12:00:00Z',
      },
    ],
  },
  {
    title: 'T',
    data: [
      {
        id: 2,
        category: 'Transport',
        amount: 15.0,
        date: '2024-09-14',
        description: 'Taxi fare',
        isDeleted: false,
        createdAt: '2024-09-14T08:00:00Z',
        updatedAt: '2024-09-14T08:00:00Z',
      },
      {
        id: 6,
        category: 'Transport',
        amount: 7.0,
        date: '2024-09-12',
        description: 'Bus ticket',
        isDeleted: false,
        createdAt: '2024-09-12T09:00:00Z',
        updatedAt: '2024-09-12T10:00:00Z',
      },
    ],
  },
];
