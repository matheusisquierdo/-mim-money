import { Container } from './styles';
import { useTransactions } from '../../hooks/useTransactions';

export function TrasactionsTable() {
  const { transactions } = useTransactions();
  console.log(transactions);
  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(
            ({ id, title, category, amount, type, createdAt }) => {
              return (
                <tr key={id}>
                  <td>{title}</td>
                  <td className={amount ? type : ''}>
                    {type == 'withdraw' ? '-' : ''}
                    {amount
                      ? new Intl.NumberFormat('pt-br', {
                          style: 'currency',
                          currency: 'BRL',
                        }).format(amount)
                      : '-'}
                  </td>
                  <td>{category}</td>
                  <td>
                    {createdAt
                      ? new Intl.DateTimeFormat('pt-br').format(
                          new Date(createdAt)
                        )
                      : '-'}
                  </td>
                </tr>
              );
            }
          )}
        </tbody>
      </table>
    </Container>
  );
}
