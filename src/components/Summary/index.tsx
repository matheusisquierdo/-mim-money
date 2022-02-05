import { Container } from './styles';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { useTransactions } from '../../hooks/useTransactions';

export function Summary() {
  const { transactions } = useTransactions();

  const { total, totalWithdraws, totalDeposits } = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === 'deposit') {
        acc.totalDeposits = acc.totalDeposits + transaction.amount;
        acc.total += transaction.amount;
      }
      if (transaction.type === 'withdraw') {
        acc.totalWithdraws = acc.totalWithdraws - transaction.amount;
        acc.total -= transaction.amount;
      }
      return acc;
    },
    { totalDeposits: 0, totalWithdraws: 0, total: 0 }
  );

  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalDeposits)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="Sáidas" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(totalWithdraws)}
        </strong>
      </div>

      <div>
        <header>
          <p>Saldo</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>
          {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          }).format(total)}
        </strong>
      </div>
    </Container>
  );
}
