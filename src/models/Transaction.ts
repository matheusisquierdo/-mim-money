export interface Transaction {
  id: number;
  title: string;
  type: 'deposit' | 'withdraw';
  amount: number;
  category: string;
  createdAt?: Date;
}
